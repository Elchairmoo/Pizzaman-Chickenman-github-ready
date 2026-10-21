import { z } from "zod";
import { COOKIE_NAME } from "../shared/const.js";
import { getSessionCookieOptions } from "./_core/cookies.js";
import { systemRouter } from "./_core/systemRouter.js";
import { publicProcedure, router } from "./_core/trpc.js";
import { notifyOwner } from "./_core/notification.js";
import { ENV } from "./_core/env.js";

const enquiryInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(60).optional().default(""),
  category: z.string().trim().min(1).max(80),
  item: z.string().trim().max(160).optional().default(""),
  quantity: z.string().trim().min(1).max(20),
  size: z.string().trim().max(80).optional().default(""),
  customisation: z.string().trim().max(2000).optional().default(""),
  preferredTime: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

type Enquiry = z.infer<typeof enquiryInput>;

const formatEnquiry = (input: Enquiry) => `New Pizzaman Chickenman food enquiry\n\nCustomer\n- Name: ${input.name}\n- Email: ${input.email}\n- Phone: ${input.phone || "Not provided"}\n\nCraving\n- Category: ${input.category}\n- Food item: ${input.item || "General enquiry"}\n- Quantity: ${input.quantity}\n- Preferred size: ${input.size || "Not applicable"}\n- Preferred date/time: ${input.preferredTime || "Not specified"}\n\nDetails\n- Customisation / special instructions: ${input.customisation || "None provided"}\n- Additional message: ${input.message || "None provided"}\n\nThis is an enquiry, not a confirmed order.`;

async function deliverEnquiry(input: Enquiry) {
  const content = formatEnquiry(input);
  if (ENV.resendApiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${ENV.resendApiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: ENV.enquiryFromEmail,
        to: [ENV.enquiryRecipient],
        reply_to: input.email,
        subject: `Pizzaman Chickenman enquiry from ${input.name}`,
        text: content,
      }),
    });
    if (!response.ok) throw new Error(`Email provider rejected the enquiry (${response.status}).`);
    return "email" as const;
  }

  const notified = await notifyOwner({ title: `Pizzaman Chickenman enquiry from ${input.name}`, content: `${content}\n\nRecipient configured for direct delivery: ${ENV.enquiryRecipient}` });
  if (!notified) throw new Error("The enquiry delivery service is temporarily unavailable.");
  return "owner-notification" as const;
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  enquiry: router({
    submit: publicProcedure.input(enquiryInput).mutation(async ({ input }) => {
      try {
        const delivery = await deliverEnquiry(input);
        return { success: true as const, delivery };
      } catch (error) {
        console.error("[Pizzaman Chickenman] Enquiry delivery failed:", error);
        throw new Error("We could not deliver your enquiry. Please try again.");
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;

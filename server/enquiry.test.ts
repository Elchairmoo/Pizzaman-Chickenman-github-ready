import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const caller = appRouter.createCaller({
  user: undefined,
  req: { protocol: "https", headers: {} } as TrpcContext["req"],
  res: {} as TrpcContext["res"],
});

describe("enquiry.submit", () => {
  it("rejects incomplete or malformed contact details before delivery", async () => {
    await expect(caller.enquiry.submit({
      name: "A",
      email: "not-an-email",
      phone: "",
      category: "pizza",
      item: "",
      quantity: "1",
      size: "",
      customisation: "",
      preferredTime: "",
      message: "",
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});

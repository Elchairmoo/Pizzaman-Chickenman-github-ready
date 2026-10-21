# Pizzaman Chickenman

A modern, responsive food browsing and customer enquiry MVP for **Pizzaman Chickenman — Discover Deliciousness. Follow Your Cravings.**

## Included

- Branded responsive homepage with search and featured categories.
- Working menu page with category filters and text search.
- Dedicated pages for Pizza, Burgers, Fried Chicken, Rice Dishes, Local Ghanaian Foods, Sandwiches, Pasta, Snacks, Drinks, and Desserts.
- Food cards with item-specific enquiry links and automatic prefill.
- Responsive enquiry experience with server-side validation.
- Secure server-side email delivery adapter using Resend when `RESEND_API_KEY` is configured, with built-in owner notification fallback for development and preview.
- About and Contact pages with placeholders for the business phone, location, Google Maps, and social links that were not supplied in the brief.
- No shopping cart, checkout, payments, accounts, order tracking, or confirmed-order language.

## Local development

```bash
pnpm install
pnpm dev
```

The WebDev project runs through the provided server entrypoint and exposes the Vite preview at the project preview URL.

## Enquiry delivery

The public form calls the `enquiry.submit` tRPC procedure. It validates every field on the server before attempting delivery. For direct email delivery, configure the following server-side environment variables in the deployment environment:

```bash
RESEND_API_KEY=your_private_resend_api_key
ENQUIRY_RECIPIENT=Pizzamanchickenman20000@gmail.com
ENQUIRY_FROM_EMAIL="Pizzaman Chickenman <your-verified-sender@example.com>"
```

`RESEND_API_KEY` is never exposed to frontend JavaScript. If it is not configured, the app uses the built-in Manus owner notification channel so preview submissions still have a server-side delivery path. The frontend only displays a success message after the delivery call returns successfully; failures remain retryable.

## Brand placeholders

The following values remain intentionally marked as placeholders until the business owner provides them:

- `0508180117`
- `Dansoman`
- `[GOOGLE MAPS LINK]`
- `[SOCIAL MEDIA LINKS]`

## Image sources

Food photography is sourced from Unsplash image URLs and used as remote, responsive images so the project does not bundle large local media files.

## Production build

```bash
pnpm check
pnpm build
```

The app is a full-stack WebDev project and should be published through the WebDev project workflow after saving a checkpoint.

## Vercel deployment

This repository includes `vercel.json` and `api/trpc/[...path].ts` so it can be deployed from the repository root as a Vite frontend with a serverless tRPC endpoint.

In Vercel, import the repository and keep **Root Directory** set to the folder containing `package.json`. The project settings are already defined in `vercel.json`; if Vercel asks for them manually, use:

- **Framework preset:** Vite
- **Build command:** `pnpm build`
- **Output directory:** `dist/public`
- **Install command:** `pnpm install`

Add the same server-side environment variables used by the app, especially `RESEND_API_KEY`, `ENQUIRY_RECIPIENT`, `ENQUIRY_FROM_EMAIL`, `BUILT_IN_FORGE_API_URL`, `BUILT_IN_FORGE_API_KEY`, `JWT_SECRET`, and the Manus OAuth variables if authentication is enabled. Do not upload a ZIP as a static folder; upload/import the extracted repository so Vercel can run the build command and discover the `api/` function.

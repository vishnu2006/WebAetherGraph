This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Cloudflare Pages Deployment

This site is configured for static export to Cloudflare Pages.

### Build & Deploy

**Build Command:**
```bash
npm run build
```

**Output Directory:** `out/`

**Framework:** Next.js (static export)

### Cloudflare Pages Configuration

1. Connect your GitHub repository to Cloudflare Pages
2. Set the following build settings:
   - **Framework:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Deploy — no Wrangler or Workers configuration needed

The site generates a fully static HTML output compatible with Cloudflare's global edge network. No server-side rendering or Node.js runtime is required.

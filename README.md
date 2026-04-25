# USEAIMA Hub

Marketing site and product hub for USEAIMA, built with Vite, React, TypeScript, and Tailwind CSS.

## Scripts

- `npm run dev` starts the local development server on port `8080`
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run test` runs the Vitest suite
- `npm run lint` runs ESLint

## Shared backend integration

`useaima-hub` stays mostly code-driven in v1, but now consumes the shared company-site backend through the public blog control plane at `blog.useaima.com` for:

- newsletter subscriber capture
- shared support/contact metadata
- company-wide support links that should stay aligned with the CMS/CRM source of truth

That shared backend ultimately maps to the company-sites Supabase project used by `aima-blog`, `useaima-hub`, and `aima-support`.

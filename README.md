# ORUWA Product Website

Public product website for `oruwa.jp`. This repository is independent from the ORUWA application and contains no Cafe business logic, customer data, authentication or production secrets.

## Local setup

Requirements: Node.js 22.13 or later.

```powershell
npm install
npm run dev
```

## Checks and build

```powershell
npm run typecheck
npm run lint
npm test
npm run build
```

The production-ready static site is generated in `out/`. That directory is the only website payload intended for `~/www/oruwa` on Sakura.

## Structure

- `app/` — routes, metadata, sitemap, robots and global styles.
- `components/` — presentation, product mockups and accessible navigation.
- `lib/site-config.ts` — public URLs and pricing display mode.
- `public/` — public static assets and Sakura security headers.
- `docs/` — product decisions and transition notes.
- `tests/` — content, routing and accessibility contracts.

Japanese is the default language. English equivalents use `/en`. Marketing copy is stored in `components/SitePage.tsx`; public URLs and pricing state are centralized in `lib/site-config.ts`.

The contact form remains disabled until a backend/provider, retention policy, validation, honeypot, rate limit and optional CAPTCHA decision are approved. Do not add secrets to the repository.

For deployment, build first and synchronize `out/` to Sakura `~/www/oruwa` only after backup and explicit approval.

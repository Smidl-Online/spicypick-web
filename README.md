# spicypick-web

Marketing website for [SpicyPick](https://spicypick.app) — the daily social dilemmas mobile app.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deploys as a static-friendly Node server (Docker) — Coolify or Vercel ready

## Pages

- `/` — landing (hero, features, how it works, pricing, reviews, download CTA)
- `/privacy` — GDPR privacy policy
- `/terms` — terms of service
- `/support` — contact form + FAQ (submits to `/api/support`, falls back to `mailto:` if the mailer is not configured)

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & start

```bash
NODE_ENV=production npm run build
npm run start
```

`NODE_ENV=production` is required for the build step (Next.js 15 refuses to prerender with `NODE_ENV=development`).

## Environment variables (optional)

| variable             | purpose                                          |
|----------------------|--------------------------------------------------|
| `RESEND_API_KEY`     | enables the `/api/support` form to send via Resend |
| `SUPPORT_INBOX_EMAIL`| recipient for the form (default `support@spicypick.com`) |
| `SUPPORT_FROM_EMAIL` | sender (default `noreply@spicypick.app`)         |

Without these the form silently falls back to a `mailto:` link in the browser.

## Deploy

Docker image:

```bash
docker build -t spicypick-web .
docker run -p 3000:3000 spicypick-web
```

Coolify: point at this repo, default Dockerfile build, expose port 3000, custom domain `spicypick.app`.

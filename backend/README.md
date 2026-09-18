# Backend

Backend-owned code lives here:

- `src/internship-db.ts` — Cloudflare D1 queries and persistence
- `src/api.ts` — validation and API/business logic
- `src/types.ts` — backend domain types
- `migrations/` — D1 schema migrations

The frontend contains only thin `app/api` adapters because Next.js requires route entry files inside the app directory. Those adapters delegate immediately to this backend package.

The D1 binding name is `intern_atlas_db`. The deployable Next.js/Vinext worker configuration remains with the frontend app so the existing single-worker deployment continues to work.

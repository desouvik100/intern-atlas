# Backend

Backend-owned code lives here:

- `src/internship-db.ts` — Internship data access layer with Prisma/PostgreSQL
- `src/scholarship-db.ts` — Scholarship data access layer with Prisma/PostgreSQL
- `src/api.ts` — validation and API/business logic
- `src/types.ts` — backend domain types
- `prisma/` — Prisma schema and PostgreSQL migrations
- `migrations/` — D1 schema migrations (legacy, currently unused)

The frontend contains only thin `app/api` adapters because Next.js requires route entry files inside the app directory. Those adapters delegate immediately to this backend package and use `runtime = "nodejs"` to enable Node.js/PostgreSQL support in Cloudflare Workers via Vinext.

**Database Architecture:**
- **Development**: Neon PostgreSQL via DATABASE_URL environment variable
- **Production**: PostgreSQL via DATABASE_URL (configured as Cloudflare secret)
- **Runtime**: Node.js (nodejs_compat) enabled via Vinext framework
- **Adapter**: PrismaPg for PostgreSQL connections

The deployable Next.js/Vinext worker configuration remains with the frontend app so the existing single-worker deployment continues to work.

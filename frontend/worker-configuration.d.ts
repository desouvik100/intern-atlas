interface Env {
  intern_atlas_db: D1Database;
}

declare module "cloudflare:workers" {
  export const env: Env;
}

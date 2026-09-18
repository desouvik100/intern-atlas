export async function getDatabase() {
  const { env } = await import("cloudflare:workers");
  return env.intern_atlas_db;
}

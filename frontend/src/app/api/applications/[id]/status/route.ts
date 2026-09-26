export const runtime = "nodejs";

export async function PATCH() {
  return Response.json(
    { error: "Application management requires employer authentication and is not available in this release." },
    { status: 403 },
  );
}

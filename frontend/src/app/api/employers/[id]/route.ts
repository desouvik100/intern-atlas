export const runtime = "nodejs";

export async function GET() {
  return Response.json(
    { error: "Employer profiles require authentication and are not available in this release." },
    { status: 403 },
  );
}

export async function PATCH() {
  return Response.json(
    { error: "Employer profiles require authentication and are not available in this release." },
    { status: 403 },
  );
}

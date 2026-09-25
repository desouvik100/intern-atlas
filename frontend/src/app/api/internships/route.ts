import { getInternshipsResponse } from "@internatlas/backend/api";

export const runtime = "nodejs";

export async function GET() {
  return getInternshipsResponse();
}

export async function POST() {
  return Response.json(
    { error: "Employer posting is not available in this release." },
    { status: 403 },
  );
}

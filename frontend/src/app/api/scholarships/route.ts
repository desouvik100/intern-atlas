import { getScholarshipsResponse } from "@internatlas/backend/api";

export const runtime = "nodejs";

export async function GET() {
  return getScholarshipsResponse();
}

export async function POST() {
  return Response.json(
    { error: "Scholarship posting is not available in this release." },
    { status: 403 },
  );
}

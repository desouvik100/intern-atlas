import { getScholarshipResponse } from "@internatlas/backend/api";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  return getScholarshipResponse(slug);
}

export async function PATCH() {
  return Response.json(
    { error: "Scholarship editing is not available in this release." },
    { status: 403 },
  );
}

export async function DELETE() {
  return Response.json(
    { error: "Scholarship editing is not available in this release." },
    { status: 403 },
  );
}
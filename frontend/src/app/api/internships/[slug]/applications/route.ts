import {
  getApplicationsResponse,
} from "@internatlas/backend/api";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  const { slug } = await params;

  return getApplicationsResponse(
    Number(slug),
  );
}
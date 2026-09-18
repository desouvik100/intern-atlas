import {
  deleteInternshipResponse,
  getInternshipResponse,
  patchInternshipResponse,
} from "@internatlas/backend/api";

export const runtime = "edge";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  return getInternshipResponse(slug);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  const { slug } = await params;
  return patchInternshipResponse(request, slug);
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  return deleteInternshipResponse(slug);
}

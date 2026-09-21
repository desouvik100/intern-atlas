import { patchApplicationStatusResponse } from "@internatlas/backend/api";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  const { id } = await params;

  return patchApplicationStatusResponse(request, Number(id));
}
import {
  getEmployerResponse,
  patchEmployerResponse,
} from "@internatlas/backend/api";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  const { id } = await params;

  return getEmployerResponse(Number(id));
}

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  const { id } = await params;

  return patchEmployerResponse(request, Number(id));
}
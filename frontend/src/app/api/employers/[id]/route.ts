import { getEmployerResponse, patchEmployerResponse } from "@internatlas/backend/api";
import { requireEmployerAuth, unauthorizedResponse, forbiddenResponse } from "@internatlas/backend/auth-helpers";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const user = await requireEmployerAuth(request);
    const { id } = await params;
    const requestedId = parseInt(id, 10);

    // Employers can only access their own profile
    if (user.id !== requestedId) {
      return forbiddenResponse();
    }

    return getEmployerResponse(requestedId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("GET employer error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const user = await requireEmployerAuth(request);
    const { id } = await params;
    const requestedId = parseInt(id, 10);

    // Employers can only update their own profile
    if (user.id !== requestedId) {
      return forbiddenResponse();
    }

    return patchEmployerResponse(request, requestedId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("PATCH employer error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

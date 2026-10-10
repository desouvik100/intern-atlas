import { getInternshipsResponse, postInternshipResponse } from "@internatlas/backend/api";
import { requireEmployerAuth, unauthorizedResponse, forbiddenResponse } from "@internatlas/backend/auth-helpers";

export const runtime = "nodejs";

export async function GET() {
  return getInternshipsResponse();
}

export async function POST(request: Request) {
  try {
    const user = await requireEmployerAuth(request);
    
    // Add employer ID to the request body
    const body = await request.json();
    const requestWithEmployerId = new Request(request.url, {
      method: "POST",
      headers: request.headers,
      body: JSON.stringify({
        ...body,
        employerId: user.id,
      }),
    });

    return postInternshipResponse(requestWithEmployerId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("POST internship error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { getSessionFromToken, getSessionTokenFromCookies } from "@internatlas/backend/auth";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get("cookie");
    const sessionToken = getSessionTokenFromCookies(cookieHeader);

    const session = await getSessionFromToken(sessionToken);

    if (!session) {
      return Response.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    return Response.json({
      user: session.user,
    });
  } catch (error) {
    console.error("Session retrieval error:", error);
    return Response.json(
      { error: "Unable to retrieve session" },
      { status: 500 }
    );
  }
}

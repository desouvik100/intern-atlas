import { getSessionFromToken, getSessionTokenFromCookies, type AuthUser } from "./auth";

export async function requireAuth(request: Request): Promise<AuthUser> {
  const cookieHeader = request.headers.get("cookie");
  const sessionToken = getSessionTokenFromCookies(cookieHeader);
  const session = await getSessionFromToken(sessionToken);

  if (!session) {
    throw new Error("UNAUTHORIZED");
  }

  return session.user;
}

export async function requireEmployerAuth(request: Request): Promise<AuthUser> {
  const user = await requireAuth(request);

  if (user.role !== "employer") {
    throw new Error("FORBIDDEN");
  }

  return user;
}

export async function requireStudentAuth(request: Request): Promise<AuthUser> {
  const user = await requireAuth(request);

  if (user.role !== "student") {
    throw new Error("FORBIDDEN");
  }

  return user;
}

export function unauthorizedResponse(): Response {
  return Response.json(
    { error: "Authentication required" },
    { status: 401 }
  );
}

export function forbiddenResponse(): Response {
  return Response.json(
    { error: "You do not have permission to access this resource" },
    { status: 403 }
  );
}

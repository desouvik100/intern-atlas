import { login, createSessionCookie } from "@internatlas/backend/auth";

export const runtime = "nodejs";

type LoginRequest = {
  email: string;
  password: string;
  role: "student" | "employer";
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LoginRequest>;

    const { email, password, role } = body;

    // Validate required fields
    if (!email || !password || !role) {
      return Response.json(
        { error: "Email, password, and account type are required" },
        { status: 400 }
      );
    }

    if (role !== "student" && role !== "employer") {
      return Response.json(
        { error: "Invalid account type" },
        { status: 400 }
      );
    }

    // Attempt login
    const result = await login({ email, password, role });

    if (!result.success) {
      return Response.json(
        { error: result.error },
        { status: 401 }
      );
    }

    // Set session cookie
    const cookie = createSessionCookie(result.session.sessionId, result.session.expiresAt);

    return Response.json(
      {
        user: result.session.user,
        message: "Logged in successfully",
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { error: "Unable to log in. Please try again." },
      { status: 500 }
    );
  }
}

import { signupStudent, signupEmployer, createSessionCookie } from "@internatlas/backend/auth";

export const runtime = "nodejs";

type SignupRequest = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: "student" | "employer";
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<SignupRequest>;

    const { name, email, password, passwordConfirm, role } = body;

    // Validate required fields
    if (!name || !email || !password || !passwordConfirm || !role) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (role !== "student" && role !== "employer") {
      return Response.json(
        { error: "Invalid account type" },
        { status: 400 }
      );
    }

    // Call appropriate signup function
    const result =
      role === "student"
        ? await signupStudent({ name, email, password, passwordConfirm })
        : await signupEmployer({ name, email, password, passwordConfirm });

    if (!result.success) {
      return Response.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // Set session cookie
    const cookie = createSessionCookie(result.session.sessionId, result.session.expiresAt);

    return Response.json(
      {
        user: result.session.user,
        message: "Account created successfully",
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return Response.json(
      { error: "Unable to create account. Please try again." },
      { status: 500 }
    );
  }
}

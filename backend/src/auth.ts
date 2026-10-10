import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { randomBytes, createHash } from "node:crypto";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function getPrisma() {
  if (!globalForPrisma.prisma) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL is not configured");
    }

    globalForPrisma.prisma = new PrismaClient({
      adapter: new PrismaPg({ connectionString }),
    });
  }

  return globalForPrisma.prisma;
}

const SESSION_EXPIRY_DAYS = 30;
const SALT_ROUNDS = 12;

export type AuthUser = {
  id: number;
  email: string;
  name: string | null;
  role: "student" | "employer";
};

export type SessionInfo = {
  sessionId: string;
  user: AuthUser;
  expiresAt: Date;
};

function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

function generateSessionToken(): string {
  return randomBytes(32).toString("hex");
}

function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function createSessionExpiryDate(): Date {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + SESSION_EXPIRY_DAYS);
  return expiry;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePassword(password: string): { valid: boolean; error?: string } {
  if (password.length < 8) {
    return { valid: false, error: "Password must be at least 8 characters long" };
  }
  if (password.length > 128) {
    return { valid: false, error: "Password is too long" };
  }
  return { valid: true };
}

function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100;
}

/* =========================================================
   STUDENT SIGNUP
========================================================= */

export async function signupStudent(input: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<{ success: true; session: SessionInfo } | { success: false; error: string }> {
  try {
    const name = input.name.trim();
    const email = normalizeEmail(input.email);
    const { password, passwordConfirm } = input;

    // Validation
    if (!validateName(name)) {
      return { success: false, error: "Name must be between 2 and 100 characters" };
    }

    if (!validateEmail(email)) {
      return { success: false, error: "Invalid email address" };
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return { success: false, error: passwordValidation.error! };
    }

    if (password !== passwordConfirm) {
      return { success: false, error: "Passwords do not match" };
    }

    const prisma = getPrisma();

    // Check for existing email
    const existing = await prisma.student.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existing) {
      return { success: false, error: "An account with this email already exists" };
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create student and session in transaction
    const sessionToken = generateSessionToken();
    const sessionTokenHash = hashSessionToken(sessionToken);
    const expiresAt = createSessionExpiryDate();

    const result = await prisma.$transaction(async (tx) => {
      const student = await tx.student.create({
        data: {
          email,
          name,
          passwordHash,
        },
      });

      const session = await tx.authSession.create({
        data: {
          id: randomBytes(16).toString("hex"),
          sessionToken: sessionTokenHash,
          role: "student",
          studentId: student.id,
          expiresAt,
        },
      });

      return { student, session };
    });

    return {
      success: true,
      session: {
        sessionId: sessionToken,
        user: {
          id: result.student.id,
          email: result.student.email,
          name: result.student.name,
          role: "student",
        },
        expiresAt,
      },
    };
  } catch (error) {
    console.error("Student signup error:", error);
    return { success: false, error: "Unable to create account. Please try again." };
  }
}

/* =========================================================
   EMPLOYER SIGNUP
========================================================= */

export async function signupEmployer(input: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<{ success: true; session: SessionInfo } | { success: false; error: string }> {
  try {
    const name = input.name.trim();
    const email = normalizeEmail(input.email);
    const { password, passwordConfirm } = input;

    // Validation
    if (!validateName(name)) {
      return { success: false, error: "Name must be between 2 and 100 characters" };
    }

    if (!validateEmail(email)) {
      return { success: false, error: "Invalid email address" };
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return { success: false, error: passwordValidation.error! };
    }

    if (password !== passwordConfirm) {
      return { success: false, error: "Passwords do not match" };
    }

    const prisma = getPrisma();

    // Check for existing email
    const existing = await prisma.employer.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existing) {
      return { success: false, error: "An account with this email already exists" };
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create employer and session in transaction
    const sessionToken = generateSessionToken();
    const sessionTokenHash = hashSessionToken(sessionToken);
    const expiresAt = createSessionExpiryDate();

    const result = await prisma.$transaction(async (tx) => {
      const employer = await tx.employer.create({
        data: {
          email,
          name,
          passwordHash,
          verificationStatus: "PENDING",
          profileCompleted: false,
        },
      });

      const session = await tx.authSession.create({
        data: {
          id: randomBytes(16).toString("hex"),
          sessionToken: sessionTokenHash,
          role: "employer",
          employerId: employer.id,
          expiresAt,
        },
      });

      return { employer, session };
    });

    return {
      success: true,
      session: {
        sessionId: sessionToken,
        user: {
          id: result.employer.id,
          email: result.employer.email,
          name: result.employer.name,
          role: "employer",
        },
        expiresAt,
      },
    };
  } catch (error) {
    console.error("Employer signup error:", error);
    return { success: false, error: "Unable to create account. Please try again." };
  }
}

/* =========================================================
   LOGIN
========================================================= */

export async function login(input: {
  email: string;
  password: string;
  role: "student" | "employer";
}): Promise<{ success: true; session: SessionInfo } | { success: false; error: string }> {
  try {
    const email = normalizeEmail(input.email);
    const { password, role } = input;

    if (!validateEmail(email)) {
      return { success: false, error: "Invalid credentials" };
    }

    const prisma = getPrisma();

    if (role === "student") {
      const student = await prisma.student.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          name: true,
          passwordHash: true,
        },
      });

      if (!student) {
        return { success: false, error: "Invalid credentials" };
      }

      const passwordMatch = await verifyPassword(password, student.passwordHash);
      if (!passwordMatch) {
        return { success: false, error: "Invalid credentials" };
      }

      // Create session
      const sessionToken = generateSessionToken();
      const sessionTokenHash = hashSessionToken(sessionToken);
      const expiresAt = createSessionExpiryDate();

      await prisma.authSession.create({
        data: {
          id: randomBytes(16).toString("hex"),
          sessionToken: sessionTokenHash,
          role: "student",
          studentId: student.id,
          expiresAt,
        },
      });

      return {
        success: true,
        session: {
          sessionId: sessionToken,
          user: {
            id: student.id,
            email: student.email,
            name: student.name,
            role: "student",
          },
          expiresAt,
        },
      };
    } else {
      const employer = await prisma.employer.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          name: true,
          passwordHash: true,
        },
      });

      if (!employer) {
        return { success: false, error: "Invalid credentials" };
      }

      const passwordMatch = await verifyPassword(password, employer.passwordHash);
      if (!passwordMatch) {
        return { success: false, error: "Invalid credentials" };
      }

      // Create session
      const sessionToken = generateSessionToken();
      const sessionTokenHash = hashSessionToken(sessionToken);
      const expiresAt = createSessionExpiryDate();

      await prisma.authSession.create({
        data: {
          id: randomBytes(16).toString("hex"),
          sessionToken: sessionTokenHash,
          role: "employer",
          employerId: employer.id,
          expiresAt,
        },
      });

      return {
        success: true,
        session: {
          sessionId: sessionToken,
          user: {
            id: employer.id,
            email: employer.email,
            name: employer.name,
            role: "employer",
          },
          expiresAt,
        },
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "Unable to log in. Please try again." };
  }
}

/* =========================================================
   SESSION MANAGEMENT
========================================================= */

export async function getSessionFromToken(
  sessionToken: string | undefined
): Promise<SessionInfo | null> {
  if (!sessionToken) {
    return null;
  }

  try {
    const prisma = getPrisma();
    const sessionTokenHash = hashSessionToken(sessionToken);

    const session = await prisma.authSession.findUnique({
      where: { sessionToken: sessionTokenHash },
      include: {
        student: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        employer: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    if (!session) {
      return null;
    }

    // Check expiry
    if (session.expiresAt < new Date()) {
      return null;
    }

    // Check revocation
    if (session.revokedAt) {
      return null;
    }

    const user =
      session.role === "student" && session.student
        ? {
            id: session.student.id,
            email: session.student.email,
            name: session.student.name,
            role: "student" as const,
          }
        : session.role === "employer" && session.employer
          ? {
              id: session.employer.id,
              email: session.employer.email,
              name: session.employer.name,
              role: "employer" as const,
            }
          : null;

    if (!user) {
      return null;
    }

    return {
      sessionId: sessionToken,
      user,
      expiresAt: session.expiresAt,
    };
  } catch (error) {
    console.error("Session retrieval error:", error);
    return null;
  }
}

export async function revokeSession(sessionToken: string): Promise<boolean> {
  try {
    const prisma = getPrisma();
    const sessionTokenHash = hashSessionToken(sessionToken);

    await prisma.authSession.updateMany({
      where: { sessionToken: sessionTokenHash },
      data: { revokedAt: new Date() },
    });

    return true;
  } catch (error) {
    console.error("Session revocation error:", error);
    return false;
  }
}

/* =========================================================
   COOKIE HELPERS
========================================================= */

export function createSessionCookie(sessionToken: string, expiresAt: Date): string {
  const isProduction = process.env.NODE_ENV === "production";

  const cookieAttributes = [
    `session=${sessionToken}`,
    `Path=/`,
    `HttpOnly`,
    `SameSite=Lax`,
    `Max-Age=${SESSION_EXPIRY_DAYS * 24 * 60 * 60}`,
    `Expires=${expiresAt.toUTCString()}`,
  ];

  if (isProduction) {
    cookieAttributes.push("Secure");
  }

  return cookieAttributes.join("; ");
}

export function clearSessionCookie(): string {
  return "session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

export function getSessionTokenFromCookies(cookieHeader: string | null): string | undefined {
  if (!cookieHeader) {
    return undefined;
  }

  const cookies = cookieHeader.split(";").map((c) => c.trim());
  const sessionCookie = cookies.find((c) => c.startsWith("session="));

  if (!sessionCookie) {
    return undefined;
  }

  return sessionCookie.split("=")[1];
}

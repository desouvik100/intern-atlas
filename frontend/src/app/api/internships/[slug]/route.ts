import { getInternshipResponse, patchInternshipResponse, deleteInternshipResponse } from "@internatlas/backend/api";
import { requireEmployerAuth, unauthorizedResponse, forbiddenResponse } from "@internatlas/backend/auth-helpers";
import { PrismaClient } from "@internatlas/backend/../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

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

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  return getInternshipResponse(slug);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const user = await requireEmployerAuth(request);
    const { slug } = await params;

    // Check if internship belongs to this employer
    const prisma = getPrisma();
    const internship = await prisma.internship.findFirst({
      where: { slug, status: { not: "deleted" } },
      select: { employerId: true },
    });

    if (!internship) {
      return Response.json({ error: "Internship not found" }, { status: 404 });
    }

    if (internship.employerId !== user.id) {
      return forbiddenResponse();
    }

    return patchInternshipResponse(request, slug);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("PATCH internship error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteContext) {
  try {
    const user = await requireEmployerAuth(request);
    const { slug } = await params;

    // Check if internship belongs to this employer
    const prisma = getPrisma();
    const internship = await prisma.internship.findFirst({
      where: { slug, status: { not: "deleted" } },
      select: { employerId: true },
    });

    if (!internship) {
      return Response.json({ error: "Internship not found" }, { status: 404 });
    }

    if (internship.employerId !== user.id) {
      return forbiddenResponse();
    }

    return deleteInternshipResponse(slug);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("DELETE internship error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

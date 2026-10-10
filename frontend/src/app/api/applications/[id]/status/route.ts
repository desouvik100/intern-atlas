import { patchApplicationStatusResponse } from "@internatlas/backend/api";
import { requireEmployerAuth, unauthorizedResponse, forbiddenResponse } from "@internatlas/backend/auth-helpers";
import { PrismaClient } from "@internatlas/backend/../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
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

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const user = await requireEmployerAuth(request);
    const { id } = await params;
    const applicationId = parseInt(id, 10);

    if (!Number.isInteger(applicationId) || applicationId <= 0) {
      return Response.json({ error: "Invalid application ID" }, { status: 400 });
    }

    // Verify the application belongs to an internship owned by this employer
    const prisma = getPrisma();
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        internship: {
          select: { employerId: true },
        },
      },
    });

    if (!application) {
      return Response.json({ error: "Application not found" }, { status: 404 });
    }

    if (application.internship.employerId !== user.id) {
      return forbiddenResponse();
    }

    return patchApplicationStatusResponse(request, applicationId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("PATCH application status error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

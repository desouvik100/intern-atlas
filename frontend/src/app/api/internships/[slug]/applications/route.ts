import { getApplicationsResponse } from "@internatlas/backend/api";
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

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const user = await requireEmployerAuth(request);
    const { slug } = await params;

    // Get internship and verify ownership
    const prisma = getPrisma();
    const internship = await prisma.internship.findFirst({
      where: { slug, status: { not: "deleted" } },
      select: { id: true, employerId: true },
    });

    if (!internship) {
      return Response.json({ error: "Internship not found" }, { status: 404 });
    }

    if (internship.employerId !== user.id) {
      return forbiddenResponse();
    }

    return getApplicationsResponse(internship.id);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
      }
      if (error.message === "FORBIDDEN") {
        return forbiddenResponse();
      }
    }
    console.error("GET applications error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

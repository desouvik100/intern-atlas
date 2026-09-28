-- CreateTable
CREATE TABLE "Scholarship" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "organizerName" TEXT NOT NULL,
    "organizerType" TEXT,
    "organizerLogo" TEXT,
    "scholarshipType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "fieldOfStudy" TEXT[],
    "eligibility" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "amountNumber" INTEGER,
    "awardCount" INTEGER NOT NULL,
    "applicationDeadline" TEXT NOT NULL,
    "announcementDate" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Open',
    "applicationMode" TEXT NOT NULL,
    "applicationFee" TEXT NOT NULL,
    "isFree" BOOLEAN NOT NULL,
    "renewableYearly" BOOLEAN NOT NULL,
    "benefits" TEXT[],
    "requirements" TEXT[],
    "selectionProcess" TEXT[],
    "applicationUrl" TEXT NOT NULL,
    "websiteUrl" TEXT,
    "tags" TEXT[],
    "applicantsCount" INTEGER NOT NULL DEFAULT 0,
    "highlights" TEXT[],
    "testimonials" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scholarship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scholarship_slug_key" ON "Scholarship"("slug");

-- CreateIndex
CREATE INDEX "Scholarship_status_idx" ON "Scholarship"("status");

-- CreateIndex
CREATE INDEX "Scholarship_scholarshipType_idx" ON "Scholarship"("scholarshipType");

-- CreateIndex
CREATE INDEX "Scholarship_category_idx" ON "Scholarship"("category");

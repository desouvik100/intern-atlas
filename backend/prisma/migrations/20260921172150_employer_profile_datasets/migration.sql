/*
  Warnings:

  - You are about to drop the column `location` on the `Employer` table. All the data in the column will be lost.
  - You are about to drop the column `logoUrl` on the `Employer` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "employerNote" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'APPLIED',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Employer" DROP COLUMN "location",
DROP COLUMN "logoUrl",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "cinNumber" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "companyLogoUrl" TEXT,
ADD COLUMN     "companySize" TEXT,
ADD COLUMN     "companyType" TEXT,
ADD COLUMN     "country" TEXT DEFAULT 'India',
ADD COLUMN     "foundedYear" INTEGER,
ADD COLUMN     "gstNumber" TEXT,
ADD COLUMN     "linkedinUrl" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "verificationStatus" TEXT NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Internship" ADD COLUMN     "employmentType" TEXT,
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "openings" INTEGER,
ADD COLUMN     "qualification" TEXT,
ADD COLUMN     "startDate" TEXT;

-- CreateTable
CREATE TABLE "DatasetOption" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatasetOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DatasetOption_type_active_idx" ON "DatasetOption"("type", "active");

-- CreateIndex
CREATE UNIQUE INDEX "DatasetOption_type_slug_key" ON "DatasetOption"("type", "slug");

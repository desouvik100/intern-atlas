/*
  Warnings:

  - You are about to drop the column `name` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Application` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[internshipId,email]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coverLetter` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Made the column `resumeUrl` on table `Application` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `posted` to the `Internship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Internship" DROP CONSTRAINT "Internship_employerId_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "coverLetter" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ALTER COLUMN "resumeUrl" SET NOT NULL;

-- AlterTable
ALTER TABLE "Internship" ADD COLUMN     "perks" TEXT[],
ADD COLUMN     "posted" TEXT NOT NULL,
ADD COLUMN     "requirements" TEXT[],
ADD COLUMN     "responsibilities" TEXT[],
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active',
ALTER COLUMN "employerId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Application_internshipId_email_key" ON "Application"("internshipId", "email");

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SkillSets` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SkillSets` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SkillTag` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SkillTag` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Skills` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Skills` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Summaries` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Summaries` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SummaryTag` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SummaryTag` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Tags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SkillSets" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "SkillTag" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Summaries" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "SummaryTag" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Tags" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

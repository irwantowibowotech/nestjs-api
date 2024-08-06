/*
  Warnings:

  - You are about to drop the column `content` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "content",
ADD COLUMN     "description" TEXT;

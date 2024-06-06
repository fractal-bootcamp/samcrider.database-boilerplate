/*
  Warnings:

  - You are about to drop the column `ISBN` on the `book` table. All the data in the column will be lost.
  - Added the required column `isbn` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "ISBN",
ADD COLUMN     "isbn" TEXT NOT NULL;

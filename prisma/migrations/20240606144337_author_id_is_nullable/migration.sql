-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_authorId_fkey";

-- AlterTable
ALTER TABLE "book" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

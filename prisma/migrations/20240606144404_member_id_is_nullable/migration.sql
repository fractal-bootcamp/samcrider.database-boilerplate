-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_memberId_fkey";

-- AlterTable
ALTER TABLE "book" ALTER COLUMN "memberId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

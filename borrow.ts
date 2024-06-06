import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  try {
    // simulate a member logging in
    const currentMember = await prisma.member.findUnique({
      where: {
        id: "0",
      },
    });
    if (!currentMember) return console.log("couldn't find member");

    // simulate a member choosing a book
    const bookToBorrow = await prisma.book.findUnique({
      where: {
        id: "0",
      },
    });
    if (!bookToBorrow) return console.log("couldn't find book");

    // simulate member borrowing selected book
    const result = await prisma.book.update({
      where: {
        id: bookToBorrow.id,
      },
      data: {
        memberId: currentMember.id,
      },
    });

    if (result) {
      return console.log(result);
    }

    console.log("failure");
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

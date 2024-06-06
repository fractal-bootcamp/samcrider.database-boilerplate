import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  try {
    const member = await prisma.member.create({
      data: {
        id: "0",
        name: "sam crider",
        email: "sam.example@gmail.com",
        address: "111 Mark Street, Raleigh, NC 27607",
      },
    });
    console.log("success");
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

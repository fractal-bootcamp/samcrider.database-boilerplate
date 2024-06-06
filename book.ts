import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  try {
    const book = await prisma.book.create({
      data: {
        id: "1",
        title: "Divergent",
        isbn: "294738564798",
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

// const movie = await prisma.movie.create({
//   data: {
//     title: "inception",
//     directorId: "1",
//     releaseDate: new Date("2010-07-16"),
//   },
// });

// // const movie = await prisma.movie.findFirst({
// //     include: {
// //      director: true
// //     }
// //   });

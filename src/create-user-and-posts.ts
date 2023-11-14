import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "Rohan@gmail.com",
      name: "Rohan",
      posts: {
        create: [{ title: "title 1" }, { title: "title 2" }]
      }
    }
  });
}

main()
  .then(async () => {
    console.log("DONE");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

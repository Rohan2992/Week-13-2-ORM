import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: {
      id: 1
    },
    data: {
      name: "Rohan 2"
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

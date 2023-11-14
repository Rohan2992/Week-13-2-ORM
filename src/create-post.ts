import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const res = await prisma.post.create({
    data: {
      title: "Post 1",
      content: "Description of the post 1",
      published: false,
      author: {
        connect: {
          id: 1
        }
      }
    }
  });
  console.log(res);
}

main()
  .then(async () => {
    console.log("DONE");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("ERROR");
    await prisma.$disconnect();
    process.exit(1);
  });

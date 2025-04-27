const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Creating a global variable to store the Prisma client instance
if (typeof global !== "undefined") {
  if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSingleton();
  }
}

const db = global.prismaGlobal || prismaClientSingleton();

module.exports = db;

// can define it like this for checking NODE_ENV and storing it for development mode
// if (process.env.NODE_ENV !== "production") {
//   global.prismaGlobal = db;
// }

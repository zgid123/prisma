import { PrismaClient, User } from '@prisma/client'

// This file will not be executed, just compiled to check if the typings are valid
async function main() {
  const prisma = new PrismaClient()

  const users: User[] = await prisma.user.findMany()
}

main().catch((e) => {
  console.error(e)
})

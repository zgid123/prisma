import { PrismaClient } from '.'
import { expectError } from 'tsd'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:dev.db',
    },
  },
})

;(async () => {
  expectError(
    await prisma.post.findMany({
      orderBy: [
        {
          createdAt: undefined,
        },
      ],
    }),
  )
})()

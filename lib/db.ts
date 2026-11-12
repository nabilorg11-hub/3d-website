// Database connection placeholder
// Prisma is optional - only needed if you want database functionality

let prisma: any = null

export function getPrisma() {
  if (!prisma) {
    console.warn('Database not configured. Prisma Client is optional.')
  }
  return prisma
}

export default prisma

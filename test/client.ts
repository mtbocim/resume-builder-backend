import { PrismaClient } from '@prisma/client'
const testUrl = process.env.DATABASE_URL
const prismaTest = new PrismaClient()
// const prismaTest = new PrismaClient({datasources:{db:{url:testUrl}}})
export default prismaTest
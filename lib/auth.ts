import { prisma } from './db'
import bcrypt from 'bcryptjs'

/**
 * Get user by email
 */
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  })
}

/**
 * Get user by ID
 */
export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  })
}

/**
 * Create new user
 */
export async function createUser(data: {
  email: string
  name?: string
  password?: string
}) {
  const hashedPassword = data.password
    ? await bcrypt.hash(data.password, 10)
    : undefined

  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashedPassword,
    },
  })
}

/**
 * Update user
 */
export async function updateUser(id: string, data: any) {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10)
  }

  return prisma.user.update({
    where: { id },
    data,
  })
}

/**
 * Delete user
 */
export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: { id },
  })
}

/**
 * Verify password
 */
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword)
}

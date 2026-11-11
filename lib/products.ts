import { prisma } from './db'

export interface GetProductsOptions {
  category?: string
  page?: number
  limit?: number
  isActive?: boolean
  featured?: boolean
}

/**
 * Get all products with filters
 */
export async function getProducts(options: GetProductsOptions = {}) {
  const {
    category,
    page = 1,
    limit = 20,
    isActive = true,
    featured,
  } = options

  const skip = (page - 1) * limit

  const where: any = {}
  if (category) where.category = category
  if (isActive !== undefined) where.isActive = isActive
  if (featured !== undefined) where.featured = featured

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.product.count({ where }),
  ])

  return {
    products,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  }
}

/**
 * Get product by ID
 */
export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
  })
}

/**
 * Create new product
 */
export async function createProduct(data: any) {
  return prisma.product.create({
    data,
  })
}

/**
 * Update product
 */
export async function updateProduct(id: string, data: any) {
  return prisma.product.update({
    where: { id },
    data,
  })
}

/**
 * Delete product
 */
export async function deleteProduct(id: string) {
  return prisma.product.delete({
    where: { id },
  })
}

/**
 * Search products
 */
export async function searchProducts(
  query: string,
  options: { page?: number; limit?: number } = {}
) {
  const { page = 1, limit = 20 } = options
  const skip = (page - 1) * limit

  const where = {
    OR: [
      { name: { contains: query, mode: 'insensitive' as const } },
      { description: { contains: query, mode: 'insensitive' as const } },
      { category: { contains: query, mode: 'insensitive' as const } },
      { brand: { contains: query, mode: 'insensitive' as const } },
    ],
    isActive: true,
  }

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.product.count({ where }),
  ])

  return {
    products,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  }
}

/**
 * Get product categories
 */
export async function getCategories() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    select: { category: true },
    distinct: ['category'],
  })

  return products.map((p) => p.category)
}

/**
 * Get featured products
 */
export async function getFeaturedProducts(limit: number = 8) {
  return prisma.product.findMany({
    where: { featured: true, isActive: true },
    take: limit,
    orderBy: { createdAt: 'desc' },
  })
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create sample products
  const products = [
    {
      name: 'Classic White T-Shirt',
      description: 'Premium cotton t-shirt with a comfortable fit',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
      ],
      category: 'tops',
      brand: 'VirtualFit Essentials',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Gray'],
      stock: 100,
      isActive: true,
      featured: true,
      garmentType: 'upper_body',
    },
    {
      name: 'Denim Jacket',
      description: 'Vintage-style denim jacket with distressed details',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5'],
      category: 'outerwear',
      brand: 'VirtualFit Denim',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Light Blue', 'Dark Blue'],
      stock: 50,
      isActive: true,
      featured: true,
      garmentType: 'upper_body',
    },
    {
      name: 'Black Hoodie',
      description: 'Comfortable pullover hoodie with kangaroo pocket',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7'],
      category: 'tops',
      brand: 'VirtualFit Streetwear',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gray', 'Navy'],
      stock: 75,
      isActive: true,
      featured: true,
      garmentType: 'upper_body',
    },
    {
      name: 'Leather Jacket',
      description: 'Genuine leather bomber jacket with quilted lining',
      price: 249.99,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5'],
      category: 'outerwear',
      brand: 'VirtualFit Premium',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      stock: 25,
      isActive: true,
      featured: true,
      garmentType: 'upper_body',
    },
    {
      name: 'Blue Sweater',
      description: 'Cozy knit sweater perfect for layering',
      price: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
      images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27'],
      category: 'tops',
      brand: 'VirtualFit Knitwear',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Navy', 'Gray'],
      stock: 60,
      isActive: true,
      featured: false,
      garmentType: 'upper_body',
    },
    {
      name: 'Slim Fit Jeans',
      description: 'Modern slim-fit jeans with stretch fabric',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
      images: ['https://images.unsplash.com/photo-1542272604-787c3835535d'],
      category: 'bottoms',
      brand: 'VirtualFit Denim',
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Dark Blue', 'Black', 'Light Blue'],
      stock: 80,
      isActive: true,
      featured: false,
      garmentType: 'lower_body',
    },
    {
      name: 'Cargo Pants',
      description: 'Utility cargo pants with multiple pockets',
      price: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
      images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80'],
      category: 'bottoms',
      brand: 'VirtualFit Utility',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Khaki', 'Black', 'Olive'],
      stock: 55,
      isActive: true,
      featured: false,
      garmentType: 'lower_body',
    },
    {
      name: 'Summer Dress',
      description: 'Flowy summer dress with floral pattern',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
      images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8'],
      category: 'dresses',
      brand: 'VirtualFit Collection',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Floral Blue', 'Floral Pink', 'White'],
      stock: 45,
      isActive: true,
      featured: true,
      garmentType: 'dress',
    },
    {
      name: 'Blazer',
      description: 'Professional blazer with tailored fit',
      price: 159.99,
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf'],
      category: 'outerwear',
      brand: 'VirtualFit Professional',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      stock: 40,
      isActive: true,
      featured: false,
      garmentType: 'upper_body',
    },
    {
      name: 'Athletic Shorts',
      description: 'Breathable athletic shorts with moisture-wicking fabric',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b',
      images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b'],
      category: 'bottoms',
      brand: 'VirtualFit Active',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray', 'Red'],
      stock: 90,
      isActive: true,
      featured: false,
      garmentType: 'lower_body',
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }

  console.log(`✅ Created ${products.length} products`)

  // Create a demo user
  const user = await prisma.user.create({
    data: {
      email: 'demo@virtualfit.com',
      name: 'Demo User',
      role: 'USER',
    },
  })

  console.log(`✅ Created demo user: ${user.email}`)

  console.log('✅ Database seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

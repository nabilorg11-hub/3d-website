// Prisma seed placeholder - Optional database seeding
// Run with: npm run db:seed (if you have Prisma installed)

console.log('Database seeding is optional and requires Prisma Client to be generated.')

async function main() {
  console.log('Starting database seed...')

  // Create sample products
  const products = [
    {
      name: 'Classic White T-Shirt',
      description: 'Premium cotton t-shirt with a comfortable fit',
      price: 29.99,
      imageUrl: '/images/products/tshirt-white.svg',
      images: ['/images/products/tshirt-white.svg'],
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
      imageUrl: '/images/products/jacket-denim.svg',
      images: ['/images/products/jacket-denim.svg'],
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
      imageUrl: '/images/products/hoodie-black.svg',
      images: ['/images/products/hoodie-black.svg'],
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
      name: 'Blue Sweater',
      description: 'Cozy knit sweater perfect for layering',
      price: 69.99,
      imageUrl: '/images/products/sweater-blue.svg',
      images: ['/images/products/sweater-blue.svg'],
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
      imageUrl: '/images/products/jeans-blue.svg',
      images: ['/images/products/jeans-blue.svg'],
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
      name: 'Summer Dress',
      description: 'Flowy summer dress with floral pattern',
      price: 89.99,
      imageUrl: '/images/products/dress-summer.svg',
      images: ['/images/products/dress-summer.svg'],
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
      name: 'White Sneakers',
      description: 'Classic white sneakers with premium leather',
      price: 49.99,
      imageUrl: '/images/products/sneakers-white.svg',
      images: ['/images/products/sneakers-white.svg'],
      category: 'shoes',
      brand: 'VirtualFit Footwear',
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['White', 'Black'],
      stock: 65,
      isActive: true,
      featured: false,
      garmentType: 'shoes',
    },
  ]

  console.log(`Would create ${products.length} products`)
  console.log('✅ Sample data prepared successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
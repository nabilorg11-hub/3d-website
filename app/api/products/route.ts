import { NextRequest, NextResponse } from 'next/server'
import { getProducts, getProductById, createProduct, updateProduct, searchProducts } from '@/lib/products'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    // Get single product by ID
    if (id) {
      const product = await getProductById(id)
      if (!product) {
        return NextResponse.json(
          { error: 'Product not found' },
          { status: 404 }
        )
      }
      return NextResponse.json({ product })
    }

    // Search products
    if (search) {
      const results = await searchProducts(search, { page, limit })
      return NextResponse.json(results)
    }

    // Get products with filters
    const products = await getProducts({
      category: category || undefined,
      page,
      limit,
      isActive: true,
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Products GET API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: Add authentication check here
    // const session = await getServerSession()
    // if (!session?.user?.role === 'admin') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const product = await createProduct(body)

    return NextResponse.json({ product }, { status: 201 })
  } catch (error) {
    console.error('Products POST API error:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...data } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check here

    const product = await updateProduct(id, data)

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ product })
  } catch (error) {
    console.error('Products PUT API error:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

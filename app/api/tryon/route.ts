import { NextRequest, NextResponse } from 'next/server'
import { generateVirtualTryOn, validateTryOnInputs } from '@/lib/ai/virtual-tryon'
import { uploadBase64Image } from '@/lib/cloudinary'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { humanImage, garmentImage } = body

    // Validate inputs
    if (!humanImage || !garmentImage) {
      return NextResponse.json(
        { error: 'Both human and garment images are required' },
        { status: 400 }
      )
    }

    // Validate image formats
    const validation = validateTryOnInputs(humanImage, garmentImage)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // Upload images to Cloudinary for processing
    let humanImageUrl = humanImage
    let garmentImageUrl = garmentImage

    // If base64, upload to Cloudinary first
    if (humanImage.startsWith('data:')) {
      const uploadResult = await uploadBase64Image(humanImage, 'tryon/human')
      humanImageUrl = uploadResult.url
    }

    if (garmentImage.startsWith('data:')) {
      const uploadResult = await uploadBase64Image(garmentImage, 'tryon/garment')
      garmentImageUrl = uploadResult.url
    }

    // Generate virtual try-on using AI
    const resultImageUrl = await generateVirtualTryOn({
      humanImage: humanImageUrl,
      garmentImage: garmentImageUrl,
    })

    // Upload result to Cloudinary for persistence
    const resultUpload = await uploadBase64Image(resultImageUrl, 'tryon/results')

    return NextResponse.json({
      success: true,
      resultImage: resultUpload.url,
      originalHuman: humanImageUrl,
      originalGarment: garmentImageUrl,
    })
  } catch (error) {
    console.error('Virtual try-on API error:', error)
    return NextResponse.json(
      { error: 'Failed to process virtual try-on. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Virtual Try-On API',
    methods: ['POST'],
    endpoint: '/api/tryon',
  })
}

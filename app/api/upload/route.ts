import { NextRequest, NextResponse } from 'next/server'
import { uploadImage, uploadBase64Image } from '@/lib/cloudinary'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const base64 = formData.get('base64') as string | null
    const folder = (formData.get('folder') as string) || 'virtualfit'

    if (!file && !base64) {
      return NextResponse.json(
        { error: 'No file or base64 data provided' },
        { status: 400 }
      )
    }

    let result

    if (base64) {
      // Upload base64 image
      result = await uploadBase64Image(base64, folder)
    } else if (file) {
      // Convert file to buffer and upload
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      result = await uploadImage(buffer, folder)
    }

    return NextResponse.json({
      success: true,
      url: result?.url,
      publicId: result?.publicId,
    })
  } catch (error) {
    console.error('Upload API error:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Upload API',
    methods: ['POST'],
    endpoint: '/api/upload',
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
    maxSize: '10MB',
  })
}

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    name: 'VirtualFit API',
    version: '1.0.0',
    description: 'AI-powered virtual fashion platform API',
    endpoints: {
      tryon: '/api/tryon',
      products: '/api/products',
      upload: '/api/upload',
    },
    status: 'operational',
  })
}

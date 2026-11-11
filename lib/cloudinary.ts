import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

/**
 * Upload image to Cloudinary
 */
export async function uploadImage(
  file: string | Buffer,
  folder: string = 'virtualfit'
): Promise<{ url: string; publicId: string }> {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      resource_type: 'auto',
      transformation: [
        { quality: 'auto', fetch_format: 'auto' },
      ],
    })

    return {
      url: result.secure_url,
      publicId: result.public_id,
    }
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw new Error('Failed to upload image')
  }
}

/**
 * Upload base64 image to Cloudinary
 */
export async function uploadBase64Image(
  base64: string,
  folder: string = 'virtualfit'
): Promise<{ url: string; publicId: string }> {
  return uploadImage(base64, folder)
}

/**
 * Delete image from Cloudinary
 */
export async function deleteImage(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Cloudinary delete error:', error)
    throw new Error('Failed to delete image')
  }
}

/**
 * Get optimized image URL
 */
export function getOptimizedImageUrl(
  publicId: string,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
  }
): string {
  return cloudinary.url(publicId, {
    transformation: [
      {
        width: options?.width,
        height: options?.height,
        quality: options?.quality || 'auto',
        fetch_format: options?.format || 'auto',
        crop: 'fill',
        gravity: 'auto',
      },
    ],
  })
}

/**
 * Generate image thumbnails
 */
export async function generateThumbnails(
  publicId: string
): Promise<{
  small: string
  medium: string
  large: string
}> {
  return {
    small: getOptimizedImageUrl(publicId, { width: 320, quality: 80 }),
    medium: getOptimizedImageUrl(publicId, { width: 640, quality: 85 }),
    large: getOptimizedImageUrl(publicId, { width: 1280, quality: 90 }),
  }
}

export { cloudinary }
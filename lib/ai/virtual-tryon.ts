import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

interface TryOnInput {
  humanImage: string // URL or base64
  garmentImage: string // URL or base64
}

interface TryOnOutput {
  output: string // URL to result image
}

/**
 * Generate virtual try-on using IDM-VTON model
 * This preserves the person's identity while changing only the clothing
 */
export async function generateVirtualTryOn(
  input: TryOnInput
): Promise<string> {
  try {
    // Using IDM-VTON or similar model via Replicate
    const output = await replicate.run(
      "cuuupid/idm-vton:906425dbca90663ff5427624839572cc56ea7d380343d13e2a4c4b09d3f0c30f",
      {
        input: {
          human_img: input.humanImage,
          garm_img: input.garmentImage,
          garment_des: "clothing item", // description
          is_checked: true,
          is_checked_crop: false,
          denoise_steps: 30,
          seed: 42,
        }
      }
    ) as any

    // Extract the output URL
    if (Array.isArray(output) && output.length > 0) {
      return output[0]
    } else if (typeof output === 'string') {
      return output
    } else if (output?.output) {
      return output.output
    }

    throw new Error('No output generated')
  } catch (error) {
    console.error('Virtual try-on error:', error)
    throw new Error('Failed to generate virtual try-on')
  }
}

/**
 * Check if the AI model is available
 */
export async function checkModelAvailability(): Promise<boolean> {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      return false
    }
    return true
  } catch (error) {
    console.error('Model availability check failed:', error)
    return false
  }
}

/**
 * Validate input images for virtual try-on
 */
export function validateTryOnInputs(
  humanImage: File | string,
  garmentImage: File | string
): { valid: boolean; error?: string } {
  // Check if files/URLs are provided
  if (!humanImage || !garmentImage) {
    return { valid: false, error: 'Both images are required' }
  }

  // If File objects, validate size and type
  if (humanImage instanceof File) {
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (humanImage.size > maxSize) {
      return { valid: false, error: 'Human image must be less than 10MB' }
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(humanImage.type)) {
      return { valid: false, error: 'Human image must be JPEG, PNG, or WebP' }
    }
  }

  if (garmentImage instanceof File) {
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (garmentImage.size > maxSize) {
      return { valid: false, error: 'Garment image must be less than 10MB' }
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(garmentImage.type)) {
      return { valid: false, error: 'Garment image must be JPEG, PNG, or WebP' }
    }
  }

  return { valid: true }
}

/**
 * Preprocess image for better try-on results
 */
export async function preprocessImage(
  imageBlob: Blob
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(imageBlob)

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        reject(new Error('Failed to get canvas context'))
        return
      }

      // Optimal dimensions for the model
      const maxWidth = 768
      const maxHeight = 1024

      let width = img.width
      let height = img.height

      // Scale to fit within max dimensions
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        width = width * ratio
        height = height * ratio
      }

      canvas.width = width
      canvas.height = height

      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(url)
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error('Failed to process image'))
          }
        },
        'image/jpeg',
        0.9
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }

    img.src = url
  })
}

/**
 * Convert File to base64 string
 */
export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Estimate processing time based on image sizes
 */
export function estimateProcessingTime(
  humanImageSize: number,
  garmentImageSize: number
): number {
  // Base time: 30 seconds
  // Add 2 seconds per MB
  const totalSizeMB = (humanImageSize + garmentImageSize) / (1024 * 1024)
  return Math.ceil(30 + totalSizeMB * 2)
}
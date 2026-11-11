# Image Assets Guide

## Current Status
This project currently uses **placeholder gradients and colors** instead of real images for demonstration purposes.

## Where Images Are Needed

### 1. Product Images
- **Location:** VirtualFit, Offcut, Runway pages
- **Recommended Size:** 800x1200px (portrait)
- **Format:** JPG, PNG, or WebP
- **Folder:** `public/images/products/`

### 2. Model Images
- **Location:** Runway carousel
- **Recommended Size:** 600x900px (full-body)
- **Format:** JPG, PNG
- **Folder:** `public/images/models/`

### 3. Garment Images (for AI Try-On)
- **Location:** AI Try-On page
- **Recommended Size:** 1024x1024px
- **Format:** PNG with transparent background (preferred)
- **Folder:** `public/images/garments/`

## How to Add Images

### Option 1: Local Images (Quick Start)

1. Create folders:
```bash
mkdir -p public/images/products
mkdir -p public/images/models
mkdir -p public/images/garments
```

2. Add your images to these folders

3. Update seed data in `prisma/seed.ts`:
```typescript
imageUrl: '/images/products/tshirt-white.jpg'
```

### Option 2: Cloudinary (Production Recommended)

1. Sign up: https://cloudinary.com
2. Upload images via dashboard
3. Copy image URLs
4. Update your code with Cloudinary URLs:
```typescript
imageUrl: 'https://res.cloudinary.com/your-cloud/image/upload/v1/products/tshirt.jpg'
```

### Option 3: Unsplash (Demo/Testing Only)

The seed data already has Unsplash URLs. These work for demo but:
- ⚠️ Not recommended for production
- ⚠️ Rate limits apply
- ✅ Good for testing

## Free Image Resources

### Fashion/Product Images:
- **Unsplash:** https://unsplash.com (free, high-quality)
- **Pexels:** https://pexels.com (free stock photos)
- **Pixabay:** https://pixabay.com (free images)

### AI-Generated Images:
- **Midjourney:** https://midjourney.com
- **DALL-E:** https://openai.com/dall-e
- **Stable Diffusion:** https://stability.ai

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use TinyPNG: https://tinypng.com
   - Use Squoosh: https://squoosh.app

2. **Use WebP format** for better compression

3. **Use Next.js Image component** (already implemented):
```typescript
import Image from 'next/image'

<Image 
  src="/images/products/tshirt.jpg"
  alt="T-Shirt"
  width={800}
  height={1200}
  priority
/>
```

## Current Placeholders

The project currently shows:
- Gradient backgrounds (purple, pink, blue)
- Colored rectangles representing products
- CSS-only visual effects

This is intentional for the demo to work without external dependencies.

## Recommended Action

**For Production:**
1. Set up Cloudinary account
2. Upload your product photos
3. Update database seed with real URLs
4. Run `npm run db:seed`

**For Quick Testing:**
1. Download 10-15 fashion product images from Unsplash
2. Save to `public/images/products/`
3. Update seed.ts with local paths
4. Reseed database

## Image Sizes by Component

### VirtualFit Carousel
- **Size:** 600x800px
- **Aspect Ratio:** 3:4
- **Format:** JPG/PNG

### Offcut Rail
- **Size:** 400x600px
- **Aspect Ratio:** 2:3
- **Format:** JPG/PNG

### Runway Models
- **Size:** 600x900px
- **Aspect Ratio:** 2:3
- **Format:** JPG/PNG

### AI Try-On
- **Human Photo:** 768x1024px
- **Garment Photo:** 768x1024px
- **Format:** JPG/PNG

## Need Help?

Check the Cloudinary integration in:
- `lib/cloudinary.ts` (upload functions)
- `app/api/upload/route.ts` (upload endpoint)

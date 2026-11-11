# VirtualFit - AI Fashion Platform Setup Guide

This guide will help you get the complete VirtualFit platform up and running.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- PostgreSQL database (local or cloud)
- Cloudinary account
- Replicate API account

## Environment Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables:**

   Edit `.env` and add your credentials:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/virtualfit"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"

   # Replicate AI
   REPLICATE_API_TOKEN="your-replicate-token"

   # Optional: Redis for caching
   REDIS_URL="redis://localhost:6379"
   ```

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Database

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Seed sample data
npm run seed
```

### 3. Build and Run

**Development mode:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000`

## Features Overview

### 🎨 VirtualFit (`/virtualfit`)
- Spatial try-on experience
- 3D garment carousel with frosted glass UI
- Real-time scanning animations
- Interactive garment selection

### 👔 Offcut (`/offcut`)
- 3D rotating clothing rail
- Edge-on garment display with CSS 3D transforms
- Hover-to-face interaction
- Detailed product view panel

### 🚶 Runway (`/runway`)
- Full-body model carousel
- Nike-inspired outfit displays
- Shoppable product pins
- Styling bag for outfit building

### 🤖 AI Try-On (`/try-on`)
- Upload your photo
- AI-powered garment replacement
- Identity-preserving technology (IDM-VTON)
- Download results

## Project Structure

```
new-project/
├── app/                    # Next.js App Router pages
│   ├── virtualfit/        # VirtualFit experience
│   ├── offcut/            # Offcut 3D rail
│   ├── runway/            # Runway carousel
│   ├── try-on/            # AI try-on page
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components (nav, footer)
│   ├── ui/               # UI primitives (buttons, toasts)
│   ├── virtualfit/       # VirtualFit components
│   ├── offcut/           # Offcut components
│   └── runway/           # Runway components
├── lib/                   # Utility libraries
│   ├── ai/               # AI integration (virtual try-on)
│   ├── db.ts             # Database client
│   ├── auth.ts           # Authentication utilities
│   ├── products.ts       # Product operations
│   ├── cloudinary.ts     # Image storage
│   └── utils.ts          # Helper functions
├── prisma/
│   └── schema.prisma     # Database schema
└── public/               # Static assets
```

## API Endpoints

### Virtual Try-On
```
POST /api/tryon
Body: { humanImage: string, garmentImage: string }
```

### Products
```
GET  /api/products?category=tops&page=1&limit=20
POST /api/products
PUT  /api/products
```

### Upload
```
POST /api/upload
FormData: { file: File } or { base64: string }
```

## Database Schema

The platform uses PostgreSQL with Prisma ORM:

- **User** - User accounts and authentication
- **Product** - Fashion products/garments
- **TryOn** - Virtual try-on history
- **Favorite** - User saved items
- **Review** - Product reviews
- **StylingBag** - Runway styling selections

## Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Type checking
npm run typecheck
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t virtualfit .
docker run -p 3000:3000 virtualfit
```

## Getting API Keys

### Cloudinary
1. Sign up at https://cloudinary.com
2. Get your Cloud Name, API Key, and API Secret from the dashboard

### Replicate
1. Sign up at https://replicate.com
2. Get your API token from account settings
3. The IDM-VTON model is used for virtual try-on

### Database
- **Local**: Install PostgreSQL locally
- **Cloud**: Use Supabase, Neon, or Railway

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Database Connection Issues
- Check DATABASE_URL format
- Ensure PostgreSQL is running
- Verify credentials

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Performance Optimization

- Images are automatically optimized via Cloudinary
- Static pages are cached at edge
- Three.js bundles are code-split
- Progressive Web App (PWA) ready

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a demonstration project. For production use:
- Add proper authentication
- Implement rate limiting
- Add error tracking (Sentry)
- Set up monitoring
- Add analytics

## License

MIT License - feel free to use for your projects!

## Support

For questions or issues, please refer to the documentation or create an issue in the repository.

---

Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and cutting-edge AI models.

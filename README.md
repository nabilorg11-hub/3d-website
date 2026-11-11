# VirtualFit - Complete AI Fashion Platform

A next-generation AI-powered virtual fashion platform featuring three unique experiences and AI virtual try-on technology.

## 🎨 Features

### Three Revolutionary Experiences

1. **VirtualFit** - Spatial try-on with 3D garment carousel
2. **Offcut** - 3D rotating clothing rail with edge-on display
3. **Runway** - Full-body model carousel with styling bag
4. **AI Try-On** - Upload your photo and try on garments with AI

### Modern Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **3D Graphics**: Three.js, React Three Fiber
- **Database**: PostgreSQL with Prisma ORM
- **AI**: Replicate (IDM-VTON model)
- **Storage**: Cloudinary
- **Auth**: NextAuth.js

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Cloudinary account
- Replicate API key

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/virtualfit"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
REPLICATE_API_TOKEN="your-replicate-token"
```

3. **Set up database:**
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

4. **Run development server:**
```bash
npm run dev
```

Visit http://localhost:3000

## 📁 Project Structure

```
new-project/
├── app/                    # Next.js App Router
│   ├── virtualfit/        # VirtualFit experience
│   ├── offcut/            # Offcut 3D rail
│   ├── runway/            # Runway carousel
│   ├── try-on/            # AI try-on
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── home/             # Homepage
│   ├── layout/           # Navigation, footer
│   ├── ui/               # UI primitives
│   ├── virtualfit/       # VirtualFit components
│   ├── offcut/           # Offcut components
│   └── runway/           # Runway components
├── lib/                   # Utilities
│   ├── ai/               # AI integration
│   ├── auth.ts           # Authentication
│   ├── db.ts             # Database client
│   ├── products.ts       # Product operations
│   ├── cloudinary.ts     # Image storage
│   └── utils.ts          # Helpers
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Sample data
└── public/               # Static assets
```

## 🎯 API Endpoints

### Virtual Try-On
```
POST /api/tryon
Body: { humanImage: string, garmentImage: string }
Response: { resultImage: string }
```

### Products
```
GET  /api/products?category=tops&page=1
POST /api/products (admin)
PUT  /api/products (admin)
```

### Upload
```
POST /api/upload
FormData: { file: File }
Response: { url: string, publicId: string }
```

## 💾 Database Schema

- **User** - User accounts and profiles
- **Product** - Fashion products/garments
- **TryOn** - Virtual try-on history
- **Favorite** - User saved items
- **Review** - Product reviews
- **StylingBag** - Runway outfit selections

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
npm test             # Run tests
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:seed      # Seed sample data
npm run db:studio    # Open Prisma Studio
```

## 🎨 Features in Detail

### VirtualFit Experience
- 3D garment carousel with smooth animations
- Real-time scanning effects
- Frosted glass UI design
- Interactive garment selection
- Spatial try-on preview

### Offcut Experience
- 3D CSS transforms for clothing rail
- Ring layout with perspective
- Hover-to-face interactions
- Edge-on garment display
- Detailed product panel

### Runway Experience
- Full-body model carousel
- Shoppable product pins
- Styling bag system
- Outfit navigation
- Complete look shopping

### AI Virtual Try-On
- Photo upload functionality
- AI-powered garment replacement
- Identity preservation
- Download results
- Processing status tracking

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy automatically

### Docker
```bash
docker build -t virtualfit .
docker run -p 3000:3000 virtualfit
```

## 📝 Environment Variables

Required:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - Authentication secret
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `REPLICATE_API_TOKEN` - Replicate API token

Optional:
- `REDIS_URL` - Redis connection string for caching

## 🔧 Configuration

### Getting API Keys

**Cloudinary:**
1. Sign up at https://cloudinary.com
2. Copy Cloud Name, API Key, and API Secret from dashboard

**Replicate:**
1. Sign up at https://replicate.com
2. Get API token from account settings
3. IDM-VTON model is used for virtual try-on

**Database:**
- Local: PostgreSQL
- Cloud: Supabase, Neon, or Railway

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers supported

## 🤝 Contributing

This is a demonstration project. For production:
- Add authentication
- Implement rate limiting
- Add error tracking
- Set up monitoring
- Add analytics

## 📄 License

MIT License

## 🙏 Acknowledgments

Built with:
- Next.js 15
- TypeScript
- Tailwind CSS
- Prisma
- Replicate AI
- Cloudinary
- Three.js

---

**VirtualFit** - The Future of Fashion is Virtual 🎨👔🚶🤖

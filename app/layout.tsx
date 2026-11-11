import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'VirtualFit - AI Fashion Platform',
    template: '%s | VirtualFit',
  },
  description: 'Next-generation AI-powered virtual fashion platform. Try on clothes virtually, explore 3D garments, and discover your style.',
  keywords: ['virtual try-on', 'AI fashion', '3D clothing', 'virtual fitting room', 'fashion technology'],
  authors: [{ name: 'VirtualFit' }],
  creator: 'VirtualFit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://virtualfit.demo',
    title: 'VirtualFit - AI Fashion Platform',
    description: 'Try on clothes virtually with AI-powered technology',
    siteName: 'VirtualFit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VirtualFit - AI Fashion Platform',
    description: 'Try on clothes virtually with AI-powered technology',
    creator: '@virtualfit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
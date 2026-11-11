import Link from 'next/link'
import { ArrowRight, Sparkles, Shirt, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { Hero } from '@/components/home/hero'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Three Revolutionary Experiences
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Explore fashion in entirely new ways with our AI-powered platform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* VirtualFit */}
            <Link href="/virtualfit" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 sm:mb-6">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">VirtualFit</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    Spatial try-on experience with a stunning 3D garment carousel.
                    Scan and switch outfits in real-time.
                  </p>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                    Explore <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Offcut */}
            <Link href="/offcut" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 sm:mb-6">
                    <Shirt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Offcut</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    3D rotating clothing rail with edge-on garments.
                    Hover to face items and view details.
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                    Explore <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Runway */}
            <Link href="/runway" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4 sm:mb-6">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Runway</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    Full-body model carousel with styled looks.
                    Shop complete outfits with your styling bag.
                  </p>
                  <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                    Explore <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Try-On CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-10 md:p-12 lg:p-16 text-white">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">AI-Powered</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Try On Anything Virtually
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
                Upload your photo and see how any garment looks on you.
                Our AI preserves your identity while changing only the clothing.
              </p>
              <Link href="/try-on">
                <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto">
                  Start AI Try-On
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Next.js, TypeScript, Three.js, and cutting-edge AI models
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Next.js 15</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Modern React framework with App Router
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Three.js</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                WebGL 3D graphics and animations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">AI Models</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                IDM-VTON for virtual try-on
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">📱</span>
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">PWA Ready</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Install as a native app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">VirtualFit</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Next-generation AI fashion platform
              </p>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <Link href="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition">
                About
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition">
                Terms
              </Link>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2026 VirtualFit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
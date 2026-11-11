'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800 mb-8 animate-slide-down">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold">
              Powered by Next.js 15 & AI
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            The Future of{' '}
            <span className="text-gradient">Fashion</span>
            <br />
            is Virtual
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up delay-100">
            Experience clothing in 3D, try on outfits with AI, and explore
            fashion in ways you never imagined possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <Link href="/try-on">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start AI Try-On
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/virtualfit">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
              >
                Explore Experiences
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in delay-300">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
              <div className="text-sm text-muted-foreground">
                Unique Experiences
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">AI</div>
              <div className="text-sm text-muted-foreground">
                Powered Try-On
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3D</div>
              <div className="text-sm text-muted-foreground">
                WebGL Graphics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

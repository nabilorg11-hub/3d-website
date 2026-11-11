'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Garment {
  id: string
  name: string
  image: string
  category: string
  color: string
}

interface GarmentCarouselProps {
  garments: Garment[]
  selectedGarment: Garment
  onSelectGarment: (garment: Garment) => void
}

export function GarmentCarousel({
  garments,
  selectedGarment,
  onSelectGarment,
}: GarmentCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="relative">
      {/* Scroll Left Button */}
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 shadow-lg h-8 w-8 sm:h-10 sm:w-10"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide py-3 sm:py-4 px-1 sm:px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {garments.map((garment) => (
          <div
            key={garment.id}
            onClick={() => onSelectGarment(garment)}
            className={cn(
              'flex-shrink-0 w-36 sm:w-44 lg:w-48 cursor-pointer transition-all duration-300 hover:scale-105',
              selectedGarment.id === garment.id && 'scale-105'
            )}
          >
            <div
              className={cn(
                'relative aspect-square rounded-lg sm:rounded-xl overflow-hidden border-2 transition-colors',
                selectedGarment.id === garment.id
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'
              )}
            >
              {/* Image */}
              <img
                src={garment.image}
                alt={garment.name}
                className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
              />

              {/* Selected indicator */}
              {selectedGarment.id === garment.id && (
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 flex items-center justify-center animate-scale-in">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="mt-2 sm:mt-3 px-1">
              <h4 className="font-medium text-xs sm:text-sm truncate">{garment.name}</h4>
              <p className="text-xs text-muted-foreground capitalize">
                {garment.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 shadow-lg h-8 w-8 sm:h-10 sm:w-10"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface OutfitItem {
  id: string
  name: string
  price: number
  position: { x: number; y: number }
}

interface Outfit {
  id: string
  model: string
  modelImage: string
  items: OutfitItem[]
  totalPrice: number
}

interface OutfitCarouselProps {
  outfits: Outfit[]
  currentOutfit: Outfit
  onOutfitChange: (outfit: Outfit) => void
  onAddToBag: (item: OutfitItem) => void
}

export function OutfitCarousel({
  outfits,
  currentOutfit,
  onOutfitChange,
  onAddToBag,
}: OutfitCarouselProps) {
  const [showPins, setShowPins] = useState(true)
  const currentIndex = outfits.findIndex((o) => o.id === currentOutfit.id)

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + outfits.length) % outfits.length
    onOutfitChange(outfits[newIndex])
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % outfits.length
    onOutfitChange(outfits[newIndex])
  }

  return (
    <div className="space-y-6">
      {/* Main Outfit Display */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        {/* Model Image */}
        <img
          src={currentOutfit.modelImage}
          alt={currentOutfit.model}
          className="absolute inset-0 w-full h-full object-contain bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
        />

        {/* Product Pins */}
        {showPins &&
          currentOutfit.items.map((item, index) => (
            <div
              key={item.id}
              className="absolute animate-scale-in"
              style={{
                left: `${item.position.x}%`,
                top: `${item.position.y}%`,
              }}
            >
              {/* Pin */}
              <div className="relative group">
                <button
                  onClick={() => onAddToBag(item)}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-orange-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Plus className="w-5 h-5 text-orange-600" />
                </button>

                {/* Tooltip */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass px-4 py-2 rounded-lg whitespace-nowrap">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-orange-600">${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 shadow-lg"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 shadow-lg"
          onClick={goToNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 glass p-6 m-4 rounded-xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Look {currentIndex + 1} of {outfits.length}
              </p>
              <h3 className="text-xl font-bold mb-1">{currentOutfit.model}</h3>
              <p className="text-sm text-muted-foreground">
                {currentOutfit.items.length} items
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Total</p>
              <p className="text-2xl font-bold text-orange-600">
                ${currentOutfit.totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Pins */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowPins(!showPins)}
          className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors"
        >
          {showPins ? 'Hide' : 'Show'} Product Pins
        </button>
      </div>

      {/* Outfit Thumbnails */}
      <div className="flex gap-3 justify-center">
        {outfits.map((outfit, index) => (
          <button
            key={outfit.id}
            onClick={() => onOutfitChange(outfit)}
            className={cn(
              'w-16 h-20 rounded-lg border-2 transition-all overflow-hidden',
              currentOutfit.id === outfit.id
                ? 'border-orange-500 scale-110'
                : 'border-transparent opacity-60 hover:opacity-100'
            )}
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-800 dark:to-red-800" />
          </button>
        ))}
      </div>
    </div>
  )
}

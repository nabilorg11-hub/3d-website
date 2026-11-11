'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ClothingItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  image: string
}

interface ClothingRailProps {
  items: ClothingItem[]
  selectedItem: ClothingItem | null
  onSelectItem: (item: ClothingItem) => void
}

export function ClothingRail({
  items,
  selectedItem,
  onSelectItem,
}: ClothingRailProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative h-[600px] rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
      {/* 3D Rail Container */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <div className="relative w-full h-96">
          {/* Rail */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full shadow-lg" />

          {/* Clothing Items in Ring Layout */}
          <div className="absolute inset-0 transform-style-3d">
            {items.map((item, index) => {
              const angle = (index / items.length) * 360
              const isHovered = hoveredIndex === index
              const isSelected = selectedItem?.id === item.id

              return (
                <div
                  key={item.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500"
                  style={{
                    transform: `
                      translateZ(-300px)
                      rotateY(${angle}deg)
                      translateZ(${isHovered ? 350 : 300}px)
                      rotateY(${isHovered ? -angle : 0}deg)
                    `,
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onSelectItem(item)}
                >
                  {/* Clothing Card */}
                  <div
                    className={cn(
                      'w-40 h-56 rounded-lg overflow-hidden shadow-xl transition-all duration-300',
                      isSelected && 'ring-4 ring-blue-500',
                      isHovered && 'scale-110'
                    )}
                  >
                    {/* Front side - shows when hovered */}
                    <div
                      className={cn(
                        'absolute inset-0 backface-hidden transition-opacity duration-300',
                        isHovered ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      <div className="w-full h-full bg-white dark:bg-gray-900 flex flex-col">
                        <div className="flex-1 p-2 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900">
                          <h3 className="font-bold text-xs mb-1 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-lg font-bold text-blue-600 dark:text-blue-300">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Edge side - shows when not hovered */}
                    <div
                      className={cn(
                        'absolute inset-0 backface-hidden transition-opacity duration-300',
                        !isHovered ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full">
        <p className="text-sm font-medium text-center">
          Hover to view · Click to select
        </p>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

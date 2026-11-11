'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { ClothingRail } from '@/components/offcut/clothing-rail'
import { Shirt, Info } from 'lucide-react'

const sampleClothes = [
  {
    id: '1',
    name: 'Vintage Denim Jacket',
    price: 89.99,
    color: 'Blue Wash',
    size: 'M',
    image: '/images/products/jacket-denim.svg',
  },
  {
    id: '2',
    name: 'Oversized Hoodie',
    price: 59.99,
    color: 'Charcoal',
    size: 'L',
    image: '/images/products/hoodie-black.svg',
  },
  {
    id: '3',
    name: 'Summer Dress',
    price: 149.99,
    color: 'Pink',
    size: 'M',
    image: '/images/products/dress-summer.svg',
  },
  {
    id: '4',
    name: 'Cotton T-Shirt',
    price: 29.99,
    color: 'White',
    size: 'S',
    image: '/images/products/tshirt-white.svg',
  },
  {
    id: '5',
    name: 'Blue Jeans',
    price: 79.99,
    color: 'Denim Blue',
    size: 'L',
    image: '/images/products/jeans-blue.svg',
  },
  {
    id: '6',
    name: 'White Sneakers',
    price: 49.99,
    color: 'White',
    size: 'M',
    image: '/images/products/sneakers-white.svg',
  },
]

export default function OffcutPage() {
  const [selectedItem, setSelectedItem] = useState<typeof sampleClothes[0] | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="border-b bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container-custom py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Offcut</h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            3D rotating clothing rail with edge-on garments
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-b">
        <div className="container-custom py-3 sm:py-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-medium">How it works</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Hover/Tap items to face them forward. Click to view details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 3D Clothing Rail (takes 2 columns) */}
          <div className="lg:col-span-2">
            <ClothingRail
              items={sampleClothes}
              selectedItem={selectedItem}
              onSelectItem={setSelectedItem}
            />
          </div>

          {/* Item Details Panel */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Item Details</h2>

              {selectedItem ? (
                <div className="space-y-4 sm:space-y-6 animate-slide-up">
                  {/* Image */}
                  <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                      {selectedItem.name}
                    </h3>
                    <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">
                      ${selectedItem.price}
                    </p>

                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Color</span>
                        <span className="font-medium">{selectedItem.color}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Size</span>
                        <span className="font-medium">{selectedItem.size}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-medium">Premium Quality</span>
                      </div>
                    </div>

                    <button className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12 text-muted-foreground">
                  <Shirt className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-20" />
                  <p className="text-sm sm:text-base">Select an item from the rail to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { OutfitCarousel } from '@/components/runway/outfit-carousel'
import { StylingBag } from '@/components/runway/styling-bag'
import { Users, ShoppingBag } from 'lucide-react'

const sampleOutfits = [
  {
    id: '1',
    model: 'Model A',
    modelImage: '/images/models/model-1.svg',
    items: [
      { id: 'item-1', name: 'Denim Jacket', price: 89.99, position: { x: 30, y: 20 } },
      { id: 'item-2', name: 'Black Jeans', price: 79.99, position: { x: 35, y: 55 } },
      { id: 'item-3', name: 'White Sneakers', price: 49.99, position: { x: 40, y: 85 } },
    ],
    totalPrice: 219.97,
  },
  {
    id: '2',
    model: 'Model B',
    modelImage: '/images/models/model-2.svg',
    items: [
      { id: 'item-4', name: 'Summer Dress', price: 149.99, position: { x: 32, y: 25 } },
      { id: 'item-5', name: 'White Sneakers', price: 49.99, position: { x: 40, y: 80 } },
    ],
    totalPrice: 199.98,
  },
  {
    id: '3',
    model: 'Model C',
    modelImage: '/images/models/model-3.svg',
    items: [
      { id: 'item-7', name: 'Black Hoodie', price: 59.99, position: { x: 35, y: 30 } },
      { id: 'item-8', name: 'Blue Jeans', price: 79.99, position: { x: 40, y: 55 } },
      { id: 'item-9', name: 'White Sneakers', price: 49.99, position: { x: 42, y: 82 } },
    ],
    totalPrice: 189.97,
  },
]

export default function RunwayPage() {
  const [bagItems, setBagItems] = useState<any[]>([])
  const [currentOutfit, setCurrentOutfit] = useState(sampleOutfits[0])

  const addToBag = (item: any) => {
    if (!bagItems.find(bagItem => bagItem.id === item.id)) {
      setBagItems([...bagItems, item])
    }
  }

  const removeFromBag = (itemId: string) => {
    setBagItems(bagItems.filter(item => item.id !== itemId))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="border-b bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="container-custom py-4 sm:py-6 md:py-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold truncate">Runway</h1>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                Full-body styled looks with shoppable items
              </p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-gray-800 border flex-shrink-0">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">{bagItems.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-4 sm:py-6 md:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Outfit Carousel (takes 2 columns) */}
          <div className="lg:col-span-2">
            <OutfitCarousel
              outfits={sampleOutfits}
              currentOutfit={currentOutfit}
              onOutfitChange={setCurrentOutfit}
              onAddToBag={addToBag}
            />
          </div>

          {/* Styling Bag */}
          <div>
            <StylingBag
              items={bagItems}
              onRemoveItem={removeFromBag}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

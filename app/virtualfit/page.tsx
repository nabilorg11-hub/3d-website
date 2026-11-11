'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { GarmentCarousel } from '@/components/virtualfit/garment-carousel'
import { ScanAnimation } from '@/components/virtualfit/scan-animation'
import { Button } from '@/components/ui/button'
import { Sparkles, Camera, Share2 } from 'lucide-react'

const sampleGarments = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    image: '/images/products/tshirt-white.svg',
    category: 'tops',
    color: 'white',
  },
  {
    id: '2',
    name: 'Denim Jacket',
    image: '/images/products/jacket-denim.svg',
    category: 'outerwear',
    color: 'blue',
  },
  {
    id: '3',
    name: 'Black Hoodie',
    image: '/images/products/hoodie-black.svg',
    category: 'tops',
    color: 'black',
  },
  {
    id: '4',
    name: 'Summer Dress',
    image: '/images/products/dress-summer.svg',
    category: 'dresses',
    color: 'pink',
  },
  {
    id: '5',
    name: 'Blue Jeans',
    image: '/images/products/jeans-blue.svg',
    category: 'bottoms',
    color: 'blue',
  },
]

export default function VirtualFitPage() {
  const [selectedGarment, setSelectedGarment] = useState(sampleGarments[0])
  const [isScanning, setIsScanning] = useState(false)

  const handleTryOn = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="border-b bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container-custom py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">VirtualFit</h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Spatial try-on with 3D garment carousel
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-4 sm:py-6 md:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left: 3D Preview */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            {isScanning && <ScanAnimation />}

            {/* Placeholder for 3D model/camera feed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <Camera className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 text-gray-400" />
                <p className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">
                  Camera Preview
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                  Your virtual fitting room
                </p>
              </div>
            </div>

            {/* Frosted glass overlay with garment info */}
            <div className="absolute bottom-0 left-0 right-0 glass p-3 sm:p-4 lg:p-6 m-2 sm:m-3 lg:m-4 rounded-lg sm:rounded-xl">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{selectedGarment.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                {selectedGarment.category} · {selectedGarment.color}
              </p>
              <div className="flex gap-2 sm:gap-3">
                <Button onClick={handleTryOn} className="flex-1 text-sm sm:text-base">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Try On
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: 3D Garment Carousel */}
          <div>
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Choose a Garment</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Scroll through our 3D collection
              </p>
            </div>

            <GarmentCarousel
              garments={sampleGarments}
              selectedGarment={selectedGarment}
              onSelectGarment={setSelectedGarment}
            />

            {/* Garment Details */}
            <div className="mt-4 sm:mt-6 lg:mt-8 p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl border bg-card">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">About This Item</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium capitalize">
                    {selectedGarment.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color</span>
                  <span className="font-medium capitalize">
                    {selectedGarment.color}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span className="font-medium">100% Cotton</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sizes</span>
                  <span className="font-medium">XS - XXL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

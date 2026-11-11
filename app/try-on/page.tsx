'use client'

import { useState, useRef } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Button } from '@/components/ui/button'
import { Upload, Zap, Download, RefreshCw, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function TryOnPage() {
  const [humanImage, setHumanImage] = useState<string | null>(null)
  const [garmentImage, setGarmentImage] = useState<string | null>(null)
  const [resultImage, setResultImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const humanInputRef = useRef<HTMLInputElement>(null)
  const garmentInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'human' | 'garment'
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload an image file',
        variant: 'destructive',
      })
      return
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: 'File too large',
        description: 'Please upload an image under 10MB',
        variant: 'destructive',
      })
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      if (type === 'human') {
        setHumanImage(dataUrl)
      } else {
        setGarmentImage(dataUrl)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleTryOn = async () => {
    if (!humanImage || !garmentImage) {
      toast({
        title: 'Missing images',
        description: 'Please upload both your photo and a garment image',
        variant: 'destructive',
      })
      return
    }

    setIsProcessing(true)
    setResultImage(null)

    try {
      const response = await fetch('/api/tryon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          humanImage,
          garmentImage,
        }),
      })

      if (!response.ok) {
        throw new Error('Try-on failed')
      }

      const data = await response.json()
      setResultImage(data.resultImage)

      toast({
        title: 'Success!',
        description: 'Your virtual try-on is ready',
      })
    } catch (error) {
      console.error('Try-on error:', error)
      toast({
        title: 'Try-on failed',
        description: 'Please try again or use different images',
        variant: 'destructive',
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDownload = () => {
    if (!resultImage) return

    const link = document.createElement('a')
    link.href = resultImage
    link.download = 'virtual-tryon-result.jpg'
    link.click()
  }

  const handleReset = () => {
    setHumanImage(null)
    setGarmentImage(null)
    setResultImage(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="border-b bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container-custom py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">AI Virtual Try-On</h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Upload your photo and see how any garment looks on you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Upload Section */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Human Image Upload */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                Your Photo
              </label>
              <div
                onClick={() => humanInputRef.current?.click()}
                className="relative aspect-[3/4] rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-purple-500 transition-colors cursor-pointer overflow-hidden group"
              >
                {humanImage ? (
                  <img
                    src={humanImage}
                    alt="Your photo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mb-2 sm:mb-3 group-hover:text-purple-500 transition-colors" />
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center">
                      Click to upload your photo
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 text-center">
                      Full body photo works best
                    </p>
                  </div>
                )}
                <input
                  ref={humanInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 'human')}
                />
              </div>
            </div>

            {/* Garment Image Upload */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                Garment Image
              </label>
              <div
                onClick={() => garmentInputRef.current?.click()}
                className="relative aspect-[3/4] rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-pink-500 transition-colors cursor-pointer overflow-hidden group"
              >
                {garmentImage ? (
                  <img
                    src={garmentImage}
                    alt="Garment"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mb-2 sm:mb-3 group-hover:text-pink-500 transition-colors" />
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center">
                      Click to upload garment
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 text-center">
                      Clear product image recommended
                    </p>
                  </div>
                )}
                <input
                  ref={garmentInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 'garment')}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Button
              size="lg"
              onClick={handleTryOn}
              disabled={!humanImage || !garmentImage || isProcessing}
              className="px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Generate Try-On
                </>
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleReset}
              disabled={isProcessing}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Reset
            </Button>
          </div>

          {/* Result Section */}
          {(isProcessing || resultImage) && (
            <div className="animate-slide-up">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">Result</h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {isProcessing
                    ? 'AI is generating your try-on...'
                    : 'Your virtual try-on is ready!'}
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  {isProcessing ? (
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <div className="text-center">
                        <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 animate-spin text-purple-600" />
                        <p className="text-base sm:text-lg font-medium">Processing...</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                          This may take 30-60 seconds
                        </p>
                      </div>
                    </div>
                  ) : resultImage ? (
                    <img
                      src={resultImage}
                      alt="Try-on result"
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>

                {resultImage && (
                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <Button size="lg" onClick={handleDownload} className="w-full sm:w-auto text-sm sm:text-base">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Download Result
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Tips for best results:</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• Use a clear, full-body photo with good lighting</li>
              <li>• Stand facing the camera in a neutral pose</li>
              <li>• Use garment images with plain backgrounds</li>
              <li>• Make sure the garment is clearly visible</li>
              <li>• Processing typically takes 30-60 seconds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

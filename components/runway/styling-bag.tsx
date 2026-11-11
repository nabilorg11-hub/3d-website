'use client'

import { ShoppingBag, Trash2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BagItem {
  id: string
  name: string
  price: number
}

interface StylingBagProps {
  items: BagItem[]
  onRemoveItem: (itemId: string) => void
}

export function StylingBag({ items, onRemoveItem }: StylingBagProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingBag className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-bold">Styling Bag</h2>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-sm">Your bag is empty</p>
            <p className="text-xs mt-2">
              Click the + pins on outfits to add items
            </p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 animate-slide-up"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-sm text-orange-600 font-semibold">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="ml-3 p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-sm text-green-600">FREE</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-orange-600">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

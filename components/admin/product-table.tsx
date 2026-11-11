import { Edit, Trash2, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  stock: number
}

interface ProductTableProps {
  products: Product[]
  onEdit?: (product: Product) => void
  onDelete?: (productId: string) => void
  onView?: (productId: string) => void
}

export function ProductTable({
  products,
  onEdit,
  onDelete,
  onView,
}: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-semibold">Product</th>
            <th className="text-left p-4 font-semibold">Category</th>
            <th className="text-left p-4 font-semibold">Price</th>
            <th className="text-left p-4 font-semibold">Stock</th>
            <th className="text-left p-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-gray-200 dark:bg-gray-700" />
                  <div>
                    <p className="font-medium">{product.name}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 capitalize">{product.category}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  {onView && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onView(product.id)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  )}
                  {onEdit && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(product)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(product.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

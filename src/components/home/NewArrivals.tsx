import ProductCard from "@/components/ui/ProductCard"
import type { Product } from "@/types"

interface Props {
  products: Product[]
}

export default function NewArrivals({ products }: Props) {
  const recent = products.slice(0, 10)

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          <span className="text-teal-500">New</span> Arrivals
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {recent.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
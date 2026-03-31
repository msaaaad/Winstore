"use client"

import { useState } from "react"
import ProductCard from "@/components/ui/ProductCard"
import type { Product, Category } from "@/types"

interface Props {
  categories: Category[]
  productsByCategory: Record<string, Product[]>
}

export default function BestDeals({ categories, productsByCategory }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || "")

  const products = productsByCategory[activeCategory] || []

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      {/* Heading + Tabs */}
      <div className="flex items-center justify-between gap-6 mb-4 flex-wrap">
        <h2 className="text-[28px] font-[400] text-gray-800 pb-2">
          <span className="text-teal-500">Best</span> Deals
        </h2>

        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`text-[19px] pb-2 uppercase tracking-wide font-medium transition-colors border-b-2 -mb-px
                ${activeCategory === cat.name
                  ? "border-accent text-accent"
                  : "border-transparent text-dark hover:text-gray-800"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
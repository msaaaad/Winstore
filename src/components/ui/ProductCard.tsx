import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow bg-white flex flex-col gap-2">
        
        {/* Seller */}
        <p className="text-xs text-gray-400">Bin Bakar Electronics</p>

        {/* Title */}
        <p className="text-xs text-gray-700 font-medium line-clamp-2 min-h-[32px]">
          {product.title}
        </p>

        {/* Image */}
        <div className="flex justify-center items-center h-32">
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-400 line-through">
            Rs {(product.price * 1.2).toFixed(0)}
          </span>
          <span className="text-sm text-accent">
            Rs {product.price.toFixed(0)}
          </span>
        </div>

        {/* Button */}
        <button className="w-full btn-custom-primary text-xs py-1.5 mt-auto transition-colors">
          Add to cart
        </button>
      </div>
    </Link>
  )
}
import Image from "next/image"
import Link from "next/link"
import { getProductById, getProducts } from "@/actions/products"
import { ShoppingCart, Heart, Share2 } from "lucide-react"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const product = await getProductById(Number(id))
  return {
    title: `${product.title} | WIN Store`,
    description: product.description.slice(0, 150),
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = await getProductById(Number(id))

  const stars = Math.round(product.rating.rate)
  const discountedPrice = (product.price * 1.2).toFixed(2)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-accent capitalize transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-600 line-clamp-1">{product.title}</span>
        </nav>

        <div className="bg-white rounded-xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl flex items-center justify-center p-10 min-h-[380px]">
              <Image
                src={product.image}
                alt={product.title}
                width={320}
                height={320}
                className="object-contain max-h-[320px] w-auto"
                priority
              />
            </div>

            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`border-2 rounded-lg p-2 cursor-pointer ${i === 1 ? "border-accent" : "border-gray-200"}`}
                >
                  <Image
                    src={product.image}
                    alt={`thumb-${i}`}
                    width={60}
                    height={60}
                    className="object-contain h-14 w-14"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">

            <span className="text-xs uppercase tracking-widest text-accent font-semibold bg-teal-50 px-3 py-1 rounded-full w-fit">
              {product.category}
            </span>

            <h1 className="text-2xl font-bold text-gray-800 leading-snug">
              {product.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < stars ? "text-yellow-400" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating.rate} rating
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                {product.rating.count} reviews
              </span>
            </div>

            <hr className="border-gray-100" />

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-accent">
                Rs {product.price.toFixed(2)}
              </span>
              <span className="text-lg text-gray-400 line-through">
                Rs {discountedPrice}
              </span>
              <span className="bg-orange-100 text-orange-500 text-xs font-bold px-2.5 py-1 rounded-full">
                20% OFF
              </span>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {product.description}
              </p>
            </div>

            <hr className="border-gray-100" />

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-medium text-gray-700">Quantity</span>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 text-lg font-medium transition-colors">
                  −
                </button>
                <span className="px-5 py-2 text-sm font-semibold border-x border-gray-200">
                  1
                </span>
                <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 text-lg font-medium transition-colors">
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex-1 flex items-center justify-center gap-2 btn-custom-primary text-white text-sm font-medium py-3 px-6 rounded-lg transition-colors">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:border-accent text-gray-400 text-gray-500 hover:text-accent py-3 px-4 rounded-lg transition-colors">
                <Heart size={16} />
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:border-accent text-gray-400 text-gray-500 hover:text-accent py-3 px-4 rounded-lg transition-colors">
                <Share2 size={16} />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-2 text-xs text-gray-500">
              <div className="flex gap-2">
                <span className="font-semibold text-gray-600 w-20">Category</span>
                <span className="capitalize">{product.category}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gray-600 w-20">SKU</span>
                <span>WIN-{String(product.id).padStart(4, "0")}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gray-600 w-20">Availability</span>
                <span className="text-green-500 font-medium">In Stock</span>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="text-sm text-accent hover:underline flex items-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}
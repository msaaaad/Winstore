"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Category } from "@/types"

const categoryImages: Record<string, string> = {
  electronics: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  jewelery: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  "men's clothing": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  "women's clothing": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
}

interface Props {
  categories: Category[]
}

const VISIBLE = 4

export default function CategorySlider({ categories }: Props) {
  const [start, setStart] = useState(0)

  const prev = () => setStart((i) => Math.max(0, i - 1))
  const next = () =>
    setStart((i) => Math.min(categories.length - VISIBLE, i + 1))

  const visible = categories.slice(start, start + VISIBLE)

  return (
    <div className="relative max-w-7xl mx-auto px-12 py-6">
      
      <button
        onClick={prev}
        disabled={start === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white-90 shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30"
      >
        <ChevronLeft size={40} />
      </button>

      <div className="grid grid-cols-4 gap-6">
        {visible.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.name}`}
            className="relative h-48 overflow-hidden group"
          >
            <Image
              src={
                categoryImages[cat.name] ||
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              }
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

            <div className="absolute bottom-4 left-[-2px] right-4 shadow-md">
              <div className="bg-white/80 backdrop-blur-md px-4 py-2 flex items-center justify-between shadow-md">
                <span className="text-[19px] font-[400] capitalize">
                  {cat.name}
                </span>
                <span className="text-[16px] text-sky font-[400] hover:underline">
                  Shop
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={next}
        disabled={start + VISIBLE >= categories.length}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white-90 shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}
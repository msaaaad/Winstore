"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Category } from "@/types"

const categoryImages: Record<string, string> = {
  "electronics": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  "jewelery": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
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
  const next = () => setStart((i) => Math.min(categories.length - VISIBLE, i + 1))

  const visible = categories.slice(start, start + VISIBLE)

  return (
    <div className="relative max-w-7xl mx-auto px-10 py-4">
      {/* Prev */}
      <button
        onClick={prev}
        disabled={start === 0}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full flex items-center justify-center z-10 disabled:opacity-30 hover:bg-gray-100"
      >
        ‹
      </button>

      <div className="grid grid-cols-4 gap-3">
        {visible.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.name}`}
            className="relative rounded-lg overflow-hidden group cursor-pointer h-44"
          >
            <Image
              src={categoryImages[cat.name] || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"}
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/35 flex items-end p-3">
              <div>
                <p className="text-white font-semibold capitalize text-sm">{cat.name}</p>
                <span className="text-teal-300 text-xs">Shop</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={next}
        disabled={start + VISIBLE >= categories.length}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full flex items-center justify-center z-10 disabled:opacity-30 hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  )
}
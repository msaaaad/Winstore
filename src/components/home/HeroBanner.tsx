"use client"

import { useState } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Computer & experience",
    subtitle: "You Cannot Inspect Quality Into The Product; It Is Already There.\nI Am Not A Product Of My Circumstances, I Am A Product Of My Decisions.",
    badge: "40% Off",
    bg: "bg-yellow-50",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    title: "Latest Electronics at Best Prices",
    subtitle: "Discover top brands and amazing deals on electronics.",
    badge: "30% Off",
    bg: "bg-blue-50",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  },
  {
    id: 3,
    title: "Fashion for Everyone",
    subtitle: "Explore the latest trends in men's and women's fashion.",
    badge: "20% Off",
    bg: "bg-pink-50",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1))

  const slide = slides[current]

  return (
    <div className={`relative w-full ${slide.bg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full flex items-center justify-center z-10 text-lg hover:bg-gray-100"
        >‹</button>
        <button
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full flex items-center justify-center z-10 text-lg hover:bg-gray-100"
        >›</button>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[220px] md:min-h-[320px] py-6 gap-4">

          {/* Text */}
          <div className="flex-1 max-w-sm z-10 text-center md:text-left">
            <div className="text-2xl md:text-[48px] font-[400] leading-tight">
              Shop
              <span className="text-accent ml-2">
                {slide.title}
              </span>
            </div>
            <p className="text-xs md:text-[13px] whitespace-pre-line leading-relaxed my-3 text-gray-500">
              {slide.subtitle}
            </p>
            <button className="bg-sky text-white text-sm px-6 py-2 rounded">
              View More
            </button>
          </div>

          {/* Image + Badge */}
          <div className="flex-1 flex justify-center items-center relative py-4">
            <Image
              src={slide.image}
              alt={slide.title}
              width={320}
              height={300}
              className="object-contain max-h-[180px] md:max-h-[280px] w-auto"
              priority
            />
            {/* Badge */}
            <div className="absolute top-2 right-4 md:right-16 hero-badge rounded-full w-[80px] h-[80px] md:w-[165px] md:h-[160px] flex items-center justify-center text-xl md:text-[47px] font-[400] text-center leading-tight">
              {slide.badge}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 w-6 ${
              i === current ? "bg-teal-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
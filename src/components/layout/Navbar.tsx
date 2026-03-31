'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Select from "../inputs/Select"
const options = [
  { label: "All Categories", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
]


export default function Navbar() {
  const [category, setCategory] = useState("all")

  return (
    <header>
      {/* Main navbar */}
      <div className="nav-main-bg text-white py-3 px-6 flex items-center justify-between">
        <div className="flex gap-6 flex-[0.7] items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold mb-3 flex items-baseline gap-0.5">
            <Image src="/logo/logo.png" alt="Logo" width={132} height={48} />
          </Link>

          {/* Search */}
          <div className="flex flex-1 rounded h-9">
            <div className="w-44 shrink-0">
              <Select
                options={options}
                value={category}
                onChange={setCategory}
                buttonClassName="rounded-l"
              />
            </div>

            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 text-gray-800 text-sm px-4 outline-none bg-white"
            />
            <button className="bg-gray-400 px-4 rounded-r">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex flex-col items-center">
            <p className="text-[9px]">
              Call us now
            </p>
            <p className="text-[13px] flex items-center">
              <Image src="/icons/headphone.svg" alt="Headphone" width={19} height={16} />
              +011 5827918
            </p>
            <p className="text-[13px]">
              Sign In
            </p>
          </div>
          <Link href="#" className="flex flex-col items-center hover:text-teal-300 gap-0.5">
            <Image src="/icons/person.svg" alt="Person" width={24} height={24} />
          </Link>
          <Link href="#" className="flex flex-col items-center hover:text-teal-300 gap-0.5">
            <Image src="/icons/heart.svg" alt="Heart" width={24} height={24} />
          </Link>
          <Link href="#" className="flex items-center hover:text-teal-300 gap-0.5">
            <Image src="/icons/cart.svg" alt="Bag" width={24} height={44} />
            <span className="text-[13px]">Cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="nav-sub-bar text-[13px] px-6 py-2 flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-1.5 rounded hover:bg-teal-600 whitespace-nowrap text-[17px]">
          ☰ Browse By Category
        </button>
        <Link href="/" className="hover:text-teal-300 whitespace-nowrap text-[13px]">Home</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap text-[13px]">Easy Monthly Installments</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap text-[13px]">Shop by Brands</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap text-[13px]">Become a Vendor</Link>
        <div className="ml-auto flex items-center gap-5 text-sm">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            <Image src="/icons/facebook.svg" alt="Facebook" width={8} height={8} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            <Image src="/icons/twiter.svg" alt="Twitter" width={18} height={18} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}
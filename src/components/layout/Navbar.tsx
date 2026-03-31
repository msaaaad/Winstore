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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      {/* Main navbar */}
      <div className="nav-main-bg text-white py-3 px-4 md:px-6">
        <div className="flex items-center justify-between gap-3">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo/logo.png" alt="Logo" width={100} height={36} />
          </Link>

          {/* Search — hidden on mobile, visible md+ */}
          <div className="hidden md:flex flex-1 rounded h-9 max-w-2xl">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            {/* Call + Sign In — hidden on mobile */}
            <div className="hidden md:flex flex-col items-center">
              <p className="text-[9px]">Call us now</p>
              <p className="text-[13px] flex items-center gap-1">
                <Image src="/icons/headphone.svg" alt="Headphone" width={19} height={16} />
                +011 5827918
              </p>
              <p className="text-[13px]">Sign In</p>
            </div>

            <Link href="#" className="hover:text-teal-300">
              <Image src="/icons/person.svg" alt="Person" width={22} height={22} />
            </Link>
            <Link href="#" className="hover:text-teal-300 hidden sm:block">
              <Image src="/icons/heart.svg" alt="Heart" width={22} height={22} />
            </Link>
            <Link href="#" className="flex items-center hover:text-teal-300 gap-0.5">
              <Image src="/icons/cart.svg" alt="Bag" width={22} height={22} />
              <span className="text-[13px] hidden sm:inline">Cart</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search — shown below on small screens */}
        <div className="flex md:hidden mt-3 rounded h-9">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 text-gray-800 text-sm px-4 outline-none bg-white rounded-l"
          />
          <button className="bg-gray-400 px-4 rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom nav — desktop */}
      <div className="nav-sub-bar text-[13px] px-6 py-2 hidden md:flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-1.5 rounded hover:bg-teal-600 whitespace-nowrap text-[17px]">
          ☰ Browse By Category
        </button>
        <Link href="/" className="hover:text-teal-300 whitespace-nowrap">Home</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap">Easy Monthly Installments</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap">Shop by Brands</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap">Become a Vendor</Link>
        <div className="ml-auto flex items-center gap-5">
          <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={8} height={8} /></Link>
          <Link href="#"><Image src="/icons/twiter.svg" alt="Twitter" width={18} height={18} /></Link>
          <Link href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} /></Link>
          <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} /></Link>
        </div>
      </div>

      {/* Mobile menu — toggled */}
      {menuOpen && (
        <div className="md:hidden nav-sub-bar text-[13px] px-6 py-4 flex flex-col gap-4">
          <button className="flex items-center gap-2 hover:text-teal-300 text-left">
            ☰ Browse By Category
          </button>
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">Home</Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">Easy Monthly Installments</Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">Shop by Brands</Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">Become a Vendor</Link>
          <div className="flex items-center gap-5 pt-2 border-t border-teal-700">
            <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={8} height={8} /></Link>
            <Link href="#"><Image src="/icons/twiter.svg" alt="Twitter" width={18} height={18} /></Link>
            <Link href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} /></Link>
            <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} /></Link>
          </div>
        </div>
      )}
    </header>
  )
}
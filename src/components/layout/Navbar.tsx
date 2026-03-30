import Link from "next/link"
import { ShoppingCart, Heart, User, Phone } from "lucide-react"

export default function Navbar() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-teal-700 text-white text-xs py-1 px-6 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Phone size={11} />
          <span>Call Us Now: +011 5827918</span>
        </div>
        <Link href="#" className="hover:underline text-xs">Sign In</Link>
      </div>

      {/* Main navbar */}
      <div className="bg-teal-800 text-white py-3 px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap min-w-fit">
          <span className="text-white">WIN</span>
          <span className="text-teal-300 text-sm font-normal">store</span>
        </Link>

        {/* Search */}
        <div className="flex flex-1 max-w-2xl rounded overflow-hidden">
          <select className="bg-gray-100 text-gray-700 text-sm px-3 py-2 border-r border-gray-300 outline-none min-w-fit">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Jewelery</option>
            <option>Men's Clothing</option>
            <option>Women's Clothing</option>
          </select>
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 text-gray-800 text-sm px-4 py-2 outline-none bg-white"
          />
          <button className="bg-teal-500 hover:bg-teal-400 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="#" className="flex flex-col items-center hover:text-teal-300 gap-0.5">
            <User size={18} />
            <span className="text-xs">Account</span>
          </Link>
          <Link href="#" className="flex flex-col items-center hover:text-teal-300 gap-0.5">
            <Heart size={18} />
            <span className="text-xs">Wishlist</span>
          </Link>
          <Link href="#" className="flex flex-col items-center hover:text-teal-300 gap-0.5">
            <ShoppingCart size={18} />
            <span className="text-xs">Cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-teal-900 text-white text-sm px-6 py-2 flex items-center gap-6">
        <button className="flex items-center gap-2 bg-teal-700 px-4 py-1.5 rounded hover:bg-teal-600 whitespace-nowrap text-sm">
          ☰ Browse By Category
        </button>
        <Link href="/" className="hover:text-teal-300 whitespace-nowrap">Home</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap">Easy Monthly Installments</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap">Shop by Brands</Link>
        <Link href="#" className="hover:text-teal-300 whitespace-nowrap">Become a Vendor</Link>
        <div className="ml-auto flex items-center gap-3 text-sm">
          <Link href="#" className="hover:text-teal-300">f</Link>
          <Link href="#" className="hover:text-teal-300">𝕏</Link>
          <Link href="#" className="hover:text-teal-300">in</Link>
          <Link href="#" className="hover:text-teal-300">⊙</Link>
        </div>
      </div>
    </header>
  )
}
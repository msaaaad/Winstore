import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-white mt-10" style={{ backgroundColor: "#393939" }}>
      <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="text-2xl font-bold mb-3 flex items-baseline gap-0.5">
            <span className="text-white font-extrabold">
              <span className="text-3xl">WIN</span>
            </span>
            <span className="text-gray-300 text-sm font-normal">store</span>
          </div>

          <p className="text-teal-400 text-sm font-semibold mb-3">
            Got questions? Call us 24/7!
          </p>

          <p className="text-gray-300 text-sm">03 111 666 144</p>
          <p className="text-gray-300 text-sm mb-4">0317 5772015</p>

          <p className="text-teal-400 text-sm font-semibold">Contact Info</p>
          <p className="text-gray-300 text-sm mb-4">info@winstore.pk</p>

          {/* Social icons */}
          <div className="flex gap-3">
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

        {/* Trending */}
        <div>
          <h4 className="text-teal-400 font-semibold mb-4">Trending</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {["Installments", "Electronics", "Grocery", "Health & Beauty", "Home Appliances", "Mobile Accessories"].map(item => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-teal-400 font-semibold mb-4">Information</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {["About Us", "Contact Us", "FAQs", "Shipping & Return", "Privacy policy", "Terms & Conditions"].map(item => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-teal-400 font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {["My Account", "Track Your Order", "Recently Viewed", "Wishlist", "Compare", "Become a Vendor"].map(item => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div></div>
        {/* Payment badges */}
        <div className="flex gap-2 my-3 flex-wrap items-center space-x-2 px-5">
          <Image src="/payment/visa.png" alt="Visa" width={97} height={55} />
          <Image src="/payment/mastercard.png" alt="Mastercard" width={97} height={55} />
          <Image src="/payment/cash.png" alt="Cash" width={97} height={55} />
          <Image src="/payment/installment.png" alt="Installment" width={97} height={55} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl text-left text-xs text-gray-400 py-4 px-6" style={{ backgroundColor: "#000" }}>
        © 2021 Winstore. All Rights Reserved.
      </div>
    </footer>
  )
}

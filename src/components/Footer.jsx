import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20" style={{backgroundImage: 'linear-gradient(to top, rgba(37, 150, 190, 0.5) 26%, transparent)'}}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-3xl font-bold text-orange-600">
            Aero<span className="text-stone-600">Haven</span>
          </Link>
          <p className="text-gray-600">
            Making your travel dreams come true. Find flights, explore destinations, and book with confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-stone-600 hover:text-orange-600 transition-all duration-300">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-stone-600 hover:text-orange-600 transition-all duration-300">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-stone-600 hover:text-orange-600 transition-all duration-300">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://wa.me/1234567890" className="text-stone-600 hover:text-orange-600 transition-all duration-300">
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold text-gray-700">Quick Links</h4>
          <Link href="/" className="text-stone-600 hover:text-orange-500 hover:pl-3 transition-all duration-300">Home</Link>
          <Link href="/about-us" className="text-stone-600 hover:text-orange-500 hover:pl-3 transition-all duration-300">About Us</Link>
          <Link href="/privacy" className="text-stone-600 hover:text-orange-500 hover:pl-3 transition-all duration-300">Privacy Policy</Link>
          <Link href="/contact-us" className="text-stone-600 hover:text-orange-500 hover:pl-3 transition-all duration-300">Contact Us</Link>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold text-gray-700">Contact Info</h4>
          <p className="text-stone-600">📍 123 Travel Street, New York, USA</p>
          <p className="text-stone-600">📞 +1 234 567 8901</p>
          <p className="text-stone-600">✉️ support@aerohaven.com</p>
          <p className="text-stone-600">🕒 Mon - Sat: 9:00 AM - 8:00 PM</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-gray-700">Newsletter</h4>
          <p className="text-gray-600">Subscribe to get latest travel updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full  rounded-l-4xl px-4 border border-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 text-white py-2 px-6 rounded-r-4xl hover:bg-orange-600 hover:shadow-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="border-t mt-8 py-4 text-center text-stone-600 text-sm">
        © {new Date().getFullYear()} AeroHaven. All rights reserved.
      </div>
    </footer>
  );
}

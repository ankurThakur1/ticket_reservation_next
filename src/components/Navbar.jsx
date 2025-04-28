"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const navLink = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Contact Us", path: "/contact-us" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-2xl  md:max-w-3xl lg:max-w-5xl rounded-full px-0.5 bg-white/35 backdrop-blur-lg shadow-md z-50 ">
        <div className="flex items-center justify-between px-4 py-2 h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl md:text-xl lg:text-2xl font-bold text-orange-600">Aero<span className="text-stone-600">Haven</span></span>
          </Link>
          <nav className="hidden md:flex items-center lg:gap-10 md:gap-1 gap-8">
            {navLink.map((item, index) => (
              <li
                key={index}
                className="list-none md:text-sm lg:text-lg whitespace-nowrap px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition"
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Link href="/contact-us">
              <button className="bg-orange-500 md:text-sm lg:text-lg text-white md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full hover:bg-orange-600 hover:shadow-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
                Connect Us
              </button>
            </Link>
          </div>
          <button
            className="flex md:hidden text-3xl text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-4 pt-20">
          {
            navLink.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition border-b border-gray-300"
              >
                {item.label}
              </Link>
            ))
          }

          <div className="mt-6 border-t pt-4 flex items-center gap-3">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 hover:shadow-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
              Connect Us
            </button>
          </div>
        </div>
      </div>

      {
        isOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden" onClick={() => setIsOpen(false)}></div>
        )
      }
    </>
  );
};

export default Navbar;

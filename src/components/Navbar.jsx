"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-xs">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/favicon.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold">
            <span className="text-teal-500">Edu</span>
            <span className="text-gray-800">Care</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-gray-800">
          <Link href='/' className="hover:text-teal-500 transition">HOME</Link>
          <Link href='/courses' className="hover:text-teal-500 transition">COURSES</Link>
          <Link href='/shop' className="hover:text-teal-500 transition">SHOP</Link>
          <Link href='/blog' className="hover:text-teal-500 transition">BLOG</Link>
          <Link href='/contact' className="hover:text-teal-500 transition">CONTACT</Link>
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Wishlist */}
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-teal-500 cursor-pointer transition">
            <Heart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-xs bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          {/* Cart */}
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-teal-500 cursor-pointer transition">
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-xs bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition">
            Start Free Trial
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">

          {/* Wishlist */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
            <Heart size={18} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          {/* Cart */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
            <ShoppingCart size={18} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md border border-gray-300"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-maxh duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3 text-gray-800 font-medium">

          <Link href='/' className="block w-full text-left py-2 hover:text-teal-500 transition">HOME</Link>
          <Link href='/courses' className="block w-full text-left py-2 hover:text-teal-500 transition">COURSES</Link>
          <Link href='/shop' className="block w-full text-left py-2 hover:text-teal-500 transition">SHOP</Link>
          <Link href='/blog' className="block w-full text-left py-2 hover: transition">BLOG</Link>
          <Link href='/contact' className="block w-full text-left py-2 hover:text-teal-500 transition">CONTACT</Link>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

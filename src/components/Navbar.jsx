"use client";

import React, { useState } from "react";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/courses", label: "COURSES" },
    { href: "/shop", label: "SHOP" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (href) => href === pathname;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/assets/favicon.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">
            <span className="text-teal-500">Edu</span>
            <span className="text-gray-800">Care</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold relative">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${isActive(link.href) ? "text-teal-500" : "text-gray-800 hover:text-teal-500"
                  }`}
              >
                {link.label}
              </Link>
              {/* Animated underline */}
              <motion.span
                layoutId="nav-underline"
                initial={false}
                animate={{ width: isActive(link.href) ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 bottom-[-2px] h-[2px] bg-teal-500 rounded"
              />
            </div>
          ))}
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Wishlist */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer transition"
          >
            <Heart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-xs bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </motion.div>

          {/* Cart */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer transition"
          >
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-xs bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
            className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
          >
            Start Free Trial
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
            <Heart size={18} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
            <ShoppingCart size={18} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-teal-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md border border-gray-300"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
      >
        <div className="px-4 py-4 space-y-3 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block w-full py-2 transition ${isActive(link.href)
                  ? "text-teal-500 font-semibold"
                  : "text-gray-800 hover:text-teal-500"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

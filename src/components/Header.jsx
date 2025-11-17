import React from "react";
import { Phone, MapPin, Clock, User } from "lucide-react"; // icons
import { FaFacebookF, FaInstagram, FaBehance, FaSkype, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="hidden lg:block bg-[#1F2C30] text-white py-2">
      <div className="container mx-auto flex items-center justify-between py-1 font-medium text-sm">

        {/* Left Section */}
        <div className="flex items-center gap-8">

          {/* Phone */}
          <div className="flex items-center gap-2 border-r border-gray-600 pr-6">
            <Phone size={17} className="text-teal-400" />
            <span className="text-sm">256 214 203 215</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 border-r border-gray-600 pr-6">
            <MapPin size={17} className="text-teal-400" />
            <span className="text-sm">258 Helano Street, New York</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <Clock size={17} className="text-teal-400" />
            <span className="text-sm">Mon – Sat: 8:00 – 15:00</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">

          {/* Login */}
          <div className="flex items-center gap-2">
            <User size={17} className="text-teal-400" />
            <button className="text-sm hover:text-teal-300 transition">
              Login / Register
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow Us</span>
            <FaFacebookF className="hover:text-teal-300 cursor-pointer" />
            <FaInstagram className="hover:text-teal-300 cursor-pointer" />
            <FaBehance className="hover:text-teal-300 cursor-pointer" />
            <FaSkype className="hover:text-teal-300 cursor-pointer" />
            <FaYoutube className="hover:text-teal-300 cursor-pointer" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;

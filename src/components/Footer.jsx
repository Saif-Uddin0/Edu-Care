import React from "react";
import { Mail, ArrowRight, Phone, MapPin, Calendar } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaBehance,
    FaPinterestP,
    FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#162726] text-white pt-20 pb-10">
            {/* Newsletter */}
            <div className="container mx-auto px-5 mb-20">
                <div className="flex border border-white/20 rounded-2xl p-10  flex-col py-15 items-center gap-6 justify-between">
                    <h2 className="text-3xl flex-wrap font-semibold leading-snug text-center md:text-left">
                        Subscribe Our Newsletter For <br /> <span className="text-center flex justify-center">
                            Latest Updates
                        </span>
                    </h2>

                    <div className="flex items-center w-full md:w-1/2">
                        <div className="flex items-center bg-white/10 rounded-full px-4 py-3 flex-grow backdrop-blur-md">
                            <Mail className="mr-3 opacity-60" size={20} />
                            <input
                                type="email"
                                className="bg-transparent outline-none w-full placeholder-white/60"
                                placeholder="Enter Your E-mail"
                            />
                        </div>

                        <button className="ml-3 bg-teal-500 px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">

                {/* Get in Touch */}
                <div className="space-y-10">
                    <h3 className="text-xl font-semibold mb-3 relative">
                        GET IN TOUCH!
                        <div className="w-12 h-[2px] bg-teal-400 mt-1"></div>
                    </h3>
                    <p className="text-white/70 mb-4">
                        Fusce varius, dolor tempor interdum tristiquei bibendum.
                    </p>

                    <p className="flex items-center gap-2 mb-2">
                        <Phone size={18} /> (702) 123-1478
                    </p>
                    <p className="text-white/70">info@company.com</p>

                    <div className="flex gap-5 mt-5 text-lg">
                        {[FaFacebookF, FaInstagram, FaBehance, FaPinterestP, FaYoutube].map(
                            (Icon, idx) => (
                                <Icon
                                    key={idx}
                                    className="hover:text-teal-400 transition-all cursor-pointer hover:scale-110"
                                />
                            )
                        )}
                    </div>
                </div>

                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 relative">
                        COMPANY INFO
                        <div className="w-12 h-[2px] bg-teal-400 mt-1"></div>
                    </h3>

                    <ul className="space-y-3">
                        {["About Us", "Resource Center", "Careers", "Instructor", "Become A Teacher"].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-2 hover:text-teal-400 text-lg hover:translate-x-1 transition-all cursor-pointer"
                            >
                                <ArrowRight size={16} /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 relative">
                        USEFUL LINKS
                        <div className="w-12 h-[2px] bg-teal-400 mt-1"></div>
                    </h3>

                    <ul className="space-y-3">
                        {["All Courses", "Digital Marketing", "Design & Branding", "Storytelling & Voice Over", "News & Blogs"].map(
                            (item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 hover:text-teal-400 text-lg hover:translate-x-1 transition-all cursor-pointer"
                                >
                                    <ArrowRight size={16} /> {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Recent Posts */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 relative">
                        RECENT POST
                        <div className="w-12 h-[2px] bg-teal-400 mt-1"></div>
                    </h3>

                    {[1, 2].map((i) => (
                        <div
                            key={i}
                            className="flex gap-4 mb-4 hover:bg-white/5 p-2 rounded-xl transition-all"
                        >
                            <img
                                src="https://i.ibb.co/7CQVJNm/people1.png"
                                className="w-16 h-16 object-cover rounded-lg"
                                alt="post"
                            />

                            <div>
                                <p className="font-medium hover:text-teal-400 cursor-pointer transition">
                                    Where Dreams Find A Home
                                </p>

                                <p className="text-white/70 flex items-center gap-2 text-sm mt-1">
                                    <Calendar size={16} /> 20 April, 2025
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border border-white/30 mt-20 container mx-auto h-[1px]"></div>

            {/* Copyright */}
            <div className="text-center text-white/60 mt-5 ">
                Copyright © 2025 EduCare. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

"use client";

import {
    User, Mail, ChevronDown, MessageSquare, Phone, MapPin, Clock
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-24">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT — FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.01, boxShadow: "0px 10px 25px rgba(0,0,0,0.07)" }}
                    className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-10 shadow-sm transition-all"
                >
                    <h2 className="text-2xl font-semibold text-neutral-900">Leave A Reply</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Fill up the form and send us your message.
                    </p>

                    <form className="mt-10 space-y-7">
                        {/* NAME + EMAIL */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* INPUT */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-12 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                />
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-12 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                />
                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>

                        </div>

                        {/* SUBJECT */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Select Subject"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-12 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                            <ChevronDown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        </div>

                        {/* MESSAGE */}
                        <div className="relative">
                            <textarea
                                placeholder="Message"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-12 h-32 text-gray-700 resize-none focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            ></textarea>
                            <MessageSquare size={18} className="absolute left-4 top-4 text-gray-500" />
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-medium 
                            hover:bg-teal-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Submit Message
                        </button>

                    </form>
                </motion.div>

                {/* RIGHT — INFO CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.01, boxShadow: "0px 12px 30px rgba(0,0,0,0.06)" }}
                    className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-10 shadow-sm transition-all"
                >
                    <h2 className="text-2xl font-semibold text-neutral-900">Office Information</h2>
                    <p className="text-gray-500 text-sm mt-1 mb-10">
                        Reach out to us anytime — we are always here to help.
                    </p>

                    <div className="space-y-10">

                        {/* PHONE */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-5"
                        >
                            <div className="bg-gray-100 p-5 border border-gray-200 rounded-xl">
                                <Phone className="text-teal-600" size={20} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-neutral-900">Phone Number & Email</h4>
                                <p className="text-gray-600 text-sm">(+65) - 48596 - 5789</p>
                                <p className="text-gray-600 text-sm">hello@edecare.com</p>
                            </div>
                        </motion.div>

                        <div className="h-[1px] w-full bg-gray-300"></div>

                        {/* ADDRESS */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-5"
                        >
                            <div className="bg-gray-100 p-5 border border-gray-200 rounded-xl">
                                <MapPin className="text-teal-600" size={20} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-neutral-900">Our Office Address</h4>
                                <p className="text-gray-600 text-sm">2690 Hilton Street Victoria Road,</p>
                                <p className="text-gray-600 text-sm">New York, Canada</p>
                            </div>
                        </motion.div>

                        <div className="h-[1px] w-full bg-gray-300"></div>

                        {/* TIME */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-5"
                        >
                            <div className="bg-gray-100 p-5 border border-gray-200 rounded-xl">
                                <Clock className="text-teal-600" size={20} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-neutral-900">Official Work Time</h4>
                                <p className="text-gray-600 text-sm">Mon–Fri: 09:00 - 20:00</p>
                                <p className="text-gray-600 text-sm">Sat–Sun: 10:30 - 22:00</p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>

        </section>
    );
}

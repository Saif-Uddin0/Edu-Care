"use client"
import React, { useEffect } from "react";
import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

    return (
        <section className="bg-[#EEF3F7]  relative overflow-hidden">
            <div className="container mx-auto px-5 py-15 grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

                {/* Left Content */}
                <div data-aos="fade-down" data-aos-delay="100">
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 bg-white shadow-sm px-5 py-2 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-[#07A698] rounded-full"></span>
                        Welcome to Online Education
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                        Start learning from <br />
                        the world’s <span className="text-[#07A698]">best institutions</span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex items-center gap-6 mb-8">
                        <button className="bg-[#07A698] px-8 py-3 rounded-full text-white font-medium hover:bg-teal-600 transition">
                            Get Started
                        </button>

                        <button className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white shadow rounded-full flex items-center justify-center hover:scale-105 transition">
                                <FaPlay size={16} className="text-[#07A698]" />
                            </div>
                            <span className="font-medium">Watch the video</span>
                        </button>
                    </div>

                    {/* Avatars + Enrollment */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex -space-x-3">
                            <img
                                src="/assets/hero-author-1.png"
                                className="w-10 h-10 rounded-full border-2 border-white" 
                            />
                            <img
                                src="/assets/hero-author-2.png"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <img
                                src="/assets/hero-author-3.png"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <img
                                src="/assets/hero-author-4.png"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                        </div>

                        <p className="text-gray-700">
                            <span className="text-[#07A698] font-semibold">10k</span> Enrolment
                        </p>
                    </div>

                    {/* Explore Text */}
                    <p className="text-xl font-semibold text-gray-800">
                        Explore <span className="text-[#07A698]">1350+</span> Courses within Subject
                    </p>
                    <div className="pt-4 px-15 hidden lg:block">
                        <img src="/assets/hero-shape-2.png" alt="" className="w-15  animate-slide-left-right" />
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative">
                    {/* Main Image */}
                    <div className="rounded-[40px] overflow-hidden shadow-lg relative">
                        <img
                            src="https://img.freepik.com/premium-photo/middle-school-students-doing-task-class_249974-21736.jpg" data-aos="fade-left" data-aos-delay="100"
                            alt="Student"
                            className="w-full h-[420px] object-cover"
                        />
                    </div>

                    {/* Floating Box */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 bg-white shadow-xl px-6 py-4 rounded-2xl w-50 animate-slide-left-right hidden lg:block">
                        <h2 className="text-3xl font-bold text-[#07A698]">256+</h2>
                        <p className="text-black font-semibold text-sm">CRASHED COURSES</p>
                    </div>

                    {/* Dotted Shape */}
                    <div className="absolute right-0 top-0 translate-x-12">
                        <div className="grid grid-cols-6 gap-2 opacity-80">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 bg-[#07A698] rounded-full"
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Curve Line */}

                </div>

            </div>
        </section>
    );
};

export default HeroBanner;

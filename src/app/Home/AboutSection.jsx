"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { PlayCircle, Headphones } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative w-full flex items-center justify-center" data-aos="fade-right">

          {/* Wrapper for two images */}
          <div className="flex  gap-6">

            {/* First image + Support card */}
            <div className="flex flex-col gap-6">

              <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]">
                <img
                  src="https://st.depositphotos.com/1594308/1714/i/450/depositphotos_17140195-stock-photo-diligent-pupils.jpg"
                  alt="Student"
                  fill
                  className="object-cover rounded-2xl shadow-lg border"
                />
              </div>

              {/* Support card */}
              <div className="bg-[#07A698] shadow-xl rounded-tr-3xl rounded-bl-3xl px-5 py-4 flex items-center gap-3 hover:scale-105 transition duration-300 w-fit">
                <Headphones className="text-white w-7 h-7" />
                <div>
                  <p className="text-white text-sm">Online Support</p>
                  <p className="text-white text-lg font-bold">+258 152 3659</p>
                </div>
              </div>
            </div>

            {/* Second image */}
            <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] mt-10">
              <img
                src="https://thumbs.dreamstime.com/b/group-school-kids-teacher-classroom-education-elementary-learning-people-concept-talking-47874479.jpg"
                alt="Classroom"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

          </div>

          {/* Play Button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl p-4 rounded-full hover:bg-[#07A698] transition hover:scale-110 duration-300 z-20">
            <PlayCircle className="w-10 h-10 text-[#07A698] hover:text-white" />
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">

          <button className="bg-teal-100 text-[#07A698] px-4 py-2 rounded-full mb-5 font-semibold text-sm">
            Get More About Us
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
            Over 10 Years in Distant Learning <br />
            for Skill Development
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            We empower learners with expert-led online courses designed to build real-world
            skills. Join thousands of students gaining quality education from anywhere.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-8">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-4 rounded-full shadow-sm border">
                <img src="/assets/about-1.png" width={40} height={40} alt="Icon" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#07A698]">9.5k+</p>
                <p className="text-gray-600 text-sm">Active students worldwide</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-4 rounded-full shadow-sm border">
                <img src="/assets/about-2.png" width={40} height={40} alt="Icon" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#07A698]">6.7k+</p>
                <p className="text-gray-600 text-sm">Completed full courses</p>
              </div>
            </div>

          </div>

          <button className="bg-[#07A698] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#07A698] transition hover:scale-105 duration-300">
            Start Free Trial
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;

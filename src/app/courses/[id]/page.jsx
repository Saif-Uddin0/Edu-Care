"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BookOpen,
  User2,
  Star,
  Clock,
  Layers,
} from "lucide-react";
import { FaShare } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        setCourse(found);
      });
  }, [id]);

  if (!course) {
    return <p className="p-10 text-xl text-center">Loading...</p>;
  }

  return (
    <motion.div
      className="py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ----------------- LEFT MAIN CONTENT ----------------- */}
        <motion.div
          className="lg:col-span-2 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          whileHover={{ y: -2 }}
        >
          {/* Image */}
          <div className="overflow-hidden p-5">
            <img
              src={course.image}
              className="w-full h-[380px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Category */}
          <div className="mt-6 flex items-center gap-3 py-2 px-5">
            <span className="px-4 py-1 bg-[#07A698] text-white rounded-full text-sm">
              {course.category}
            </span>
            <span className="px-4 py-1 bg-[#07A698] text-white rounded-full text-sm">
              {course.level || "Beginner"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-snug py-2 px-5">
            {course.title}
          </h1>

          {/* Instructor + Meta info */}
          <div className="flex flex-wrap items-center gap-5 mt-4 text-gray-600 py-2 px-5">
            <p className="flex items-center gap-2 hover:text-teal-600 transition">
              <User2 size={18} /> {course.instructor}
            </p>
            <p className="flex items-center gap-2 hover:text-teal-600 transition">
              <Layers size={18} /> {course.category}
            </p>
            <p className="flex items-center gap-2 hover:text-teal-600 transition">
              <Clock size={18} /> {course.date}
            </p>
            <p className="flex items-center gap-2 hover:text-yellow-500 transition">
              <Star size={18} className="text-yellow-500" /> {course.rating} ({course.students} students)
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-8 border border-gray-200 flex gap-8 text-md font-medium text-gray-600 bg-gray-100 px-5">
            {["Overview", "Curriculum", "Instructor", "Reviews"].map((tab, idx) => (
              <button
                key={idx}
                className="py-3 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-400"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Description Box */}
          <div className="mt-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
          </div>

          {/* What you will learn */}
          <div className="mt-5 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">What Will You Learn?</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Quickly synergize cutting-edge scenarios and professional results...
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              {course.learn?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 hover:text-teal-600 transition-colors"
                >
                  <span className="text-primary text-xl">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* --------------- RIGHT SIDEBAR --------------- */}
        <motion.div
          className="lg:col-span-1 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Price Box */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-3xl font-bold">${course.price}</h3>

            <button className="w-full mt-5 py-3 bg-[#07A698] text-white rounded-xl font-semibold hover:bg-teal-700 transition">
              Add To Cart
            </button>

            <button className="w-full mt-3 py-3 border border-teal-400 text-[#07A698] rounded-xl font-semibold hover:bg-teal-50 transition">
              Buy Now
            </button>
          </div>

          {/* Course Info Box */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Course Information</h2>

            <div className="space-y-4 text-gray-600 text-sm">
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Lectures:</strong> {course.lessons}</p>
              <p><strong>Students:</strong> {course.students}</p>
              <p><strong>Language:</strong> {course.language || "English"}</p>
              <p><strong>Duration:</strong> {course.duration || "10-20 Hours"}</p>
              <p><strong>Quiz:</strong> {course.quiz || "04"}</p>
            </div>

            <button className="w-full mt-5 py-3 bg-gray-200 text-[#07A698] rounded-xl font-semibold hover:bg-teal-100 flex items-center justify-center gap-1.5 transition">
              <FaShare /> Share This Course
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseDetails;

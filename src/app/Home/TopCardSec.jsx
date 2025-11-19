"use client";

import { Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "../courses/shared/CourseCard";
import Loader from "@/components/Loader";

const TopCardSec = () => {
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/data/courses.json").then((res) => res.json()),
      fetch("/data/categories.json").then((res) => res.json()),
    ])
      .then(([courseData, categoryData]) => {
        setCourses(courseData);
        setFiltered(courseData.slice(0, 3));
        setCategories([{ id: 0, name: "All", slug: "all" }, ...categoryData]);
      })
      .catch((err) => console.error("Error loading data:", err))
      .finally(() => setLoading(false));
  }, []);

  // Filter Courses
  const handleFilter = (slug) => {
    setActive(slug);
    if (slug === "all") {
      setFiltered(courses.slice(0, 3));
    } else {
      const result = courses.filter((item) => item.categorySlug === slug);
      setFiltered(result);
    }
  };

  if (loading) return <Loader fullScreen />;

  return (
    <section className="w-full py-20">
      <div className="container mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white px-3 py-1 text-xs rounded-full shadow-sm"
        >
          <span className="bg-teal-50 p-1.5 rounded-full text-teal-600 border border-teal-100">
            <Zap size={18} />
          </span>
          <span className="text-black font-semibold">Top Class Courses</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 mt-6 leading-snug"
        >
          Explore Featured Courses
        </motion.h1>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => handleFilter(cat.slug)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat.slug
                  ? "bg-[#07A698] text-white border-[#07A698] shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#07A698] hover:text-[#07A698]"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-10"
        >
          <AnimatePresence mode="wait">
            {filtered.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#07A698] transition-all duration-300"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCardSec;

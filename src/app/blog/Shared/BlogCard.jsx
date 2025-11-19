"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

export default function BlogCard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => {
        console.error("Error loading blogs:", err);
        setError("Failed to load blogs.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader fullScreen />;
  if (error)
    return (
      <div className="text-center text-red-500 py-10 text-lg font-medium">
        {error}
      </div>
    );

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-neutral-800 mb-10"
      >
        Latest Blog Posts
      </motion.h2>

      {/* Animated grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Blog Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5 space-y-2 text-left">
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag size={14} /> {blog.category}
                </span>
              </div>

              <h3 className="font-semibold text-[18px] leading-snug text-gray-900">
                {blog.title}
              </h3>

              <button className="mt-3 border border-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition flex gap-2 items-center font-medium">
                Read More{" "}
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-black"
                >
                  <FaArrowRight />
                </motion.span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

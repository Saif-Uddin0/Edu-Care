"use client";

import { Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import Loader from "@/components/Loader";

const CardSection = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data/courses.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch courses");
                return res.json();
            })
            .then((data) => setCourses(data))
            .catch((err) => {
                console.error("Error loading courses:", err);
                setError("Failed to load courses. Please try again later.");
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
        <section className="w-full py-20">
            <div className="container mx-auto text-center">
                {/* Section Header */}
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

                {/* Courses Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-10"
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <CourseCard course={course} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CardSection;

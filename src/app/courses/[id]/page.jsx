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
        return <p className="p-10 text-xl">Loading...</p>;
    }

    return (
        <div className="py-10 ">

            <div className="border border-gray-100 container mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* ----------------- LEFT MAIN CONTENT ----------------- */}
                <div className="lg:col-span-2 border border-gray-200">

                    {/* Image */}
                    <div className=" overflow-hidden p-5">
                        <img
                            src={course.image}
                            className="w-full h-[380px] object-cover rounded-xl "
                        />
                    </div>

                    {/* Category */}
                    <div className="">
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
                            <p className="flex items-center gap-2">
                                <User2 size={18} />
                                {course.instructor}
                            </p>

                            <p className="flex items-center gap-2">
                                <Layers size={18} />
                                {course.category}
                            </p>

                            <p className="flex items-center gap-2">
                                <Clock size={18} />
                                {course.date}
                            </p>

                            <p className="flex items-center gap-2">
                                <Star size={18} className="text-yellow-500" />
                                {course.rating} ({course.students} students)
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="mt-8 border border-gray-200 flex gap-8 text-md font-medium text-gray-600 bg-gray-100  px-5">
                            <button className="py-3 border-b-2 border-teal-400 text-primary">
                                Overview
                            </button>
                            <button className="py-3 hover:text-primary transition">
                                Curriculum
                            </button>
                            <button className="py-3 hover:text-primary transition">
                                Instructor
                            </button>
                            <button className="py-3 hover:text-primary transition">
                                Reviews
                            </button>
                        </div>

                        {/* Description Box */}
                        <div className="mt-8 bg-white rounded-xl p-8 ">
                            <h2 className="text-xl font-semibold mb-4">Description</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {course.description}
                            </p>
                        </div>

                        {/* What you will learn */}
                        <div className="mt-5 bg-white  rounded-xl p-8 ">
                            <h2 className="text-xl font-semibold mb-4">
                                What Will You Learn?
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or sources. Energistically reinvent distinctive value via parallel services extensive paradigms cross-unit manufactured products.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                {course.learn?.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary text-xl">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* --------------- RIGHT SIDEBAR --------------- */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Price Box */}
                    <div className="border border-gray-200 rounded-xl p-6  bg-white">
                        <h3 className="text-3xl font-bold">${course.price}</h3>

                        <button className="w-full mt-5 py-3 bg-[#07A698] text-white rounded-xl font-semibold hover:bg-primary/90">
                            Add To Cart
                        </button>

                        <button className="w-full mt-3 py-3 border border-teal-400 text-primary rounded-xl font-semibold hover:bg-primary/10">
                            Buy Now
                        </button>
                    </div>

                    {/* Course Info Box */}
                    <div className="border border-gray-200 rounded-xl p-6 bg-white">
                        <h2 className="text-xl font-semibold mb-4">Course Information</h2>

                        <div className="space-y-4 text-gray-600 text-sm">
                            <p><strong>Instructor:</strong> {course.instructor}</p>
                            <p><strong>Lectures:</strong> {course.lessons}</p>
                            <p><strong>Students:</strong> {course.students}</p>
                            <p><strong>Language:</strong> {course.language || "English"}</p>
                            <p><strong>Duration:</strong> {course.duration || "10-20 Hours"}</p>
                            <p><strong>Quiz:</strong> {course.quiz || "04"}</p>
                        </div>

                        <button className="w-full mt-5 py-3 bg-gray-200 text-[#07A698] rounded-xl font-semibold hover:bg-emerald-200 flex items-center justify-center gap-1.5">
                            <FaShare></FaShare> Share This Course
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

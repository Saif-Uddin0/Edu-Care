import Link from "next/link";
import React from "react";
import { BookOpen, Users, Eye } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden 
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover rounded-xl"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm 
                         text-[#07A698] text-xs font-semibold px-3 py-1 
                         rounded-full ">
          {course.category}
        </span>
      </div>

      {/* Body */}
      <div className="py-5">

        {/* Title */}
        <h2 className="text-lg text-start font-semibold leading-snug text-gray-800 line-clamp-2">
          {course.title}
        </h2>

        {/* Course Stats */}
        <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-4">
          <p className="flex items-center gap-1">
            <BookOpen size={16} /> {course.lessons} Lessons
          </p>

          <p className="flex items-center gap-1">
            <Users size={16} /> {course.students} Students
          </p>

          <p className="flex items-center gap-1">
            <Eye size={16} /> {course.views} Views
          </p>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-4 mt-8">
          <img
            src={course.I_image}
            alt={course.instructor}
            className="w-11 h-11 rounded-full border"
          />
          <div>
            <p className="font-semibold text-gray-700">{course.instructor}</p>
            <p className="text-teal-600 text-sm">Instructor</p>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-6  border-t border-gray-200">
          <h3 className="text-xl mt-3 font-bold text-gray-900">
            ${course.price}.00
          </h3>

          <Link
            href={`/courses/${course.id}`}
            className="px-3 mt-3 py-1 rounded-full border border-[#07A698]
                       font-medium text-[#07A698] 
                       transition-all duration-300 text-sm hover:text-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

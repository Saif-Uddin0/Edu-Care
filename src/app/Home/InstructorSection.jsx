'use client'; 

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react'; // Using Zap for the "Our Instructors" tag icon

// --- 1. Data Definitions ---
const instructorData = [
  {
    name: 'Zaramane Mass Likan',
    title: 'Online Teachers',
    imageSrc: '/assets/team-1.png', // Replace with actual image path
  },
  {
    name: 'Amelia Grace Lily',
    title: 'Online Teachers',
    imageSrc: '/assets/team-2.png',
  },
  {
    name: 'Mason Logan Dee',
    title: 'Online Teachers',
    imageSrc: '/assets/team-3.png',
  },
  {
    name: 'Isabella Charlotte',
    title: 'Online Teachers',
    imageSrc: '/assets/team-4.png',
  },
];



/**
 * @param {object} props
 * @param {string} props.name 
 * @param {string} props.title 
 * @param {string} props.imageSrc 
 */
const InstructorCard = ({ name, title, imageSrc }) => {
  return (
    <motion.div
      className=" bg-white rounded-xl shadow-lg border border-gray-100 cursor-pointer"
      // Framer Motion hover effect: Lift and add a deeper shadow
      whileHover={{ 
        y: -5, // Slight upward lift
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Image Container */}
      <div className="rounded-tr-lg rounded-tl-lg overflow-hidden ">
        <img
          src={imageSrc}
          alt={`Profile of ${name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className=" py-6 px-5  text-center">
        <h3 className="text-xl font-bold text-gray-900 leading-snug">{name}</h3>
        <p className="text-sm font-medium text-teal-600 mt-1">{title}</p>
      </div>
    </motion.div>
  );
};



const InstructorSection = () => {

  return (
    <section className="container mx-auto py-15 bg-gradient-to-t from-[#F0FCFF] to-[#D7EBFF] md:py-32">
      <div className="max-w-6xl  mx-auto px-6 lg:px-8">
        

        <div className="flex justify-center mb-6">
          <div className="flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
            <Zap className="w-4 h-4 mr-2 text-teal-500" />
            Our Instructors
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-16">
          Explore Our World`s Best Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorData.map((instructor, index) => (
            <InstructorCard
              key={index}
              name={instructor.name}
              title={instructor.title}
              imageSrc={instructor.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
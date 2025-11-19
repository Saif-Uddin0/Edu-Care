'use client'; 

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Bolt } from 'lucide-react';

// --- 1. Data Definitions ---
const faqData = [
  {
    question: 'What courses do you offer?',
    answer:
      'We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.',
    defaultOpen: true, 
  },
  {
    question: 'How Can Teachers Effectively Manage a Diverse Classroom?',
    answer:
    'Effective management of a diverse classroom involves strategies like differentiated instruction, culturally responsive teaching, fostering an inclusive environment, and using varied assessment methods to cater to individual student needs and learning styles.',
  },
  {
    question: 'How Is Special Education Delivered In Inclusive Classrooms?',
    answer:
      'Special education in inclusive classrooms is delivered through collaboration between general and special education teachers, individualized education programs (IEPs), accommodations, modifications, and support services to ensure all students access the curriculum and achieve their potential.',
  },
];

const students = [
  '/assets/hero-author-1.png', 
  '/assets/hero-author-2.png', 
  '/assets/hero-author-3.png', 
  '/assets/hero-author-4.png',
];



const StudentAvatars = () => {
  return (
    <div className="absolute bottom-2 left-4 p-4 bg-white rounded-xl shadow-2xl flex items-center space-x-3 z-10"> 
      <div className="flex -space-x-2">
        {students.map((src, index) => (
          <img
            key={index}
            className="w-10 h-10 rounded-full border-2 border-white object-cover" 
            src={src}
            alt={`Student ${index + 1}`}
          />
        ))}
        <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
          25+
        </div>
      </div>
      <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">Total Students</span>
    </div>
  );
};


const AccordionItem = ({ index, question, answer, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-start w-full text-left py-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Question Index and Text */}
        <span className="flex items-start">
            <span className="flex-shrink-0 text-teal-600 mr-4 pt-1 font-bold">0{index + 1}.</span>
            <span className="font-semibold text-lg text-gray-800 hover:text-teal-600 transition-colors duration-200">
                {question}
            </span>
        </span>


        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 pl-10 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- 3. Main Component ---

const FAQSection = () => {
  return (
    <section className="py-16 bg-white md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">

        {/* Left Section: Image and Student Avatars */}
        <div className="relative flex-1 flex justify-center lg:justify-start w-full lg:w-auto">
          {/* ACCURATE CONTAINER SIZE: Use a max-width and defined aspect ratio */}
          <div className="relative h-130 w-100  rounded-xl overflow-hidden shadow-xl"> 
            
            {/* Main image: Set to fill the container (w-full h-full) */}
            <img
              src="/assets/faq-img.png" 
              alt="Student working at a desk"
              className="w-full h-full" 
            />
            <StudentAvatars />
          </div>
        </div>

        {/* Right Section: Title and Accordion */}
        <div className="flex-1 w-full lg:w-auto">
          {/* Tag: "Most Asked Question" */}
          <div className="flex items-center text-teal-600 font-semibold mb-4 text-sm uppercase tracking-wider">
            <Bolt className="w-5 h-5 mr-2" />
            Most Asked Question
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-10">
            Powerful Dashboard And High Performance Framework
          </h2>

          {/* Accordion Container */}
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                defaultOpen={item.defaultOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
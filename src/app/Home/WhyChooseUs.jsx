"use client"
import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, CreditCard, UsersRound, Zap } from "lucide-react";

const steps = [
    {
        title: "Book Free Consultation",
        img: "/assets/promo-img-1.png",
        icon: <UsersRound size={28} />,
        desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills."
    },
    {
        title: "Make Easy Payment",
        img: "/assets/promo-img-2.png",
        icon: <CreditCard size={28} />,
        desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills."
    },
    {
        title: "Schedule First Lesson",
        img: "/assets/promo-img-3.png",
        icon: <CalendarCheck size={28} />,
        desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills."
    }
];

// Parent animation (stagger)
const containerVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

// Each card animation
const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const WhyChooseUs = () => {
    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat py-20"
            style={{
                backgroundImage: "url('/assets/request-bg.png')",
            }}
        >
            {/* Heading */}
            <motion.div
                className="container mx-auto  text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center gap-2 border border-teal-300/30 bg-white px-5 py-2 rounded-full shadow-sm">
                    <span className="text-primary font-semibold flex items-center gap-2">
                        <span className="bg-teal-50 p-1.5 rounded-full text-teal-600">
                            <Zap size={20} />
                        </span>
                        Why Choose Us
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-7">
                    Explore Yourself All Over The World
                </h1>
            </motion.div>

            {/* Steps with stagger scroll animation */}
            <motion.div
                className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-10"
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {steps.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariant}
                        className="
        text-center relative group transition-all 
        border-y border-white/20 lg:border-x 
        p-6 rounded-2xl backdrop-blur-sm hover:scale-105 duration-500
    "
                    >
                        {/* Icon Always on Image */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-teal-600 p-4 rounded-full shadow-lg text-white">
                                {item.icon}
                            </div>
                        </div>

                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md mx-auto mt-6 transition-transform hover:scale-105 duration-500"
                        />

                        <h3 className="text-lg font-bold text-white mt-6">{item.title}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed mt-3">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default WhyChooseUs;

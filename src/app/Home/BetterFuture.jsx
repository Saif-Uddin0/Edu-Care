'use client';

import { motion } from 'framer-motion';
import { Zap, BadgeCheck, Lightbulb } from 'lucide-react';

// --- 1. Data Definitions ---
const featureData = [
    {
        icon: BadgeCheck,
        title: 'Master Certified Trainer',
        description: 'This includes offering personalized feedback, fostering a sense of community through discussion.',
    },
    {
        icon: Lightbulb,
        title: 'Coach Certification Program',
        description: 'This includes offering personalized feedback, fostering a sense of community through discussion.',
    },
];

// Framer Motion Variants for a simple staggered entrance effect
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


// --- 2. Internal Sub-Components ---

/**
 * Feature Card component with icon and description.
 */
const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        variants={itemVariants}
        className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
    >
        <div className="flex items-center space-x-4">
            {/* Icon with light teal background circle */}
            <div className="p-3 rounded-full bg-teal-50 border border-teal-200">
                <Icon className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600 text-sm">{description}</p>
    </motion.div>
);

/**
 * The complex layered image gallery seen on the left.
 */
const ImageGallery = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-xl aspect-[5/4] lg:max-w-none lg:w-full lg:h-[600px] flex items-center justify-center"
    >
        {/* Background blob/shape (uses a slight rotation for visual interest) */}
        <div className="absolute inset-0 z-0 border-1 border-teal-500 rounded-[40px] rotate-3 translate-x-4 translate-y-4 hidden lg:block" />

        {/* Large Image (bottom left) */}
        <div className="absolute w-[65%] h-[70%] top-1/5 left-0 z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
                src="/assets/content-img-1.png"
                alt="Students collaborating on a laptop"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Medium Image (top right) */}
        <div className='bg-white'>
            <div className="absolute w-[50%] h-[40%] top-[5%] right-0 z-20 rounded-xl overflow-hidden shadow-xl">
                <img
                    src="/assets/content-img-2.png"
                    alt="Group discussion with a trainer"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Small Image (bottom right) */}
            <div className="absolute w-[50%] h-[40%] bottom-0 right-[5%] z-20 rounded-xl overflow-hidden shadow-xl">
                <img
                    src="/assets/content-img-3.png"
                    alt="Students working on laptops"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </motion.div>
);


// --- 3. Main Component ---

const BetterFuture = () => {
    return (
        <section className="py-20 bg-white md:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Image Gallery */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <ImageGallery />
                    </div>

                    {/* Right Side: Content and Feature Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        {/* Tag */}
                        <motion.div variants={itemVariants} className="flex items-center text-teal-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                            <Zap className="w-4 h-4 mr-2" />
                            How We Start Journey
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
                            We Care About Your Life For Better Future
                        </motion.h2>

                        {/* Introductory Paragraph */}
                        <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-10 max-w-lg">
                            This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.
                        </motion.p>

                        {/* Feature Cards Grid */}
                        <div className="space-y-6">
                            {featureData.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BetterFuture;
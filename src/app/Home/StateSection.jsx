'use client';
import { motion } from 'framer-motion';
import { Users, BookOpen, HeartHandshake, Star } from 'lucide-react';
// Note: We no longer need to import StatCard if all the logic is here.

// Data array to drive the component, making it easy to update or extend
const statsData = [
  {
    value: '3,192+',
    label: 'Successfully Trained',
    icon: Users, // Lucide Icon: Users
  },
  {
    value: '15,485+',
    label: 'Classes Completed',
    icon: BookOpen, // Lucide Icon: BookOpen
  },
  {
    value: '97.55%',
    label: 'Satisfaction Rate',
    icon: HeartHandshake, // Lucide Icon: HeartHandshake
  },
  {
    value: '97.55%',
    label: 'Overall Rating',
    icon: Star, // Lucide Icon: Star
  },
];

const StatsSection = () => {
  return (
    <section className="p-8 bg-[#07A698] md:p-16 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Tailwind Grid: 1 column on mobile, 2 columns on medium, 4 columns on large */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => {
            // Destructure the properties from the current 'stat' object
            const { value, label, icon: Icon } = stat; 

            return (
              <motion.div
                key={index} // Always include a key when mapping
                className="flex flex-col items-center justify-center px-30 py-8 text-white  rounded-lg  min-h-[200px] cursor-default"
                // Framer Motion props for the hover effect
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="mb-4 text-white">
                  {/* Render the destructured Icon component */}
                  <Icon size={48} strokeWidth={1.5} /> 
                </div>

                <p className="text-xl font-extrabold tracking-tight md:text-2xl">
                  {/* Use the destructured value */}
                  {value} 
                </p>

                <p className="mt-2 text-xs font-light tracking-tight text-center uppercase opacity-80 md:text-base">
                  {/* Use the destructured label */}
                  {label} 
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import React from "react";
import {
    Briefcase,
    Palette,
    UserCheck,
    HeartPulse,
    Megaphone,
    Landmark,
    Cpu,
    Camera,
    Database,
    Rocket,
    Code,
    Building2,
    Gamepad2,
    Zap,
} from "lucide-react";

const categories = [
    { name: "Business Management", icon: <Briefcase size={20} /> },
    { name: "Arts & Design", icon: <Palette size={20} /> },
    { name: "Personal Development", icon: <UserCheck size={20} /> },
    { name: "Health & Fitness", icon: <HeartPulse size={20} /> },
    { name: "Marketing", icon: <Megaphone size={20} /> },
    { name: "Business & Finance", icon: <Landmark size={20} /> },
    { name: "Computer Science", icon: <Cpu size={20} /> },
    { name: "Video & Photography", icon: <Camera size={20} /> },
    { name: "Data Science", icon: <Database size={20} /> },
    { name: "IT Startup Agency", icon: <Rocket size={20} /> },
    { name: "Software Company", icon: <Code size={20} /> },
    { name: "High-Tech Company", icon: <Building2 size={20} /> },
    { name: "3D Gaming Studio", icon: <Gamepad2 size={20} /> },
];

const CategorySection = () => {
    return (
        <div className="w-full py-20 bg-[#F2F4F7]">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">

                <div className="inline-flex items-center gap-2 border border-teal-300/30 bg-white px-5 py-2 rounded-full">
                    <span className="text-primary font-semibold flex items-center gap-2">
                        <span className="bg-teal-50 p-1.5 rounded-full text-teal-600">
                            <Zap size={20} />
                        </span>
                        Our Course Categories
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mt-7">
                    Select The Industry Where You Want To Learn
                </h1>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-5 px-4 max-w-6xl mx-auto mt-12">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="
                                flex items-center gap-3 bg-white shadow-sm border border-transparent
                                transition-all duration-300 ease-out px-6 py-3.5 rounded-full cursor-pointer
                                hover:shadow-xl hover:-translate-y-1 hover:scale-105
                                hover:bg-teal-600 group
                            "
                        >
                            <div className="
                                text-teal-500 bg-gray-100 rounded-full p-1.5 
                                transition-all duration-300 group-hover:bg-white group-hover:text-teal-700
                            ">
                                {cat.icon}
                            </div>

                            <span className="
                                font-semibold text-gray-700 text-sm transition-all duration-300
                                group-hover:text-white
                            ">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CategorySection;

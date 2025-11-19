"use client"
import React from 'react';

const Banner = () => {
    return (
        <div className='relative bg-no-repeat h-[300px] bg-right ' style={{backgroundColor: "#F3F7FB",
            backgroundImage :`linear-gradient(to right, rgba(243,247,251,1), rgba(243,247,251,0)), url('assets/page-header-bg.png')`,
           
        }}>
            <div className='absolute bottom-2 left-3 w-40 h-40'>
                <img src="/assets/page-header-shape-1.png" alt="" />
            </div>
            <div className='absolute flex flex-col text-center top-32 left-36'>
                <h1 className='text-2xl font-extrabold'>Course Page</h1>
                <p className='flex items-center justify-center gap-2 text-sm font-semibold'><span className='text-gray-800'>Home /</span> <span className='text-teal-600'>Course Page</span></p>
            </div>
            
        </div>
    );
};

export default Banner;
"use client";

import React from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ size = 100, color = "#39B8AD", fullScreen = false }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "h-screen w-full" : "py-10"
      }`}
    >
      <HashLoader size={size} color={color} speedMultiplier={1.2} />
    </div>
  );
};

export default Loader;

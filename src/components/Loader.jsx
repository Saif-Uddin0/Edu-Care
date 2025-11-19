"use client";

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ size = 60, color = "#0d9488", fullScreen = false }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "h-screen w-full" : "py-10"
      }`}
    >
      <ClipLoader size={size} color={color} speedMultiplier={1.2} />
    </div>
  );
};

export default Loader;

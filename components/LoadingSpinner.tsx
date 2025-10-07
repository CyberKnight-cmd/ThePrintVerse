"use client";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-blue-500 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-pulse">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            THE PRINT<span className="text-yellow-300"> VERSE</span>
          </h1>
        </div>
        
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          <div className="w-12 h-12 border-4 border-transparent border-t-yellow-300 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-white/80 mt-6 text-lg animate-pulse">
          Loading your printing experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
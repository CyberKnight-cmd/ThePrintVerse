// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Dynamic background for entire section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600/80 to-blue-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/20 to-white/10 animate-pulse"></div>
      
      {/* Floating particles across entire section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-3 h-3 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-blue-300/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-blue-300/25 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="text-center lg:text-left space-y-4 lg:space-y-6 order-2 lg:order-1 flex flex-col justify-center">
            <ScrollReveal>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight">
                PRINT YOUR MEMORIES IN STYLE
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                Transform your favorite photos into stunning metal posters, custom magnets, and elegant frames. 
                Premium quality printing that brings your memories to life with vibrant colors and lasting durability.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="bg-white text-blue-600 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  START PRINTING
                </button>
                <button className="bg-white text-blue-600 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  VIEW GALLERY
                </button>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={900}>
            <div className="flex justify-center lg:justify-center order-1 lg:order-2">
              <div className="relative p-4 sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-blue-900/40 to-black/50 rounded-xl animate-pulse"></div>
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
                  <div className="absolute top-8 right-4 w-1 h-1 bg-blue-300/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
                <div className="relative z-10">
                  <Image
                    src="/logo.png"
                    width={400}
                    height={400}
                    alt="ThePrintVerse Logo"
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-contain hover:animate-float drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;

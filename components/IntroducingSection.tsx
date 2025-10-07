// *********************
// Role of the component: IntroducingSection with the text "Welcome to The Print Verse"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Welcome to The Print Verse" and button
// *********************

import Link from "next/link";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const IntroducingSection = () => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Smooth gradient transition from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-500"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/20 to-white/15" style={{animation: 'pulse 8s ease-in-out infinite'}}></div>
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-2 h-2 bg-white/15 rounded-full" style={{animation: 'float 12s ease-in-out infinite'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/10 rounded-full" style={{animation: 'float 15s ease-in-out infinite', animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center space-y-6 lg:space-y-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="text-white">WELCOME TO </span>
              <span className="text-white">THE PRINT</span>
              <span className="text-blue-200"> VERSE</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-white text-base sm:text-lg lg:text-xl font-semibold">
                  Custom printing solutions for your memories.
                </p>
                <p className="text-white text-base sm:text-lg lg:text-xl font-semibold">
                  Metal posters, magnets, and frames that last forever.
                </p>
              </div>
              <Link 
                href="/shop" 
                className="inline-block text-blue-600 bg-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:bg-gray-100 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;

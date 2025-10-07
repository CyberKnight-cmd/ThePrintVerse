// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************

import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";
import ScrollReveal from "./ScrollReveal";

const CategoryMenu = () => {
  return (
    <div className="relative py-10 sm:py-12 lg:py-16 overflow-hidden">
      {/* Smooth gradient continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-300/15 to-white/20" style={{animation: 'pulse 10s ease-in-out infinite'}}></div>
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-20 w-1.5 h-1.5 bg-white/10 rounded-full" style={{animation: 'float 14s ease-in-out infinite'}}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/8 rounded-full" style={{animation: 'float 16s ease-in-out infinite', animationDelay: '6s'}}></div>
      </div>
      
      <div className="relative z-10">
        <ScrollReveal>
        <Heading title="BROWSE CATEGORIES" />
      </ScrollReveal>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 mt-6 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {categoryMenuList.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <CategoryItem title={item.title} href={item.href}>
                <Image 
                  src={item.src} 
                  width={48} 
                  height={48} 
                  alt={item.title}
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                />
              </CategoryItem>
            </ScrollReveal>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;

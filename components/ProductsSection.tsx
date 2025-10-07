// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductCarousel from "./ProductCarousel";
import Heading from "./Heading";
import apiClient from "@/lib/api";

const ProductsSection = async () => {
  let products = [];
  
  try {
    // sending API request for getting all products
    const data = await apiClient.get("/api/products");
    
    if (!data.ok) {
      console.error('Failed to fetch products:', data.statusText);
      products = [];
    } else {
      const result = await data.json();
      // Ensure products is an array
      products = Array.isArray(result) ? result : [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }

  return (
    <div className="relative overflow-hidden">
      {/* Smooth gradient continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-800"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-400/20 to-white/15" style={{animation: 'pulse 12s ease-in-out infinite'}}></div>
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 right-16 w-2 h-2 bg-white/12 rounded-full" style={{animation: 'float 18s ease-in-out infinite'}}></div>
        <div className="absolute bottom-28 left-1/5 w-1.5 h-1.5 bg-white/10 rounded-full" style={{animation: 'float 20s ease-in-out infinite', animationDelay: '8s'}}></div>
      </div>
      
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 border-t-4 border-white/20">
        <Heading title="FEATURED PRODUCTS" />
        <div className="mt-8 sm:mt-12">
          <ProductCarousel products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

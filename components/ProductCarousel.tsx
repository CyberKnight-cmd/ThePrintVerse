"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductItem from "./ProductItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  price: number;
  mainImage: string;
  slug: string;
  rating: number;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 products
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 products
      } else {
        setItemsPerView(1); // Mobile: 1 product
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || products.length === 0) return;

    const maxIndex = Math.max(0, products.length - itemsPerView);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length, itemsPerView]);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center text-white py-10">
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex-shrink-0 px-2 sm:px-4 py-6 ${
                itemsPerView === 1 ? 'w-full' : 
                itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
              }`}
            >
              <div className="max-w-sm mx-auto">
                <ProductItem product={product} color="white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous product"
      >
        <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next product"
      >
        <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
};

export default ProductCarousel;
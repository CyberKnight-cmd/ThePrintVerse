// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";
import { sanitize } from "@/lib/sanitize";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="group relative backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 animate-fade-in hover:shadow-glow">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="overflow-hidden rounded-lg mb-4">
          <Image
            src={
              product.mainImage
                ? `/${product.mainImage}`
                : "/product_placeholder.jpg"
            }
            width="0"
            height="0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            alt={sanitize(product?.title) || "Product image"}
          />
        </div>
      </Link>
      
      <div className="space-y-2 sm:space-y-3">
        <Link
          href={`/product/${product.slug}`}
          className={`block text-sm sm:text-base lg:text-lg font-medium uppercase text-center transition-colors hover:opacity-80 ${
            color === "black"
              ? "text-black dark:text-white"
              : "text-white"
          }`}
        >
          {sanitize(product.title)}
        </Link>
        
        <p
          className={`text-base sm:text-lg font-semibold text-center ${
            color === "black"
              ? "text-black dark:text-white"
              : "text-white"
          }`}
        >
          ${product.price}
        </p>

        <div className="flex justify-center">
          <ProductItemRating productRating={product?.rating} />
        </div>
        
        <Link
          href={`/product/${product?.slug}`}
          className="block w-full py-2 sm:py-3 px-4 text-xs sm:text-sm lg:text-base uppercase bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-300/50 font-bold text-blue-600 dark:text-blue-400 text-center rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 min-h-[44px] flex items-center justify-center hover:shadow-lg"
        >
          View product
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

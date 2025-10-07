// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Products params={params} searchParams={searchParams} />
// Input parameters: { params, searchParams }: { params: { slug?: string[] }, searchParams: { [key: string]: string | string[] | undefined } }
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import apiClient from "@/lib/api";

const Products = async ({ params, searchParams }: { params: { slug?: string[] }, searchParams: { [key: string]: string | string[] | undefined } }) => {
  // getting all data from URL slug and preparing everything for sending GET request
  const inStockNum = searchParams?.inStock === "true" ? 1 : 0;
  const outOfStockNum = searchParams?.outOfStock === "true" ? 1 : 0;
  const page = searchParams?.page ? Number(searchParams?.page) : 1;

  let stockMode: string = "lte";
  
  // preparing inStock and out of stock filter for GET request
  // If in stock checkbox is checked, stockMode is "equals"
  if (inStockNum === 1) {
    stockMode = "equals";
  }
 // If out of stock checkbox is checked, stockMode is "lt"
  if (outOfStockNum === 1) {
    stockMode = "lt";
  }
   // If in stock and out of stock checkboxes are checked, stockMode is "lte"
  if (inStockNum === 1 && outOfStockNum === 1) {
    stockMode = "lte";
  }
   // If in stock and out of stock checkboxes aren't checked, stockMode is "gt"
  if (inStockNum === 0 && outOfStockNum === 0) {
    stockMode = "gt";
  }

  let products = [];

  try {
    // sending API request with filtering, sorting and pagination for getting all products
    const data = await apiClient.get(`/api/products?filters[price][$lte]=${
        searchParams?.price || 3000
      }&filters[rating][$gte]=${
        Number(searchParams?.rating) || 0
      }&filters[inStock][$${stockMode}]=1&${
        params?.slug?.length! > 0
          ? `filters[category][$equals]=${params?.slug}&`
          : ""
      }sort=${searchParams?.sort}&page=${page}`
    );

    if (!data.ok) {
      console.error('Failed to fetch products:', data.statusText);
      products = [];
    } else {
      const result = await data.json();
      products = Array.isArray(result) ? result : [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4">
      {products.length > 0 ? (
        products.map((product: any, index: number) => (
          <div 
            key={product.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductItem product={product} color="black" />
          </div>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12 animate-fade-in">
          <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-xl p-8 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300">
              No products found for specified query
            </h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
              Try adjusting your filters or search terms
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

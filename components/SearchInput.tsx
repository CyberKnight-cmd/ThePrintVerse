// *********************
// Role of the component: Search input element located in the header but it can be used anywhere in your application
// Name of the component: SearchInput.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <SearchInput />
// Input parameters: no input parameters
// Output: form with search input and button
// *********************

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sanitize } from "@/lib/sanitize";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  // function for modifying URL for searching products
  const searchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Sanitize the search input before using it in URL
    const sanitizedSearch = sanitize(searchInput);
    router.push(`/search?search=${encodeURIComponent(sanitizedSearch)}`);
    setSearchInput("");
  };

  return (
    <form className="flex w-full" onSubmit={searchProducts}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Type here"
        className="bg-gray-50 input input-bordered flex-1 rounded-r-none outline-none focus:outline-none text-sm sm:text-base"
        suppressHydrationWarning
      />
      <button type="submit" className="btn bg-blue-500 text-white rounded-l-none px-3 sm:px-6 text-sm sm:text-base hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchInput;

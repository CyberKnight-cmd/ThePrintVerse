"use client";
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="animate-fade-in p-2 rounded-full backdrop-blur-sm bg-glass hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4 text-gray-600" />
      ) : (
        <FaSun className="w-4 h-4 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
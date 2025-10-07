// *********************
// Role of the component: Topbar of the header
// Name of the component: HeaderTop.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <HeaderTop />
// Input parameters: no input parameters
// Output: topbar with phone, email and login and register links
// *********************

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
  const { data: session }: any = useSession();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  }
  return (
    <div className="h-10 sm:h-12 text-white bg-blue-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 h-full">
        <div className="flex justify-between items-center h-full text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <FaHeadphones className="text-white" />
              <span className="hidden sm:inline">+1 (555) 123-PRINT</span>
              <span className="sm:hidden">Call Us</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <FaRegEnvelope className="text-white" />
              <span className="hidden md:inline">hello@theprintverse.com</span>
              <span className="md:hidden">Email</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {!session ? ( 
            <>
            <Link href="/login" className="flex items-center gap-1 hover:text-gray-200">
              <FaRegUser className="text-white" />
              <span>Login</span>
            </Link>
            <Link href="/register" className="flex items-center gap-1 hover:text-gray-200">
              <FaRegUser className="text-white" />
              <span>Register</span>
            </Link>
            </>
            ) : (
            <>
            <span className="text-xs sm:text-sm truncate max-w-[100px] sm:max-w-none">{session.user?.email}</span>
            <button onClick={() => handleLogout()} className="flex items-center gap-1 hover:text-gray-200">
              <FaRegUser className="text-white" />
              <span>Logout</span>
            </button>
            </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

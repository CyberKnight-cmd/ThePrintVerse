// *********************
// Role of the component: Header component
// Name of the component: Header.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Header />
// Input parameters: no input parameters
// Output: Header component
// *********************

"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";

import CartElement from "./CartElement";
import NotificationBell from "./NotificationBell";
import HeartElement from "./HeartElement";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import apiClient from "@/lib/api";

const Header = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { wishlist, setWishlist, wishQuantity } = useWishlistStore();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };

  // getting all wishlist items by user id
  const getWishlistByUserId = async (id: string) => {
    const response = await apiClient.get(`/api/wishlist/${id}`, {
      cache: "no-store",
    });
    const wishlist = await response.json();
    const productArray: {
      id: string;
      title: string;
      price: number;
      image: string;
      slug:string
      stockAvailabillity: number;
    }[] = [];
    
    wishlist.map((item: any) => productArray.push({id: item?.product?.id, title: item?.product?.title, price: item?.product?.price, image: item?.product?.mainImage, slug: item?.product?.slug, stockAvailabillity: item?.product?.inStock}));
    
    setWishlist(productArray);
  };

  // getting user by email so I can get his user id
  const getUserByEmail = async () => {
    if (session?.user?.email) {
      
      apiClient.get(`/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          getWishlistByUserId(data?.id);
        });
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, [session?.user?.email, wishlist.length]);

  return (
    <header className="bg-white">
      <HeaderTop />
      {pathname.startsWith("/admin") === false && (
        <>
          <div className="h-16 sm:h-20 bg-white flex items-center justify-between px-4 sm:px-6 lg:px-16 max-w-screen-2xl mx-auto">
            <Link href="/">
              <Image 
                src="/logo v1.png" 
                width={300} 
                height={300} 
                alt="The Print Verse logo" 
                className="w-24 sm:w-32 lg:w-40 h-auto" 
              />
            </Link>
            
            <div className="hidden sm:block flex-1 max-w-sm mx-4">
              <SearchInput />
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                className="sm:hidden p-2 text-gray-600 hover:text-blue-600"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                title="Open search"
              >
                <FaMagnifyingGlass className="w-4 h-4" />
              </button>
              <NotificationBell />
              <HeartElement wishQuantity={wishQuantity} />
              <CartElement />
            </div>
          </div>
          {showMobileSearch && (
            <div className="sm:hidden bg-white border-t px-4 py-2">
              <SearchInput />
            </div>
          )}
        </>
      )}
      {pathname.startsWith("/admin") === true && (
        <div className="flex justify-between h-16 sm:h-20 bg-white items-center px-4 sm:px-6 lg:px-16 max-w-screen-2xl mx-auto">
          <Link href="/">
            <Image
              src="/logo v1.png"
              width={130}
              height={130}
              alt="The Print Verse logo"
              className="w-24 sm:w-32 lg:w-40 h-auto"
            />
          </Link>
          <div className="flex gap-2 sm:gap-4 items-center">
            <NotificationBell />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-8 sm:w-10">
                <Image
                  src="/randomuser.jpg"
                  alt="random profile photo"
                  width={30}
                  height={30}
                  className="w-full h-full rounded-full"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 sm:w-52"
              >
                <li>
                  <Link href="/admin">Dashboard</Link>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li onClick={handleLogout}>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

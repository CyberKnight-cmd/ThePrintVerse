// *********************
// Role of the component: Category Item that will display category icon, category name and link to the category
// Name of the component: CategoryItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryItem title={title} href={href} ><Image /></CategoryItem>
// Input parameters: CategoryItemProps interface
// Output: Category icon, category name and link to the category
// *********************

import Link from "next/link";
import React, { type ReactNode } from "react";

interface CategoryItemProps {
  children: ReactNode;
  title: string;
  href: string;
}

const CategoryItem = ({ title, children, href }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-y-2 sm:gap-y-3 cursor-pointer bg-white p-3 sm:p-4 lg:p-6 text-black hover:bg-gray-100 transition-colors rounded-lg min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] justify-center">
        {children}
        <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-center leading-tight">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryItem;

"use client";

import { cn } from "@/lib/utils";
import { CategoryLinkType } from "@/types/category";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface NavbarProps {
  categories: CategoryLinkType[];
}

const Navbar: FC<NavbarProps> = ({ categories }) => {
  const pathname = usePathname();

  return (
    <nav className="overflow-x-auto">
      <ul className="flex flex-nowrap gap-4 divide-x divide-custom-blue whitespace-nowrap font-semibold uppercase tracking-wider">
        <li key="home">
          <Link
            href="/"
            className={cn("hover:underline", { underline: pathname === "/" })}
            prefetch={false}
          >
            Home
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/${category.slug}?page=1`}
              className={cn("ml-4 hover:underline", {
                underline: pathname === `/${category.slug}`,
              })}
              prefetch={false}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

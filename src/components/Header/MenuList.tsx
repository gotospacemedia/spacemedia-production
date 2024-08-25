import React from "react";
import Link from "next/link";
import { MenuItem } from ".";
import { cn } from "@/lib/utils";

const MenuList = ({
  menus,
  className,
}: {
  menus: MenuItem[];
  className?: string;
}) => {
  return (
    <ul className={cn("flex gap-10 items-center text-sm", className)}>
      {menus.map((item) => (
        <li key={item.id} className="px-1">
          <Link
            href={item.url}
            className="hover:text-blue-900 hover:underline hover:underline-offset-4 transition-all"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;

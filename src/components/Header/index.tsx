"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MenuList from "./MenuList";
import { cn } from "@/lib/utils";
import Buttton from "../shared/Buttton";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import Logo from "@/assets/logo.svg";

export interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const menuConstant: MenuItem[] = [
  {
    id: 1,
    title: "Services",
    url: "#",
  },
  {
    id: 2,
    title: "Case Studies",
    url: "#",
  },
  {
    id: 3,
    title: "Examples",
    url: "#",
  },
  {
    id: 4,
    title: "FAQ",
    url: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "#",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // Track scrollbar
  const { lastScrollY, scrolling } = useScrollHandler();

  return (
    <nav
      className={cn(
        "w-full overflow-hidden fixed top-0 left-0 right-0 !z-[5000]  transition-all duration-500 delay-75",
        {
          "opacity-0 top-[-100px]": lastScrollY > 500,
          "opacity-100 top-0": scrolling === "top",
        }
      )}
    >
      <div className="bg-[#E1E3F1] h-[70px] flex justify-between items-center !z-[1000]">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-brand_primary p-5 ">
          <Link href={"/"} className="select-none">
            <Image
              src={Logo}
              alt="Logo"
              width={300}
              height={300}
              priority
              className="w-[120px] h-[120px]"
            />
          </Link>

          <div className="hidden lg:block">
            <MenuList menus={menuConstant} />
          </div>
          <Buttton className="hidden lg:block text-sm px-5 py-2">
            Contact Us
          </Buttton>

          {open ? (
            <X
              className="cursor-pointer lg:hidden"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          ) : (
            <Menu
              className="cursor-pointer lg:hidden"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        {/* overlay */}
        <div
          className={cn(
            "w-full transition-all duration-500 lg:hidden z-10 relative",
            {
              "min-h-[calc(100vh-70px)]": open,
            }
          )}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />

        {/* menu */}
        <div
          className={cn(
            "bg-white max-w-7xl mx-auto p-5  space-y-5 text-sm text-brand_primary absolute top-0 left-0 right-0 z-[1000]",
            {
              "top-[70px]": open,
              "top-[-500px]": !open,
            }
          )}
        >
          <MenuList
            menus={menuConstant}
            className="flex-col justify-center items-start gap-5"
          />

          <Buttton className="text-sm px-5 py-2">Contact Us</Buttton>
        </div>
      </div>
    </nav>
  );
};

export default Header;

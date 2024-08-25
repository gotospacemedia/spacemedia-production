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
    url: "#Services",
  },
  {
    id: 2,
    title: "Case Studies",
    url: "#Case-Studies",
  },
  {
    id: 3,
    title: "Examples",
    url: "#Examples",
  },
  {
    id: 4,
    title: "FAQ",
    url: "#FAQ",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // Track scrollbar
  const { lastScrollY, scrolling } = useScrollHandler();

  return (
    <nav
      className={cn(
        "w-full overflow-hidden fixed top-0 left-0 right-0 !z-[5000]  transition-all duration-700 delay-75 select-none",
        {
          "opacity-0 top-[-100px]": lastScrollY > 300,
          "opacity-100 top-0": scrolling === "top",
        }
      )}
    >
      <div className={cn("relative !z-[5000]")}>
        {/* Mainheader */}
        <div className="bg-[#E1E3F1] sticky top-0 left-0 right-0 h-[70px] flex justify-between items-center !z-[5000]">
          <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-brand_primary p-5 overflow-hidden">
            <Link href={"/"} className="">
              <Image
                src={Logo}
                alt="Logo"
                width={300}
                height={300}
                priority
                className="w-[150px] h-[65px]"
              />
            </Link>

            <div className="hidden lg:block">
              <MenuList menus={menuConstant} />
            </div>

            <div className="hidden lg:block">
              <Link href={"/contact"}>
                <Buttton className="text-sm px-5 py-2">Contact Us</Buttton>
              </Link>
            </div>

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
        <div
          className={cn("relative min-h-[calc(100vh-70px)] ", {
            "block ": open,
            "max-h-0 ": !open,
          })}
        >
          {/* Overlay */}
          <div
            className={cn("absolute bg-red-500 top-0 left-0 right-0 bottom-0")}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />

          {/* Menu */}
          <div
            className={cn(
              "bg-white w-full max-w-7xl  mx-auto p-5  space-y-5 text-sm text-brand_primary absolute top-0 left-0 right-0 transition-all duration-500 z-[1000]",
              {
                "top-[0px]": open,
                " top-[-100%]": !open,
              }
            )}
          >
            <MenuList
              menus={menuConstant}
              className="flex-col justify-center items-start gap-5"
            />
            <div>
              <Link href={"/contact"}>
                <Buttton className="text-sm px-5 py-2">Contact Us</Buttton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

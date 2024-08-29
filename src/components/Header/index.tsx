"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MenuList from "./MenuList";
import { cn } from "@/lib/utils";
import Buttton from "../shared/Buttton";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import { MotionDiv, MotionNav } from "@/framer-motion/elements";
import {
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
  sectionVariants,
} from "@/framer-motion/variants";
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
    url: "/#services",
  },
  {
    id: 2,
    title: "Case Studies",
    url: "/case-studies",
  },
  {
    id: 3,
    title: "Examples",
    url: "/examples",
  },
  {
    id: 4,
    title: "Pricing",
    url: "/#pricing",
  },
  {
    id: 5,
    title: "FAQ",
    url: "/#faq",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // Track scrollbar
  const { lastScrollY, scrolling } = useScrollHandler();
  const vissible = lastScrollY < 300 || scrolling === "top";

  return (
    <MotionNav
      variants={sectionVariants({ from: "top" })}
      initial="hidden"
      animate={vissible ? "visible" : "hidden"}
      className={cn(
        "w-full overflow-hidden fixed top-0 left-0 right-0 !z-[5000]"
      )}
    >
      <div className="bg-[#E1E3F1] h-[70px] flex justify-between items-center">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-brand_primary p-5 md:px-8">
          <MotionDiv
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Link href={"/"} className="select-none">
              <Image
                src={Logo}
                alt="Logo"
                width={300}
                height={300}
                priority
                className="w-[120px] h-[60px]"
              />
            </Link>
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            className="hidden lg:block"
          >
            <MenuList menus={menuConstant} />
          </MotionDiv>

          <MotionDiv
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            className="hidden lg:block "
          >
            <Link href={"#"}>
              <Buttton className="text-sm px-5 py-2">Contact Us</Buttton>
            </Link>
          </MotionDiv>

          <MotionDiv
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:hidden cursor-pointer"
          >
            {open ? (
              <X
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              />
            ) : (
              <Menu
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              />
            )}
          </MotionDiv>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "h-0 overflow-hidden transition-height duration-500  relative lg:hidden",
          {
            "h-[calc(100vh-70px)] delay-75": open,
          }
        )}
      >
        {/* overlay */}
        <div
          className={cn("w-full h-full")}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />

        {/* menu */}
        <div
          className={cn(
            "bg-white max-w-7xl mx-auto  p-5 md:px-8 space-y-5 text-sm text-brand_primary absolute top-0 left-0 right-0"
          )}
        >
          <MenuList
            menus={menuConstant}
            className="flex-col justify-center items-start gap-5"
          />

          <div>
            <Link href={"#"}>
              <Buttton className="text-sm px-5 py-2">Contact Us</Buttton>
            </Link>
          </div>
        </div>
      </div>
    </MotionNav>
  );
};

export default Header;

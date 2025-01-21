"use client";

import { useState, useEffect } from "react";
import { Menu, PhoneCall, Send, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../logo";
import { MotionDiv } from "@/framer-motion/elements";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  containerVariants,
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import { cn } from "@/lib/utils";
import useScrollHandler from "@/lib/hooks/useScrollHandler";

const navMenu = [
  {
    label: "Services",
    link: "/#Services",
  },
  {
    label: "Process",
    link: "/#Process",
  },
  {
    label: "Portfolio",
    link: "/portfolio",
  },
  {
    label: "Case Studies",
    link: "/case-studies",
  },
  {
    label: "FAQs",
    link: "/#FAQs",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Track scrollbar
  const { lastScrollY, scrolling } = useScrollHandler();

  // Scrollbar control
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "w-full px-5 z-50 sticky",
          lastScrollY > 300 &&
            "bg-background top-[-100%] transition-all duration-500 invisible",
          scrolling === "top" && "visible top-0",
          {
            isOpen: "bg-background",
          }
        )}
      >
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="max-w-[1600px] mx-auto flex h-16 lg:h-20 items-center justify-between !overflow-hidden">
            {/* Brand Logo */}
            <MotionDiv variants={leftSideVariants}>
              <Link href="/">
                <Logo />
              </Link>
            </MotionDiv>

            {/* Desktop Navigation */}
            <nav className="mx-5 hidden lg:flex flex-1 items-center justify-center">
              <MotionDiv
                variants={fadeInVariants}
                className="rounded-full bg-zinc-800/70 border-2 border-zinc-800 hover:custom_shadow px-4 py-2"
              >
                <NavigationMenu>
                  <NavigationMenuList className="flex space-x-10">
                    {navMenu.map((menu) => (
                      <NavigationMenuItem key={menu.label}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={menu.link}
                            className="font-medium text-center transition-colors hover:text-brand_primary"
                          >
                            {menu.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </MotionDiv>
            </nav>

            {/* Right side buttons */}
            <MotionDiv
              variants={rightSideVariants}
              className="flex items-center gap-5"
            >
              <Link href="/call">
                <Button className="btn_primary !px-4 !py-2 max-sm:text-sm">
                  <PhoneCall /> Demo call
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </MotionDiv>
          </div>
          {/* Mobile Navigation Overlay */}
          <div
            className={`absolute left-0 right-0 z-40 transform overflow-hidden bg-gradient-to-t  to-background from-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden ${
              isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="container mx-auto px-5 py-10">
              <ul className="flex flex-col space-y-1">
                {navMenu.map((menu) => (
                  <li key={menu.label}>
                    <Link
                      href={menu.link}
                      className="block rounded-lg px-4 py-2.5 text-center transition-colors hover:text-brand_primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <br />
              <div className="!max-w-lg !mx-auto">
                <Link href="mailto:hello@editnow.co?subject=Hello%20EditNow&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
                  <Button
                    className="btn_secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    <Send /> Send Email
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </MotionDiv>
      </header>

      {/* Overlay backdrop */}
      {isOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden cursor-auto"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => e.key === "Enter" && setIsOpen(false)}
          aria-label="Close menu"
        />
      )}
    </>
  );
}

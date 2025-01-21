"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ScrollToShowButtonProps {
  href: string;
  buttonText: string;
  scrollThreshold?: number;
}

const ScrollToShowButton: React.FC<ScrollToShowButtonProps> = ({
  href,
  buttonText,
  scrollThreshold = 200,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-20 flex justify-center transition-transform duration-300 ease-in-out  ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mb-10">
        <Link href={href}>
          <Button className="btn_secondary hover:!bg-brand_primary hover:!text-white !py-6 !px-8 md:!py-7 md:!px-14 shadow-lg">
            <Phone /> {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScrollToShowButton;

"use client";
import Link from "next/link";
import Logo from "../logo";
import { MotionDiv } from "@/framer-motion/elements";
import {
  containerVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import ScrollToTop from "react-scroll-to-top";
import { ChevronsUp } from "lucide-react";
import ScrollToShowButton from "../ScrollToShowButton";
import "./style.css";

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-10 border-t-2 border-gray-700"
      >
        {/* Top section with logo and buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 mb-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-30">
            <MotionDiv
              variants={leftSideVariants}
              className="flex items-center gap-2"
            >
              <Logo />
            </MotionDiv>
          </Link>

          {/* Copyrights*/}
          <MotionDiv
            variants={rightSideVariants}
            className="flex items-center justify-center gap-4 z-30"
          >
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} EditNow | all rights reserved.
              </p>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>

      {/* fixed element */}
      <div>
        <ScrollToTop
          smooth
          top={2000}
          component={<ChevronsUp color="#000" />}
        />

        <ScrollToShowButton
          href="/call"
          buttonText="Book a demo call"
          scrollThreshold={2000}
        />
      </div>
    </footer>
  );
}

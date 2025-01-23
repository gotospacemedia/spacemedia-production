import Link from "next/link";
import { MotionDiv, MotionP } from "@/framer-motion/elements";
import { Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import {
  bottomSideVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import { cn } from "@/lib/utils";

import "./style.css";

export default function Hero() {
  return (
    <section
      className={cn("relative py-10 px-2 md:min-h-[350px] overflow-hidden")}
    >
      {/* Left glow */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-glow-left" />

      {/* Right glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-glow-right" />

      <div className="container relative mx-auto max-w-4xl text-center">
        {/* Main heading */}
        <MotionDiv variants={leftSideVariants} className="md:mb-6">
          <h1 className="text-[100px] max-md:text-[70px] max-sm:text-[50px] text-center font-bold text-white capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
            Grow superfast
          </h1>
          <div className="flex justify-center mt-2">
            <h1 className="text-[60px] max-md:text-[40px] max-sm:text-[30px]  text-center font-bold text-white capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px] md:mt-3">
              on
            </h1>

            <div className="text-[100px] max-md:text-[70px] max-sm:text-[50px] h-[6rem] max-md:h-[4.5rem]  max-sm:h-[3rem] overflow-hidden words">
              <p className="ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
                youtube
              </p>
              <p className="ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
                instragram
              </p>
              <p className="ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
                tiktok
              </p>
              <p className="ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
                linkedin
              </p>
              <p className="ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
                youtube
              </p>
              <p className="ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
                tiktok
              </p>
            </div>
          </div>
        </MotionDiv>
        <br />
        {/* Subtitle */}
        <MotionP
          variants={rightSideVariants}
          className="mb-5 md:mb-12 text-lg text-gray-400"
        >
          We are the wizards that transforms your creative vision into stunning
          reality in lightspeed.
        </MotionP>

        {/* CTA buttons */}
        <MotionDiv
          variants={bottomSideVariants}
          className="w-full flex flex-row items-center justify-center gap-4 "
        >
          <Link href="/call">
            <Button className="btn_primary">
              <Phone />
              Book a Call
            </Button>
          </Link>
          <Link href="mailto:hello@spacemediaproduction.com?subject=Hello%spacemedia&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
            <Button className="btn_secondary">
              <Send /> Send Email
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}

import Link from "next/link";
import { MotionDiv, MotionP } from "@/framer-motion/elements";
import { Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import {
  bottomSideVariants,
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import { cn } from "@/lib/utils";

import "./style.css";

export default function Hero() {
  return (
    <section
      className={cn("relative py-10 px-2 md:min-h-[550px] overflow-hidden")}
    >
      {/* Decorative background curve */}
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-200 600 Q 400 -100 1600 400"
            stroke="#4e1a3acb"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="container relative mx-auto max-w-4xl text-center">
        {/* Revenue badge */}
        <MotionDiv
          variants={fadeInVariants}
          className="mb-5 md:mb-8 flex flex-row gap-2 items-center justify-center rounded-full bg-zinc-700/70 text-gray-300 px-4 py-2 backdrop-blur-sm max-w-max mx-auto"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke=" #d1d5db"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-xs md:text-sm">
            For brands or creators generating over €50k/month in revenue.
          </span>
        </MotionDiv>

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

          <h1 className="text-[100px] max-md:text-[70px] max-sm:text-[50px] text-center font-bold text-white capitalize  leading-[100px] max-md:leading-[80px] max-sm:leading-[50px]">
            <span className="text-[60px] max-md:text-[40px] max-sm:text-[30px]">
              with
            </span>{" "}
            <span className="text-brand_primary">EditNow</span>
          </h1>
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
          <Link href="mailto:hello@editnow.co?subject=Hello%20EditNow&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
            <Button className="btn_secondary">
              <Send /> Send Email
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}

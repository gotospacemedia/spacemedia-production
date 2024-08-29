"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Buttton from "@/components/shared/Buttton";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";

const OurMissionAndPhilosophy = () => {
  const ref = useRef(null);

  return (
    <div className="px-5 lg:px-10  pb-10 bg-gradient-to-b from-blue-300  to-blue-300">
      <MotionSection
        variants={sectionVariants({ from: "bottom" })}
        initial="hidden"
        whileInView="visible"
        className="space-y-10"
      >
        <div className="relative bg-white rounded-xl p-5 md:p-10 space-y-5 max-w-6xl mx-auto overflow-hidden">
          <div className="space-y-3 z-[100]">
            <div className="bg-purple-200 px-4 py-1.5 rounded-full max-w-max text-black text-sm font-medium">
              OUR MISSION
            </div>
            <p className="text-brand_primary">
              Growing an audience takes knowledge, time and expertise. To scale
              your content, you need a team specialized in the major platforms
              who are able to keep up with the pace of the industry. This is
              where Amplify comes in.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-green-200 px-4 py-1.5 rounded-full max-w-max text-black text-sm font-medium">
              OUR PHILOSOPHY
            </div>
            <p className="text-brand_primary">
              Working with the best creators and founders, we scale your
              distribution to increase revenue, while you focus on your business
              and what you enjoy.
            </p>
          </div>

          {/* <div className="absolute -top-10 z-10">
            <lottie-player
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="/lottiefiles/star-animation.json"
              style={{ width: "100px" }}
              className="absolute -top-10 z-10"
            ></lottie-player>
          </div> */}
        </div>
        <div className="flex justify-center">
          <Link href={"/case-studies#our-story"}>
            <Buttton>Read Our Story</Buttton>
          </Link>
        </div>
      </MotionSection>
    </div>
  );
};

export default OurMissionAndPhilosophy;

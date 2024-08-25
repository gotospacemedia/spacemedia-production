import React from "react";
import LaptopComponents from "./LaptopComponents";
import { MotionDiv, MotionH1 } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  rightSideVariants,
  sectionVariants,
  zoomVariants,
} from "@/framer-motion/variants";

const Hero = () => {
  return (
    <div className="px-5 lg:px-10 py-32 md:py-40 lg:py-52  bg-gradient-to-b from-blue-900  to-blue-300">
      <MotionDiv
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 relative"
      >
        {/* LHS */}
        <div className="flex-1 space-y-5 ml-10">
          <div className="flex justify-center md:justify-start gap-10 text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-extrabold">
            <MotionH1
              variants={fadeInVariants}
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
            >
              Grow.
            </MotionH1>
            <MotionH1
              variants={fadeInVariants}
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
            >
              Scale.
            </MotionH1>
          </div>
          <MotionH1
            initial={zoomVariants.scaledown}
            whileInView={zoomVariants.scaleup}
            className="text-6xl sm:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-bold text-center md:text-start bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
          >
            Amplify.
          </MotionH1>
        </div>

        {/* RHS */}
        <MotionDiv variants={rightSideVariants} className="">
          <LaptopComponents />
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Hero;

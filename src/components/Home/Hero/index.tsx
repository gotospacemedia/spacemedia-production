import React from "react";
import LaptopComponents from "./LaptopComponents";
import { MotionDiv, MotionH1, MotionH2 } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  rightSideVariants,
  zoomVariants,
} from "@/framer-motion/variants";

const Hero = () => {
  return (
    <div className="px-5 lg:px-10 py-36 md:py-52 lg:py-60  bg-gradient-to-b from-blue-900  to-blue-300 overflow-hidden">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 relative"
      >
        {/* LHS */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex-1 space-y-5 ml-10"
        >
          <div className="flex justify-center md:justify-start gap-5 text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-extrabold">
            <MotionH2
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
            >
              Grow.
            </MotionH2>
            <MotionH2
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
            >
              Scale.
            </MotionH2>
          </div>
          <MotionH1
            variants={zoomVariants}
            initial={"scaledown"}
            animate={"scaleup"}
            className="text-6xl sm:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-bold text-center md:text-start bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
          >
            Amplify.
          </MotionH1>
        </MotionDiv>

        {/* RHS */}
        <MotionDiv
          variants={rightSideVariants}
          initial="hidden"
          whileInView="visible"
        >
          <LaptopComponents />
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Hero;

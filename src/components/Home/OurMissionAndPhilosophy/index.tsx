import React from "react";
import Buttton from "@/components/shared/Buttton";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";

const OurMissionAndPhilosophy = () => {
  return (
    <div className="px-5 lg:px-10  pb-10 bg-gradient-to-b from-blue-300  to-blue-300">
      <MotionSection
        variants={sectionVariants({ from: "bottom" })}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <div className="bg-white rounded-xl p-5 md:p-10 space-y-5 max-w-6xl mx-auto">
          <div className="space-y-3">
            <div className="bg-purple-200 px-3 py-1.5 rounded-full max-w-max text-black text-sm font-medium">
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
            <div className="bg-green-200 px-3 py-1.5 rounded-full max-w-max text-black text-sm font-medium">
              OUR PHILOSOPHY
            </div>
            <p className="text-brand_primary">
              Working with the best creators and founders, we scale your
              distribution to increase revenue, while you focus on your business
              and what you enjoy.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Buttton>Read Our Story</Buttton>
        </div>
      </MotionSection>
    </div>
  );
};

export default OurMissionAndPhilosophy;

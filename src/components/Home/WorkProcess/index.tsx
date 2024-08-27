import React from "react";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";
import Buttton from "@/components/shared/Buttton";
import SectionHeader from "@/components/shared/SectionHeader";
import WorkProcessSlider from "./WorkProcessSlider";

const WorkProcess = () => {
  return (
    <div className="px-5 lg:px-10  py-10 bg-gradient-to-b from-blue-300  to-blue-300">
      <MotionSection
        variants={sectionVariants({ from: "bottom" })}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <div className=" rounded-xl space-y-5 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-5">
            <SectionHeader
              heading={{
                title: "Process",
                extraClass: "bg-gradient-to-b from-blue-300  to-blue-300",
              }}
              description="How we work at Amplify."
            />
          </div>

          <div>
            <WorkProcessSlider />
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default WorkProcess;

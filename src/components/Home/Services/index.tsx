import React from "react";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";
import Buttton from "@/components/shared/Buttton";
import SectionHeader from "@/components/shared/SectionHeader";

const Services = () => {
  return (
    <div className="px-5 lg:px-10  py-10 bg-gradient-to-b from-blue-300  to-blue-300">
      <MotionSection
        variants={sectionVariants({ from: "bottom" })}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <div className=" rounded-xl p-5 md:p-10 space-y-5 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-5">
            <SectionHeader
              heading={{
                title: "Services",
                extraClass: "bg-gradient-to-b from-blue-300  to-blue-300",
              }}
              description="Managing multiple vendors for your content is expensive and time-consuming. We offer an end-to-end solution, streamlining the
              production of your content to promote it effectively across platforms."
            />
          </div>

          <div></div>
        </div>
        <div className="flex justify-center">
          <Buttton>View Our Work</Buttton>
        </div>
      </MotionSection>
    </div>
  );
};

export default Services;

import React from "react";
import ServiceTab from "./ServiceTab";
import { MotionSection } from "@/framer-motion/elements";
import { leftSideVariants } from "@/framer-motion/variants";

const Services = () => {
  return (
    <MotionSection
      variants={leftSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="Services"
    >
      <div className="rounded-xl space-y-5 max-w-7xl mx-auto">
        <div className="">
          <h2 className="heading_1">Our services includes</h2>
        </div>

        <div>
          <ServiceTab />
        </div>
      </div>
    </MotionSection>
  );
};

export default Services;

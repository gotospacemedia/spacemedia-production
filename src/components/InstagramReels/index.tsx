"use client";

import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import "./style.css";
import { containerVariants, rightSideVariants } from "@/framer-motion/variants";

const InstagramReels = () => {
  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="FAQs"
    >
      <MotionDiv
        variants={containerVariants}
        className="max-w-7xl mx-auto text-white"
      >
        <div>
          <h4 className="heading_1 text-center">
            What&apos;s Trendings On Instagram
          </h4>
        </div>
        <div className="instagram_reels">
          <div className="sk-ww-instagram-reels" data-embed-id="25515260"></div>
          <script
            src="https://widgets.sociablekit.com/instagram-reels/widget.js"
            defer
          ></script>
        </div>
      </MotionDiv>
    </MotionSection>
  );
};

export default InstagramReels;

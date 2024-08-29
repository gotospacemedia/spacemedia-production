import React from "react";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";
import Buttton from "@/components/shared/Buttton";
import SectionHeader from "@/components/shared/SectionHeader";
import ShortForm from "./ShortForm";
import LongForm from "./LongForm";
import CustomPlan from "./Custom";
import OneToOneConsultancy from "./OneToOneConsultancy";
import { Switch } from "@/components/ui/switch";
import { CardTitle } from "./MemberShipCard/components";

const MemberShip = () => {
  return (
    <div
      id="pricing"
      className="px-5 lg:px-10  py-10 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300"
    >
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
                title: "Membership",
                extraClass: "bg-gradient-to-b from-blue-300  to-blue-300",
              }}
              description="Choose a plan that's right for you!"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ShortForm />
            <LongForm />
            <CustomPlan />
            <OneToOneConsultancy />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <CardTitle className="text-white">
            Have a question? Book a free strategy call.
          </CardTitle>
          <Buttton className="px-5 py-2 text-xs bg-transparent hover:bg-transparent border hover:text-blue-950 border-white">
            Book a Call
          </Buttton>
        </div>
      </MotionSection>
    </div>
  );
};

export default MemberShip;

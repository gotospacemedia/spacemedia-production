import React from "react";
import Hero from "@/components/Home/Hero";
import OurMissionAndPhilosophy from "@/components/Home/OurMissionAndPhilosophy";
import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";
import Services from "@/components/Home/Services";
import dynamic from "next/dynamic";
import WorkProcess from "@/components/Home/WorkProcess";
import FAQ from "@/components/Home/Faq";
const OurHappyClients = dynamic(
  () => import("@/components/Home/OurHappyClients"),
  { ssr: false }
);

const HomePage = () => {
  return (
    <MotionDiv variants={containerVariants} initial="hidden" animate="visible">
      <Hero />
      <OurMissionAndPhilosophy />
      <Services />
      <OurHappyClients />
      <WorkProcess />
      <FAQ />
      <br />
    </MotionDiv>
  );
};

export default HomePage;

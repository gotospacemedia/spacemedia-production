import { Suspense } from "react";
import Hero from "@/components/hero";
import ShortVideoSlider from "@/components/ShortVideoSlider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";
import ComparisonSection from "@/components/comparison-section";
import OurProcess from "@/components/OurProcess";
import CreatorsWeWorkWith from "@/components/creators-we-work-with";
import MarketingSection from "@/components/MarketingSection";
import ServicesWeOffer from "@/components/ServicesWeOffer";
import ProcessToGetYouViral from "@/components/ProcessToGetYouViral";
import FactorsDriveGrowth from "@/components/FactorsDriveGrowth";
import Faq from "@/components/faq";
import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";
import HowWeHelpEcomBrand from "@/components/HowWeHelpEcomBrand";
import InstagramReels from "@/components/InstagramReels";
import { vimeoFolderPath } from "@/constant";
import LoadingSlider from "@/components/global/LoadingSlider";

export default async function Home() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <Hero />
      <Suspense fallback={<LoadingSlider />}>
        <ShortVideoSlider path={vimeoFolderPath.shorts_videos} />
      </Suspense>
      <GrowingBrandsSlider />
      <ServicesWeOffer />
      <CreatorsWeWorkWith />
      <HowWeHelpEcomBrand />
      <OurProcess />
      <MarketingSection />
      <ComparisonSection />
      <ProcessToGetYouViral />
      <FactorsDriveGrowth />
      <Faq />
      <InstagramReels />
    </MotionDiv>
  );
}

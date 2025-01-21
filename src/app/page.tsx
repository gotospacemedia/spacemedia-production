import { getVimeoShortFormatVideo, VimeoResponse } from "@/lib/vimeo";

import Hero from "@/components/hero";
import ShortVideoSlider from "@/components/ShortVideoSlider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";
import ComparisonSection from "@/components/comparison-section";
import OurPortfolio from "@/components/OurPortfolio";
import OurProcess from "@/components/OurProcess";
import CreatorsWeWorkWith from "@/components/creators-we-work-with";
import MarketingSection from "@/components/MarketingSection";
import ServicesWeOffer from "@/components/ServicesWeOffer";
import FeatureCards from "@/components/feature-cards";
import ProcessToGetYouViral from "@/components/ProcessToGetYouViral";
import FactorsDriveGrowth from "@/components/FactorsDriveGrowth";
import Faq from "@/components/faq";
import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";

export default async function Home() {
  const response = (await getVimeoShortFormatVideo({})) as VimeoResponse;

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <Hero />
      <ShortVideoSlider stories={response?.data} />
      <GrowingBrandsSlider />
      <ServicesWeOffer />
      <ProcessToGetYouViral />
      <FactorsDriveGrowth />
      <OurProcess />
      <FeatureCards />
      <OurPortfolio />
      <MarketingSection />
      <CreatorsWeWorkWith />
      <ComparisonSection />
      <Faq />
    </MotionDiv>
  );
}

"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";
import ViralCard from "./viral-card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export type ViralCardProps = {
  title: string;
  percentage: string;
  subtitle: string;
  description: string;
};

const viralCardData: ViralCardProps[] = [
  {
    title: "VIRAL EDITS",
    percentage: "200%",
    subtitle: "VIEWS INCREASE",
    description:
      "Want Your Audience To Watch Your Entire Video? Get It Done With Our Highly Engaging Edits! Retention-Based Edits Is The Easiest Way To Increase Your Watch Time Which Boosts The YouTube Algorithm To Push Out Your Content To The Mass Audience.",
  },
  {
    title: "Thumbnails",
    percentage: "15%",
    subtitle: "CTR increase",
    description:
      "Want your audience to stop scrolling? Get our clickable/ killer thumbnails that is sure to get the CTR high. A compelling thumbnail makes your content more eye-catching, appealing, the higher the CTR the higher your views!",
  },
  {
    title: "Engaging Title",
    percentage: "10%",
    subtitle: "More Clicks",
    description:
      "Did you know 80% of your ranking depends on a good title? Dont worry! We generate banger/crazy titles for you.  Titles spark curiosity, and help you reach to the top of YouTube search result through proper keywords and tags.",
  },
  {
    title: "SEO",
    percentage: "30%",
    subtitle: "More Reach",
    description:
      "Killer videos but no reach? Our team helps you rank first on YouTube with proper SEO optimization & tags. SEO helps you rank better as well as pop up in YouTube’s suggested videos.",
  },
  {
    title: "Fire Hooks",
    percentage: "5X",
    subtitle: "More Engagement",
    description:
      "8 seconds is all you get for your viewers attention! Want to get your reels viral? Get the best hooks from your existing videos! Hooks get you the immediate engagements and cut down the click-away rates to almost 50%",
  },
];

export default function FactorsDriveGrowth() {
  const [mounted, setMounted] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSlideChange = useCallback(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <h2 className="heading_1 md:!text-start">
            See the factors that
            <br />
            drive your <span className="text-brand_primary">growth</span>
          </h2>
          <div className="space-x-2 mb-8">
            <button
              onClick={handlePrev}
              className={`${
                isBeginning
                  ? "bg-zinc-800  hover:bg-brand_primary/60 cursor-not-allowed"
                  : "bg-zinc-700  hover:!bg-brand_primary"
              } rounded-full p-4 transition-colors`}
              disabled={isBeginning}
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>
            <button
              onClick={handleNext}
              className={`${
                isEnd
                  ? "bg-zinc-800  hover:bg-brand_primary/60 cursor-not-allowed"
                  : "bg-zinc-700  hover:!bg-brand_primary"
              } rounded-full p-4 transition-colors hover:text-background`}
              disabled={isEnd}
            >
              <ChevronRight className="w-6 h-6  md:w-7 md:h-7" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          breakpoints={{
            768: {
              spaceBetween: 10,
            },
          }}
          slidesPerView={"auto"}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="relative rounded-3xl"
        >
          {viralCardData.map((cardData, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[65%] lg:!w-[45%] px-2"
            >
              <ViralCard cardData={cardData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MotionSection>
  );
}

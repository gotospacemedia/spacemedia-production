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
    subtitle: "More Exposure",
    description:
      "Our expert editing techniques leverage trending formats and cultural nuances to create videos that resonate deeply with local audiences. We craft content that is not only entertaining but also shareable, maximizing your reach and engagement.",
  },
  {
    title: "reach",
    percentage: "30%",
    subtitle: "more Viewership",
    description:
      "Our cost-effective solutions deliver exceptional results. With 30% more reach and 5X more engagement, we help you build a strong social presence and connect with your target audience in Bangladesh.",
  },
  {
    title: "Fire Hooks",
    percentage: "5X",
    subtitle: "More Engagement",
    description:
      "Our Fire Hooks techniques ensure your videos keep audiences captivated from start to finish. Experience engagement that was never seen before and build a loyal following.",
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

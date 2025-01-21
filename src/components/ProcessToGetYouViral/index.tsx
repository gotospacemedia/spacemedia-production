"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Video,
  TrendingUp,
  Search,
  Clapperboard,
  MousePointerClick,
} from "lucide-react";
import { MotionSection } from "@/framer-motion/elements";
import { leftSideVariants } from "@/framer-motion/variants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "Get the best video ideas in your niche",
    description:
      "We Help You Sort Out The Best Content That Perfectly Aligns With Your Niche. How? You Answer Us Some Simple Questions And From There We Give You A Detailed Plan With Content Strategies, Competitor Analysis And Proper Keyword Research.",
    icon: Lightbulb,
    bgColor: "bg-[#fe3eb4]",
  },
  {
    title: "Press the record button",
    description:
      "Record And Send! Hassle-Free Videos Will Be Ready For You In Less Than 48 Hrs. We Are Always Standby To Help You With Ideas, Gears And Everything Needed To Make You Look Like A Pro. Get A Free Drive Link With Unlimited Storage Just For You.",
    icon: Video,
    bgColor: "bg-[#fff]",
  },
  {
    title: "Retention-based video editing",
    description:
      "Keep those eyes locked on your video with our clean and fast retention-based edits. Get your own unique style with the trendiest edits from our animators, not only in the intro but make the entire video locked in your audience's eyes and get the views at lightning speed.",
    icon: MousePointerClick,
    bgColor: "bg-[#fe3eb4]",
  },
  {
    title: "Creative thumbnails with your master video",
    description:
      "We make thumbnails that stop your scrolling, make your eyes pop and force you to click on the video! We give you a range of thumbnails to do your A/B testing and check out what works the best for you.",
    icon: Clapperboard,
    bgColor: "bg-[#fff]",
  },
  {
    title: "Rank your videos to the top",
    description:
      "Beat your competition and reach the top with our secret SEO strategies. Get more pumped to YouTube's suggested videos. We give you a thorough report of your channel's view count, clickthrough rate, conversion, subscriber count and everything that you can just glance through.",
    icon: Search,
    bgColor: "bg-[#fe3eb4]",
  },
  {
    title: "Generate views, watch your channel grow",
    description:
      "We get you the maximum watch time, subscribers, followers that are sure to stick with you for a long long time! We do it all for you from content ideas, to editing, to testing to publishing it in a detailed manner. You just have to sit back, relax and watch yourself at the top of the game.",
    icon: TrendingUp,
    bgColor: "bg-[#fff]",
  },
];

export default function ProcessToGetYouViral() {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
      variants={leftSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <h2 className="heading_1 md:!text-start">Process To Get You VIRAL</h2>
          <div className="space-x-2 mb-8">
            <button
              onClick={handlePrev}
              className={`${
                isBeginning
                  ? "bg-zinc-800  hover:bg-brand_primary/60 cursor-not-allowed"
                  : "bg-zinc-700  hover:!bg-brand_primary"
              } text-white rounded-full p-4 transition-colors hover:text-black`}
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
              } text-white rounded-full p-4 transition-colors hover:text-black`}
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
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[65%] lg:!w-[45%] px-2"
            >
              <div
                className={`${slide.bgColor} rounded-3xl p-8 min-h-[460px] md:min-h-[400px] lg flex flex-col  `}
              >
                <div className="mb-6">
                  <slide.icon className="w-10 h-10 text-background" />
                </div>
                <h3 className={`text-2xl mt-5 font-bold text-background`}>
                  {slide.title}
                </h3>
                <p
                  className={`font-medium capitalize text-[#4b4646] text-lg mt-10 max-sm:mt-4 leading-relaxed`}
                >
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MotionSection>
  );
}

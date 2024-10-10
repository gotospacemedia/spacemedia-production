"use client";
import React, { useState } from "react";
import { MotionDiv, MotionH1, MotionH2 } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  rightSideVariants,
  zoomVariants,
} from "@/framer-motion/variants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./slider.css";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Buttton from "../shared/Buttton";

const Hero = () => {
  const SLIDER_IMAGES = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dyripebns/image/upload/v1725257457/63c687e534da51c94d26552e_final_201_pmdm2m.png",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dyripebns/image/upload/v1725257444/63c687e6503acc577258d954_final_202_ygdfx8.png",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dyripebns/image/upload/v1725257415/63c687e8503acce67958d98d_final_203_kxviub.png",
    },
  ];

  const [progress, setProgress] = useState(1);
  const [time, setTime] = useState(1);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    console.log(s);

    setProgress(progress);
    setTime(time / 1000);
  };
  console.log({ progress, time });

  const variants = {
    hidden: { x: 100, y: -150, opacity: 0, scale: 1.5 },
    visible: {
      x: 0,
      y: 0,
      scale: 1.4,
      opacity: 1,
      transition: {
        type: "tween",
        duration: time,
        stiffness: 400,
        damping: 4,
      },
    },
  };

  return (
    <div className="px-5 lg:px-10 py-36 md:p-20  bg-gradient-to-b from-[#0F1359]  to-[#0F1359] overflow-hidden">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1600px] mx-auto flex flex-col sm:flex-row gap-10"
      >
        {/* LHS */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-5 max-w-[500px] mx-auto flex flex-col  items-center justify-center"
        >
          <MotionH1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text- font-semibold text-center sm:text-start bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
          >
            Clients <br /> Past & Present.
          </MotionH1>
          <br />

          <Buttton className="px-5 py-2 text-xs bg-transparent hover:bg-transparent border border-white">
            Book a Call
          </Buttton>
        </MotionDiv>

        {/* RHS */}
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className=""
        >
          {SLIDER_IMAGES.map((slider) => (
            <SwiperSlide key={slider.id}>
              <MotionDiv
                variants={variants}
                initial="hidden"
                animate={progress === 1 ? "hidden" : "visible"}
                className="overflow-hidden"
              >
                <Image
                  src={slider.imageUrl}
                  alt="client"
                  width={1200}
                  height={1200}
                  className="w-full"
                />
              </MotionDiv>
            </SwiperSlide>
          ))}
        </Swiper>
      </MotionDiv>
    </div>
  );
};

export default Hero;

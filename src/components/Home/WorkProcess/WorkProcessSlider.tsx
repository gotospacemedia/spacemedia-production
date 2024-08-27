"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const PROCESSFLOW = [
  {
    step: 1,
    icon: "🔎",
    title: "Explore",
    description:
      "Use our booking form to let us know what services you are interested in and what pain points you need solving. Check out our case studies and testimonials for inspiration.",
  },
  {
    step: 2,
    icon: "💌",
    title: "Contact",
    description:
      "We’ll ask for more information over email so that we can dive deep into your content and brand. We like to research as much as we can upfront to protect your time.",
  },
  {
    step: 3,
    icon: "📝",
    title: "Discover",
    description:
      "We'll get back to you within 48 hours with personalised recommendations for getting the most out of our services.",
  },
  {
    step: 4,
    icon: "📈",
    title: "Strategise",
    description:
      "If it looks like we could be a good fit, we’ll book a Strategy call to learn more about you, where you are now, and where you want to be. This helps us to establish what success looks like and to learn more about your goals.",
  },
  {
    step: 5,
    icon: "🎉",
    title: "Create",
    description:
      "It's go-time. We'll agree on a start date for posting to start and then take you through our set-up process to gather files, establish workflows, and learn more about your brand.",
  },
];

const WorkProcessSlider = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {PROCESSFLOW.map((process) => (
          <SwiperSlide key={process.step} className="">
            <div className="p-10">
              <div className="flex justify-between mb-5">
                <div className="text-blue-400 font-semibold">
                  {process.step}
                </div>
                <div className="text-4xl">{process.icon}</div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-start mb-3">
                  {process.title}
                </h4>
                <p className="text-start">{process.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkProcessSlider;

"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { CalendarDays } from "lucide-react";
import Image from "next/image";

import HoursSaved from "@/assets/services/hours-saved-graphic.png";
import WatchTime from "@/assets/services/watch-time-graphic.png";
import { MotionDiv } from "@/framer-motion/elements";

import "./service.css";

export const allIngredients = [
  {
    icon: <CalendarDays size={18} />,
    label: "Short-Form-Content",
    content: {
      image: WatchTime,
      title: "Short Form, Big Impact",
      description: (
        <div>
          <p>
            We specialize in crafting short, snappy videos that grab attention
            and leave a lasting impression. From TikTok trends to Instagram
            Reels, we deliver high-quality productions that capture attention
            and drive results.
          </p>
        </div>
      ),
    },
  },
  {
    icon: <CalendarDays size={18} />,
    label: "Long-Form-Content",
    content: {
      image: HoursSaved,
      title: "Beyond The Short Clip",
      description: (
        <div>
          <p>
            Cater to the production of longer-length videos, typically exceeding
            10 minutes. We expertly craft engaging narratives for documentaries,
            educational videos, and more. From seamless editing and captivating
            visuals to polished sound design, we deliver high-quality
            productions that leave a lasting impact.
          </p>
        </div>
      ),
    },
  },
];

const [longformat, shortformat] = allIngredients;
export const tabs = [longformat, shortformat];

const ServiceTab = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="main_container">
      <nav className="nav">
        <ul className="ul">
          {tabs.map((item) => (
            <li
              key={item?.label}
              className={cn("li ", {
                selected: item === selectedTab,
              })}
              onClick={() => setSelectedTab(item)}
            >
              <div className="flex flex-col justify-center items-center">
                <div>{item?.icon}</div>
                <div className="text-center">{item?.label}</div>
              </div>

              {item === selectedTab ? (
                <MotionDiv className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence mode="wait">
        <MotionDiv
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="tab_container"
        >
          <div>
            {selectedTab ? (
              <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
                <div className="w-full">
                  <Image
                    src={selectedTab.content.image}
                    alt={selectedTab.label}
                    width={1000}
                    height={1000}
                    className="rounded-md w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl mb-2 font-semibold text-white">
                    {selectedTab.content.title}
                  </h3>
                  <div className="text-gray-200">
                    {selectedTab.content.description}
                  </div>
                </div>
              </div>
            ) : (
              "😋"
            )}
          </div>
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
};

export default ServiceTab;

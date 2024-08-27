"use client";
import React, { useState } from "react";
import { MotionDiv } from "@/framer-motion/elements";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import "./service.css";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

import AudienceSize from "@/assets/services/audience-size-graphic.png";
import HoursSaved from "@/assets/services/hours-saved-graphic.png";
import WatchTime from "@/assets/services/watch-time-graphic.png";

export const allIngredients = [
  {
    icon: <CalendarDays size={18} />,
    label: "Content Strategy",
    content: {
      image: AudienceSize,
      title: "Create With Intent",
      description: (
        <div>
          <p>
            All of our packages include a bespoke content strategy, personalised
            to your goals. We take the time to understand your brand and ideal
            audience, as well as what’s working on the major platforms, to map
            out your content funnel.
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
      title: "Streamline Production",
      description: (
        <div>
          <p>
            Our specialist team can handle the production of your podcast, or
            take YouTube video editing responsibilities, so that all you need to
            do is film content. Perhaps you are already monetised and you’re
            excited about the prospect of doubling down to scale further.
          </p>
        </div>
      ),
    },
  },
  {
    icon: <CalendarDays size={18} />,
    label: "Short-Form-Content",
    content: {
      image: WatchTime,
      title: "Copywriting and Clips",
      description: (
        <div>
          <p>
            We establish your tone of voice with captivating copywriting that
            converts, unlocking a goldmine of content that will educate your
            audience.
          </p>
          <br />
          <p>
            Keeping people watching until the end is a science. We produce
            engaging clips in your branding and prepare scripts to help you
            efficiently batch film native content.
          </p>
        </div>
      ),
    },
  },
];

const [tomato, lettuce, cheese] = allIngredients;
export const tabs = [tomato, lettuce, cheese];

const ServiceTab = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="main_container">
      <nav className="nav">
        <ul className="ul">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={cn("li", {
                selected: item === selectedTab,
              })}
              onClick={() => setSelectedTab(item)}
            >
              <div className="flex flex-col justify-center items-center">
                <div>{item.icon}</div>
                <div className="text-center">{item.label}</div>
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

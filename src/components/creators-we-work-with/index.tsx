"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import Instagram from "@/assets/social/instagram.svg";
import Facebook from "@/assets/social/facebook.svg";
import Tiktok from "@/assets/social/tiktok.svg";
import YouTube from "@/assets/social/youtube.svg";
import Linkedin from "@/assets/social/linkedin.svg";
import { MotionSection } from "@/framer-motion/elements";
import { bottomSideVariants } from "@/framer-motion/variants";

interface CreatorsProps {
  id: number;
  name: string;
  image: string;
  followers: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    linkedin?: string;
  };
}

const creators: CreatorsProps[] = [
  {
    id: 1,
    name: "Alex Hormozi",
    image: "/creators/Alex-Hormozi.png",
    followers: {
      facebook: "209K",
      instagram: "3.1M",
      youtube: "2.98M",
    },
  },
  {
    id: 2,
    name: "Eric Siu",
    image: "/creators/Eric-Siu.png",
    followers: {
      instagram: "100K",
      youtube: "164K",
      linkedin: "47K",
    },
  },
  {
    id: 4,
    name: "Mumtaheena Toya",
    image: "/creators/Mumtaheena-Chowdhury-Toya.png",
    followers: {
      facebook: "443k",
      instagram: "2.6M",
      tiktok: "1.4M",
    },
  },
  {
    id: 6,
    name: "Sabila Nur",
    image: "/creators/Sabila-Nur.png",
    followers: {
      facebook: "3.7M",
      instagram: "3.3M",
    },
  },
  {
    id: 7,
    name: "Sunehra Tasnim",
    image: "/creators/Sunehra-Tasnim.png",
    followers: {
      facebook: "645K",
      instagram: "594K",
      youtube: "59k",
    },
  },
  {
    id: 8,
    name: "Fatema Tuz ZOHRA",
    image: "/creators/ZOHRA.png",
    followers: {
      facebook: "180K",
      instagram: "235K",
    },
  },
  {
    id: 9,
    name: "Shoumik Ahmed",
    image: "/creators/Shoumik-Ahmed.png",
    followers: {
      facebook: "227K",
      instagram: "375K",
    },
  },
  {
    id: 9,
    name: "SHARIAAH SHAHNAZ",
    image: "/creators/SHARIAAH-SHAHNAZ.png",
    followers: {
      facebook: "1K",
      instagram: "92.9K",
    },
  },
];

export default function CreatorsWeWorkWith() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div>
        <h2 className="heading_1 !uppercase ">Creators We Have Worked With</h2>
      </div>
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        loop={true}
        speed={2000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        freeMode={{
          enabled: true,
        }}
        className="!overflow-visible"
      >
        {[...creators, ...creators].map((creator, index) => (
          <SwiperSlide key={`${creator.id}-${index}`} className="!w-[280px]">
            <div
              className={`relative aspect-[9/16] overflow-hidden rounded-2xl w-full border-0`}
            >
              <Image
                src={creator.image}
                alt={creator.name}
                width={500}
                height={625}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-5 w-full px-5 z-10">
                <div className="w-full flex flex-col justify-center items-center text-white">
                  <div className="mb-1">
                    <h6 className="font-bold uppercase">{creator.name}</h6>
                  </div>

                  <div className="flex gap-5">
                    {creator.followers?.facebook && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Facebook}
                          alt="Facebook"
                          width={100}
                          height={100}
                          className="h-5 w-5 object-cover"
                        />
                        <span className="text-gray-300">
                          {creator.followers.facebook}
                        </span>
                      </div>
                    )}
                    {creator.followers?.instagram && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Instagram}
                          alt="Instagram"
                          width={100}
                          height={100}
                          className="h-5 w-5 object-cover"
                        />
                        <span className="text-gray-300">
                          {creator.followers.instagram}
                        </span>
                      </div>
                    )}
                    {creator.followers?.tiktok && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Tiktok}
                          alt="Tiktok"
                          width={100}
                          height={100}
                          className="h-5 w-5 object-cover"
                        />
                        <span className="text-gray-300">
                          {creator.followers.tiktok}
                        </span>
                      </div>
                    )}
                    {creator.followers?.youtube && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={YouTube}
                          alt="YouTube"
                          width={100}
                          height={100}
                          className="h-5 w-5 object-cover"
                        />
                        <span className="text-gray-300">
                          {creator.followers.youtube}
                        </span>
                      </div>
                    )}
                    {creator.followers?.linkedin && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Linkedin}
                          alt="Linkedin"
                          width={100}
                          height={100}
                          className="h-5 w-5 object-cover "
                        />
                        <span className="text-gray-300">
                          {creator.followers.linkedin}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shadow overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-90"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionSection>
  );
}

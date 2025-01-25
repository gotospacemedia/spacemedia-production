import { getVimeoVideo, VimeoResponse } from "@/lib/vimeo";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Fancybox from "../global/fancybox";
import { MotionDiv, MotionH3, MotionSection } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  leftSideVariants,
} from "@/framer-motion/variants";
import { vimeoFolderPath } from "@/constant";

export default async function OurPortfolio() {
  const longFormatVideoresponse = (await getVimeoVideo({
    path: vimeoFolderPath.long_videos,
    per_page: 9,
  })) as VimeoResponse;

  const filterLongVideoData = longFormatVideoresponse.data?.map((long) => {
    return {
      id: long?.video?.pictures?.base_link,
      name: long?.video?.name,
      thumbnail: long?.video?.pictures?.base_link,
      video: long?.video?.link,
    };
  });

  return (
    <MotionSection
      variants={leftSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <MotionDiv variants={fadeInVariants}>
          <h2 className="heading_1">
            Grow Your Community with Compelling Video
          </h2>
        </MotionDiv>
        <MotionDiv
          variants={fadeInVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="mb-4 text-gray-400">
            We help businesses to build a platform to showcase their work. We
            create your videos tailored to your content and audience. With
            crisp, engaging and addictive visuals our team knows how to create a
            compelling narrative of your content videos.
          </p>
        </MotionDiv>

        <div className="mt-16">
          <MotionH3
            variants={fadeInVariants}
            className="text-2xl md:text-3xl font-semibold text-center mb-8"
          >
            Our Portfolio
          </MotionH3>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
                Thumbs: false,
              },
            }}
          >
            <MotionDiv
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 "
            >
              {filterLongVideoData?.map((long) => (
                <MotionDiv
                  variants={fadeInVariants}
                  key={long?.id}
                  className="w-full h-full"
                >
                  <a
                    href={long?.video}
                    data-fancybox="longformat"
                    className="w-full h-full"
                  >
                    <button
                      className={`w-full h-full relative overflow-hidden rounded-2xl  border-0`}
                    >
                      <Image
                        src={long?.thumbnail}
                        alt={long?.name}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                        <div
                          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform hover:scale-110"
                          aria-hidden="true"
                        >
                          <Play className="h-6 w-6" />
                        </div>
                      </div>
                    </button>
                  </a>
                </MotionDiv>
              ))}
            </MotionDiv>
          </Fancybox>
          <br />
          <MotionDiv
            variants={leftSideVariants}
            className="flex justify-center mt-8"
          >
            <Link href={"/portfolio"}>
              <Button className="btn_secondary">View Our Work</Button>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}

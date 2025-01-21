import Fancybox from "@/components/global/fancybox";
import { Play } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

export default async function CaseStudies() {
  const videoList = [
    {
      link: "https://www.youtube.com/watch?v=NyHyoT4QGDg",
    },
    {
      link: "https://www.youtube.com/watch?v=eBySyU43ZbI",
    },
    {
      link: "https://www.youtube.com/watch?v=PXZzsTj97GM",
    },
    {
      link: "https://www.youtube.com/watch?v=9YEbzElZ0dg",
    },
    {
      link: "https://www.youtube.com/watch?v=TvD-QpQvXsQ",
    },
    {
      link: "https://www.youtube.com/watch?v=trbfxFH4e1Y",
    },
    {
      link: "https://www.youtube.com/watch?v=7zrAeY_lr3k",
    },
    {
      link: "https://www.youtube.com/watch?v=GS01vqvbV34",
    },
    {
      link: "https://www.youtube.com/watch?v=vrCHWBPvWzM",
    },
    {
      link: "https://www.youtube.com/watch?v=aXCWKXTsOnk",
    },
    {
      link: "https://www.youtube.com/watch?v=fFvApO3mxlk",
    },
    {
      link: "https://www.youtube.com/watch?v=wg2ip6i3yzs",
    },
    {
      link: "https://www.youtube.com/watch?v=NXaoZqffhYM",
    },
    {
      link: "https://www.youtube.com/watch?v=-BqHaxenwJc",
    },
    {
      link: "https://www.youtube.com/watch?v=Nf-QiLwiaSc",
    },
    {
      link: "https://www.youtube.com/watch?v=fFihSYJckcY",
    },
    {
      link: "https://www.youtube.com/watch?v=nP3HiAa5a3k",
    },
    {
      link: "https://www.youtube.com/watch?v=dg6yOM7GPko",
    },
    {
      link: "https://www.youtube.com/watch?v=5GTE2pc55rY",
    },
  ];

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <section className="section_wrapper text-white">
        <MotionDiv variants={fadeInVariants}>
          <h2 className="heading_1">Case Studies</h2>
        </MotionDiv>
        <MotionDiv
          variants={fadeInVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="mb-4 text-gray-400">
            We help businesses to build a platform to showcase their work. We
            create your videos tailored to your content and audience. With
            crisp, engaging and addictive visuals our team knows how to create a
            compelling narrative of your content videos.
          </p>
        </MotionDiv>

        <MotionDiv variants={bottomSideVariants}>
          {/* Portfolio */}
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Our Portfolio
          </h3>

          <div className="container mx-auto">
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                  Thumbs: false,
                },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {videoList?.map((video) => {
                  const videoId = video?.link.split("=")[1];
                  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                  //   console.log({ videoId, thumbnailUrl });

                  return (
                    <div key={video?.link} className="w-full h-full">
                      <a
                        href={video?.link}
                        data-fancybox="case-studies"
                        className="w-full h-full"
                      >
                        <button
                          className={`w-full h-full relative overflow-hidden rounded-2xl  border-0`}
                        >
                          <Image
                            src={thumbnailUrl}
                            alt={"video"}
                            width={500}
                            height={700}
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
                    </div>
                  );
                })}
              </div>
            </Fancybox>
          </div>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

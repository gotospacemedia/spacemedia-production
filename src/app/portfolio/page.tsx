import Fancybox from "@/components/global/fancybox";
import { Play } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  getVimeoLongFormatVideo,
  getVimeoShortFormatVideo,
  VimeoResponse,
} from "@/lib/vimeo";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

export default async function Portfolio() {
  const shortFormatVideoresponse = (await getVimeoShortFormatVideo(
    {}
  )) as VimeoResponse;
  // console.log(shortFormatVideoresponse);
  const longFormatVideoresponse = (await getVimeoLongFormatVideo(
    {}
  )) as VimeoResponse;
  // console.log({ longFormatVideoresponse });

  const filterShortVideoData = shortFormatVideoresponse.data?.map((short) => {
    return {
      id: short?.video?.pictures?.base_link,
      name: short?.video?.name,
      thumbnail: short?.video?.pictures?.base_link,
      video: short?.video?.link,
    };
  });

  const filterLongVideoData = longFormatVideoresponse.data?.map((long) => {
    return {
      id: long?.video?.pictures?.base_link,
      name: long?.video?.name,
      thumbnail: long?.video?.pictures?.base_link,
      video: long?.video?.link,
    };
  });

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <section className="section_wrapper text-white">
        <MotionDiv variants={fadeInVariants} className="">
          <h2 className="heading_1">Turn your content into a business</h2>
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

          <Tabs defaultValue="short" className="container mx-auto text-white">
            <TabsList className="mb-5">
              <TabsTrigger value="short"> Short Format</TabsTrigger>
              <TabsTrigger value="long"> Long Format</TabsTrigger>
            </TabsList>
            <TabsContent value="short">
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                    Thumbs: false,
                  },
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                  {filterShortVideoData?.map((story) => (
                    <div key={story?.id} className="w-full h-full">
                      <a
                        href={story?.video}
                        data-fancybox="shortformat"
                        className="w-full h-full"
                      >
                        <button
                          className={`w-full h-full relative overflow-hidden rounded-2xl  border-0`}
                        >
                          <Image
                            src={story?.thumbnail}
                            alt={story?.name}
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
                  ))}
                </div>
              </Fancybox>
            </TabsContent>
            <TabsContent value="long">
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                    Thumbs: false,
                  },
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                  {filterLongVideoData?.map((long) => (
                    <div key={long?.id} className="w-full h-full">
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
                  ))}
                </div>
              </Fancybox>
            </TabsContent>
          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

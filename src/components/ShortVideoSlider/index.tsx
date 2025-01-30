import { Play } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { getVimeoVideo, VimeoResponse } from "@/lib/vimeo";
import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";
import Fancybox from "../global/fancybox";
import { connection } from "next/server";

export default async function ShortVideoSlider({
  path,
  per_page = 30,
}: {
  path: string;
  per_page?: number;
}) {
  await connection();

  const response = (await getVimeoVideo({
    path,
    per_page,
  })) as VimeoResponse;

  const filterStoriesData = response?.data?.map((short) => {
    return {
      id: short?.video?.pictures?.base_link,
      name: short?.video?.name,
      thumbnail: short?.video?.pictures?.base_link,
      video: short?.video?.link,
    };
  });

  if (!filterStoriesData.length) return null;

  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-8 overflow-hidden custom_shadow"
    >
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
            Thumbs: false,
          },
        }}
      >
        <Marquee
          gradient
          gradientColor="#131212"
          gradientWidth={50}
          autoFill
          speed={100}
        >
          {filterStoriesData?.map((story) => (
            <div key={story?.id} className="px-2">
              <a
                href={story?.video}
                data-fancybox="shortSlider"
                className="w-full h-full"
              >
                <button
                  className={`!w-[280px] relative overflow-hidden rounded-2xl border-0`}
                >
                  <Image
                    src={story?.thumbnail}
                    alt={story?.name}
                    width={700}
                    height={1000}
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
        </Marquee>
      </Fancybox>
    </MotionSection>
  );
}

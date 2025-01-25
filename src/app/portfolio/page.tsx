import Image from "next/image";
import { Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import { vimeoFolderPath, type VimeoFolderKey } from "@/constant";
import { getVimeoVideo, type VimeoResponse } from "@/lib/vimeo";
import Fancybox from "@/components/global/fancybox";
import { useMemo, memo } from "react";

const folderKeys = Object.keys(vimeoFolderPath) as VimeoFolderKey[];

export default function Portfolio() {
  const memoizedFolderKeys = useMemo(() => folderKeys, []);

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
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Our Portfolio
          </h3>

          <Tabs
            defaultValue={memoizedFolderKeys[0]}
            className="container mx-auto text-white"
          >
            <ScrollArea className="w-full max-w-max mx-auto">
              <TabsList className="inline-flex h-16 items-center justify-start bg-transparent p-0">
                {memoizedFolderKeys.map((folder) => (
                  <TabsTrigger
                    key={folder}
                    value={folder}
                    className="capitalize"
                  >
                    {folder.split("_").join(" ")}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {memoizedFolderKeys.map((folder) => (
              <TabsContentWrapper key={folder} folder={folder} />
            ))}
          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

interface VideoItem {
  id: string;
  name: string;
  thumbnail: string;
  video: string;
}

const VideoItem = memo(({ story }: { story: VideoItem }) => (
  <div className="w-full h-full">
    <a href={story.video} data-fancybox="shortformat" className="w-full h-full">
      <button className="w-full h-full relative overflow-hidden rounded-2xl border-0">
        <Image
          src={story.thumbnail || "/placeholder.svg"}
          alt={story.name}
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
));

VideoItem.displayName = "VideoItem";

const TabsContentWrapper = memo(({ folder }: { folder: VimeoFolderKey }) => {
  return (
    <TabsContent key={folder} value={folder}>
      <VideoContent folder={folder} />
    </TabsContent>
  );
});

TabsContentWrapper.displayName = "TabsContentWrapper";

const VideoContent = async ({ folder }: { folder: VimeoFolderKey }) => {
  const vimeoResponse = (await getVimeoVideo({
    path: vimeoFolderPath[folder],
    per_page: 100,
  })) as VimeoResponse;

  const filterVideoData =
    vimeoResponse.data?.map((long) => ({
      id: long?.video?.pictures?.base_link ?? "",
      name: long?.video?.name ?? "",
      thumbnail: long?.video?.pictures?.base_link ?? "",
      video: long?.video?.link ?? "",
    })) ?? [];

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
          Thumbs: false,
        },
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filterVideoData.map((story) => (
          <VideoItem key={story.id} story={story} />
        ))}
      </div>
    </Fancybox>
  );
};

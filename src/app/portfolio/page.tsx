import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import { vimeoFolderPath, type VimeoFolderKey } from "@/constant";
import { useMemo, memo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VideoContent from "@/components/vimeo/VideoContent";

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
                <Link href={"/photography"}>
                  <Button
                    value="photography"
                    className="capitalize bg-transparent border !border-brand_primary hover:bg-brand_primary !text-white"
                  >
                    photography
                  </Button>
                </Link>
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

const TabsContentWrapper = memo(({ folder }: { folder: VimeoFolderKey }) => {
  return (
    <TabsContent key={folder} value={folder}>
      <VideoContent folderPath={vimeoFolderPath[folder] as string} />
    </TabsContent>
  );
});

TabsContentWrapper.displayName = "TabsContentWrapper";

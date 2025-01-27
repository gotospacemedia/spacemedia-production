import { fetchImages } from "@/lib/cloudinary";
import CldImageWrapper from "./CldImageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
} from "@/framer-motion/variants";
import Fancybox from "@/components/global/fancybox";
import { memo } from "react";

const folders = ["products", "fashion"];

export default function Portfolio() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <section className="section_wrapper text-white">
        <MotionDiv variants={bottomSideVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Our Portfolio
          </h3>

          <Tabs
            defaultValue={folders[0]}
            className="container mx-auto text-white"
          >
            <ScrollArea className="w-full max-w-max mx-auto">
              <TabsList className="inline-flex h-16 items-center justify-start bg-transparent p-0">
                {folders.map((folder) => (
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

            {folders.map((folder) => (
              <TabsContentWrapper key={folder} folder={folder} />
            ))}
          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

const TabsContentWrapper = memo(({ folder }: { folder: string }) => {
  return (
    <TabsContent key={folder} value={folder}>
      <VideoContent folder={folder} />
    </TabsContent>
  );
});

TabsContentWrapper.displayName = "TabsContentWrapper";

const VideoContent = async ({ folder }: { folder: string }) => {
  const images = await fetchImages(folder);

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
        {images?.map((image) => (
          <div key={image.asset_id} className="border rounded shadow">
            {/* Use CldImage for optimized Cloudinary delivery */}
            <CldImageWrapper publicId={image.public_id} />
          </div>
        ))}
      </div>
    </Fancybox>
  );
};

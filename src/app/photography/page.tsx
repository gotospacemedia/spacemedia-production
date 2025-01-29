import { fetchImages, type CloudinaryImage } from "@/lib/cloudinary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
} from "@/framer-motion/variants";
import Fancybox from "@/components/global/fancybox";
import MasonryGallery from "@/components/MasonryGallery";

const folders = ["products", "fashion"];

interface FolderImages {
  [key: string]: CloudinaryImage[];
}

async function getFolderImages(): Promise<FolderImages> {
  const imagePromises = folders.map((folder) => fetchImages(folder));
  const results = await Promise.all(imagePromises);
  return folders.reduce((acc, folder, index) => {
    acc[folder] = results[index];
    return acc;
  }, {} as FolderImages);
}

export default async function Portfolio() {
  const folderImages = await getFolderImages();

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
            Our Photography
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
              <TabsContent key={folder} value={folder}>
                <VideoContent images={folderImages[folder]} />
              </TabsContent>
            ))}
          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

function VideoContent({ images }: { images: CloudinaryImage[] }) {
  if (images.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
          Thumbs: false,
        },
      }}
    >
      <MasonryGallery images={images} />
    </Fancybox>
  );
}

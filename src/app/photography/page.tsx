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

interface FolderImages {
  [key: string]: CloudinaryImage[];
}

const FOLDERS = ["products", "fashion"] as const;

async function getFolderImages(): Promise<FolderImages> {
  const results = await Promise.all(FOLDERS.map(fetchImages));
  return Object.fromEntries(
    FOLDERS.map((folder, index) => [folder, results[index]])
  );
}

export default async function Portfolio() {
  const folderImages = await getFolderImages();

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden"
    >
      <section className="section_wrapper text-white">
        <MotionDiv variants={bottomSideVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Our Photography
          </h3>

          <Tabs
            defaultValue={FOLDERS[0]}
            className="container mx-auto text-white"
          >
            <ScrollArea className="w-full max-w-max mx-auto">
              <TabsList className="inline-flex h-16 items-center justify-start bg-transparent p-0">
                {FOLDERS.map((folder) => (
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

            {FOLDERS.map((folder) => (
              <TabsContent key={folder} value={folder}>
                <GalleryContent images={folderImages[folder]} />
              </TabsContent>
            ))}
          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

function GalleryContent({ images }: { images: CloudinaryImage[] }) {
  if (images.length === 0) {
    return <div className="text-center py-8">No images found</div>;
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

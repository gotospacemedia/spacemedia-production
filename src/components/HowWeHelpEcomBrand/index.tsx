import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Fancybox from "../global/fancybox";
import Image from "next/image";
import { Play } from "lucide-react";
import { getVimeoVideoById } from "@/lib/vimeo";

interface CardProp {
  title: string;
  description: string;
  videoId: string;
  quote: {
    author: string;
    comment: string;
  };
}

const data: CardProp[] = [
  {
    title: "Full-service",
    description:
      "Space Media provides everything you need to keep growing. From strategy to new shoots to content optimization, we deliver custom creatives for your brand every week or month. You focus on scaling your brand, we provide the creatives that make it happen.",
    videoId: "1050752130",
    quote: {
      author: "Sunehra Tasnim",
      comment:
        "We have been working with SpaceMedia for a few months now and they are absolutely experts at what they do. Clear communication and top quality content.",
    },
  },
  {
    title: "Content shoot",
    description:
      "Our content shoots deliver exactly the materials your brand needs to keep growing. From video to photography, we handle everything from start to finish so you have a steady stream of converting content that works.",
    videoId: "1050752680",
    quote: {
      author: "Zahid Ahmed Dipu, (Managing Director of SiniCare Bangladesh)",
      comment:
        "We have been working with SpaceMedia for a few months now and they are absolutely experts at what they do. Clear communication and top quality content.",
    },
  },
];

export default async function HowWeHelpEcomBrand() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="Services"
    >
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="heading_1 max-w-[600px] mx-auto text-center">
            How we help creators or brands to scale even more profitably
          </h2>
        </div>

        <MotionDiv variants={containerVariants} className="space-y-10">
          {data.map((card, index) => (
            <CardWrapper key={index} card={card} currentIndex={index} />
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

const CardWrapper = async ({
  card,
  currentIndex,
}: {
  card: CardProp;
  currentIndex: number;
}) => {
  const video = await getVimeoVideoById({ videoId: card.videoId });
  const filterData = {
    id: video?.pictures?.base_link ?? "",
    name: video?.name ?? "",
    thumbnail: video?.pictures?.base_link ?? "",
    video: video?.link ?? "",
  };

  return (
    <MotionDiv variants={fadeInVariants} key={card.title}>
      <Card
        className={cn(
          "border-gray-700 hover:border-gray-600 hover:custom_shadow flex flex-col md:flex-row gap-0",
          {
            "md:flex-row-reverse": (currentIndex + 1) % 2 == 0,
          }
        )}
      >
        <div className="flex-1 p-5">
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
                Thumbs: false,
              },
            }}
          >
            <div className="w-full h-full">
              <a
                href={filterData.video}
                data-fancybox=""
                className="w-full h-full"
              >
                <button
                  className={`!max-w-[400px] !mx-auto relative overflow-hidden rounded-2xl border-0`}
                >
                  <Image
                    src={filterData.thumbnail}
                    alt={filterData.name}
                    width={500}
                    height={700}
                    className="rounded"
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
          </Fancybox>
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle className="text-2xl">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p>{card.description}</p>
            <div className="py-5 flex justify-center">
              <Link href={"/call"}>
                <Button className="btn_primary">Demo call</Button>
              </Link>
            </div>
            <div className="border-l-4 border-brand_primary pl-5 space-y-4">
              <p>{`" ${card.quote.comment} "`}</p>
              <p className="text-gray-400">{card.quote.author}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </MotionDiv>
  );
};

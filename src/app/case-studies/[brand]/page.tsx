import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { caseStudiesList } from "@/constant";
import { cn, generateTabKey } from "@/lib/utils";
import VideoContent from "@/components/vimeo/VideoContent";

// Find brand name
const caseStudiesKeys = caseStudiesList?.map(
  (caseStudy) => caseStudy.brand_name
);

// type definition
type Props = {
  params: Promise<{ brand: string }>;
};

// SSG
export async function generateStaticParams() {
  return caseStudiesList.map((caseStudy) => ({
    brand: generateTabKey(caseStudy.brand_name),
  }));
}

export default async function CaseStudies({ params }: Props) {
  const { brand } = await params;

  // Find the selected case study
  const caseStudy = caseStudiesList?.find(
    (study) => generateTabKey(study?.brand_name) === brand
  );

  // Handle case when no matching case study is found
  if (!caseStudy) {
    redirect(`/case-studies/${generateTabKey(caseStudiesKeys[0])}`);
  }

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <section className="section_wrapper text-white">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Case-Studies
        </h3>

        {/* Tabs navigation */}
        <ScrollArea className="w-full max-w-max mx-auto mb-8">
          <div className="inline-flex gap-5 h-16 items-center justify-start bg-transparent p-0">
            {caseStudiesKeys?.map((key) => (
              <Link href={`/case-studies/${generateTabKey(key)}`} key={key}>
                <Button
                  className={cn(
                    "capitalize bg-transparent border !border-brand_primary hover:bg-brand_primary !text-white",
                    generateTabKey(key) === brand && "bg-brand_primary"
                  )}
                >
                  {key}
                </Button>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Case study content */}
        <section className="section_wrapper">
          <div className="container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10">
            <MotionDiv variants={fadeInVariants} className="flex-1">
              <h2 className="text-2xl md:text-3xl text-center mb-5 capitalize">
                {caseStudy?.title}
              </h2>

              <div className="max-w-3xl mx-auto text-center mb-10">
                <p className="mb-4 text-gray-400">
                  {caseStudy?.description?.paragraph_1}
                </p>
                {caseStudy?.description?.paragraph_2 && (
                  <p className="mb-4 text-gray-400">
                    {caseStudy?.description.paragraph_2}
                  </p>
                )}
              </div>
            </MotionDiv>

            <MotionDiv
              variants={fadeInVariants}
              className="flex flex-col justify-center items-center flex-1"
            >
              {caseStudy?.coverImage && (
                <Link href={caseStudy?.button?.link || "#"} target="_blank">
                  <Image
                    src={caseStudy.coverImage || "/placeholder.svg"}
                    alt={caseStudy.brand_name}
                    width={500}
                    height={300}
                    className="mb-4 rounded-2xl"
                    priority
                  />
                </Link>
              )}

              {caseStudy?.button?.link && (
                <Link href={caseStudy?.button?.link} target="_blank">
                  <Button>{caseStudy?.button.text}</Button>
                </Link>
              )}
            </MotionDiv>
          </div>
        </section>

        {/* Portfolio section */}
        <MotionDiv variants={bottomSideVariants} className="section_wrapper">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Contents
          </h3>

          {caseStudy?.portfolio?.vimeoUrl && (
            <VideoContent folderPath={caseStudy?.portfolio?.vimeoUrl} />
          )}
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

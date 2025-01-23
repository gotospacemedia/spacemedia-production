import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Introduction",
    description:
      "We connect with clients via direct text or phone calls to understand for quick and focused discussion. We discuss their project vision and gather information to determine the best path forward which perfectly aligns with their goals.",
  },
  {
    number: 2,
    title: "Onboarding",
    description:
      "After confirmation, a dedicated specialist will be assigned to your project. We'll begin by conducting a thorough consultation to understand your creative vision, and desired aesthetic. We'll review your references and explore innovative ways to enhance your content, ensuring alignment with your specific requirements.",
  },

  {
    number: 3,
    title: "Post-production",
    description:
      "We deliver professional video production with expert editing, stunning visuals, and immersive sound. Our team adds polished graphics, music, and sound effects, and fine-tunes color grading for a polished look.",
  },
  {
    number: 4,
    title: "Completion",
    description:
      "After delivery, you have space to provide feedback. We make sure everything is exactly in line with your vision and goals. We also welcome video review and correction to ensure the final product meets your expectations perfectly.",
  },
];

export default function OurProcess() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="Process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="heading_1">Our process</h2>
        </div>
        <MotionDiv
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {steps.map((step) => (
            <MotionDiv variants={fadeInVariants} key={step.number}>
              <Card className="border-gray-700 hover:border-gray-600 hover:custom_shadow md:min-h-[355px]  lg:min-h-[300px]">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                    <span className="text-brand_primary">{step.number}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

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
      "We take video and analyze to understand your business better. We start with a conversation to get to know your goals and the obstacles you face. Together, we determine if there's a good fit.",
  },
  {
    number: 2,
    title: "Onboarding",
    description:
      "After agreement, your dedicated contact person will partner with you. As mentioned in our introduction, we'll begin by analyzing your videos, then discuss your vision, and work together to elevate your content.",
  },

  {
    number: 4,
    title: "Post-production",
    description:
      "We deliver professional video production with expert editing, stunning visuals, and immersive sound. Our team adds polished graphics, music, and sound effects, and fine-tunes color grading for a polished look.",
  },
  {
    number: 5,
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
              <Card className="border-gray-700 hover:border-gray-600 hover:custom_shadow">
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

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
      "After you confirm, we'll assign a specialist to your project. He’ll talk to you to understand your vision and style. We'll look at your references and find creative ways to make your content better, making sure it fits your needs.",
  },

  {
    number: 3,
    title: "Production",
    description:
      "Once a date is fixed for shoot,our skilled cinematographer will use professional equipment to capture stunning photos and videos.We collaborate with you to select perfect location if its not a studio shoot.We work closely with you closely throughout the day.",
  },
  {
    number: 4,
    title: "Completion",
    description:
      "Space’s expert editors,edit your videos with high-quality sound and visuals. After It's done, you can give us feedback. We'll make sure everything is perfect and meets your expectations.",
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

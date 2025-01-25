"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Updated FAQ data
const faqData = [
  {
    question: "What services does Space Media offer?",
    answer:
      "We offer a full range of video production services, concept development, filming, editing, animation, and post-production.",
  },
  {
    question: "What types of videos do you specialise in?",
    answer:
      "We specialise in a variety of video formats, including explainer videos, brand videos, product demos, commercials, and social media content.",
  },
  {
    question: "How much do your video production services cost?",
    answer:
      "Our pricing is tailored to each project's specific needs. We offer flexible packages to fit your budget.",
  },
  {
    question: "Can you meet specific deadlines?",
    answer:
      "We understand the importance of meeting deadlines. We'll work closely with you to ensure your project is delivered on time.",
  },
  {
    question: "What is the typical turnaround time for a video project?",
    answer:
      "The turnaround time for a video project depends on the complexity of the project. We'll provide you with a detailed timeline once we have a better understanding of your specific needs.",
  },
];

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (value: string) => {
    setActiveItem((prevState) => (prevState === value ? null : value));
  };

  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="FAQs"
    >
      <MotionDiv
        variants={containerVariants}
        className="max-w-3xl mx-auto text-white"
      >
        <div className="">
          <h2 className="heading_1">Frequently Asked Questions</h2>
        </div>

        <Accordion
          type="single"
          collapsible
          onValueChange={setActiveItem}
          className="space-y-4"
        >
          {faqData.map((faq, index) => {
            const key = `item-${index + 1}`;

            return (
              <MotionDiv variants={fadeInVariants} key={`faq-${index}`}>
                <AccordionItem
                  value={key}
                  className={cn(
                    "border border-gray-700 hover:custom_shadow rounded-lg px-6 bg-background",
                    {
                      custom_shadow: activeItem === key,
                    }
                  )}
                >
                  <AccordionTrigger
                    onClick={() => handleItemClick(key)}
                    className="text-lg font-medium py-6 hover:no-underline"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-400 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </MotionDiv>
            );
          })}
        </Accordion>
      </MotionDiv>
    </MotionSection>
  );
}

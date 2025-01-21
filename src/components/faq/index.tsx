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

// FAQ data
const faqData = [
  {
    question: "What kind of videos do you edit?",
    answer:
      "We edit a wide range of videos, from short-form social media contents such as reels and short YouTube videos to long-form documentaries and corporate videos such as product demonstrations, interviews, and podcasts.",
  },
  {
    question: "How long does the editing process typically take?",
    answer:
      "The turnaround time depends on the length and complexity of the project. However, we strive to deliver high-quality results in a timely manner.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is tailored to the specific needs of each project. We offer flexible packages to accommodate different budgets.",
  },
  {
    question:
      "Do you offer any discounts for bulk orders or long-term projects?",
    answer: "Yes, we offer discounts for bulk orders and long-term projects.",
  },
  {
    question: "How do you communicate with clients?",
    answer:
      "We primarily communicate with clients via email and project management tools. We also offer video conferencing for more complex projects.",
  },
  {
    question: "How involved will I be in the editing process?",
    answer:
      "We encourage client involvement throughout the editing process. We'll provide regular updates and seek your feedback to ensure we meet your expectations.",
  },
  {
    question: "Can you add special effects or animations to my videos?",
    answer:
      "Yes, we can add various special effects and animations to your videos, depending on your specific requirements.",
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

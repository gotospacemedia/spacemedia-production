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
    question: "What services does Space Media offer?",
    answer:
      "We offer a full range of video production services, including concept development, filming, editing, animation, and post-production.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team consists of highly skilled professionals with years of experience in the industry. We have a proven track record of delivering exceptional results.",
  },
  {
    question: "What types of videos do you specialize in?",
    answer:
      "We specialize in a variety of video formats, including explainer videos, brand videos, product demos, commercials, and social media content.",
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
    question:
      "What is your policy on confidentiality and intellectual property rights?",
    answer:
      "We take confidentiality and intellectual property rights very seriously. We'll sign a non-disclosure agreement (NDA) to protect your confidential information.",
  },
  {
    question: "What is the typical turnaround time for a video project?",
    answer:
      "The turnaround time for a video project depends on the complexity of the project. We'll provide you with a detailed timeline once we have a better understanding of your specific needs.",
  },
  {
    question: "What kind of videos do you edit?",
    answer:
      "We edit a wide range of videos, from short-form social media content such as reels and short YouTube videos to long-form documentaries and corporate videos such as product demonstrations, interviews, and podcasts.",
  },
  {
    question: "How long does the editing process typically take?",
    answer:
      "The turnaround time depends on the length and complexity of the project. However, we strive to deliver high-quality results in a timely manner.",
  },
  {
    question:
      "Do you offer any discounts for bulk orders or long-term projects?",
    answer: "Yes, we offer discounts for bulk orders and long-term projects.",
  },
  {
    question: "Can you add special effects or animations to my videos?",
    answer:
      "Yes, we can add various special effects and animations to your videos, depending on your specific requirements.",
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
    question: "What is the process for getting started with Space Media?",
    answer:
      "To get started, simply contact us via our Facebook page, Instagram page, or website.",
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

import React from "react";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";
import SectionHeader from "@/components/shared/SectionHeader";
import FaqCard from "./FaqCard";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
const FAQLIST: FAQ[] = [
  {
    id: 1,
    question: "What results can I expect? 📈",
    answer:
      "Growing an audience online is a long-term investment. We work with our clients in a long-term partnership and operate as a thought partner for your brand. Get in touch to explore the specific results we could achieve for you.",
  },
  {
    id: 2,
    question: "Can you help my startup? 👀",
    answer:
      "Some of our best results have come from founder-first marketing, where we combine personal branding with managing the social media pages of a startup.",
  },
  {
    id: 3,
    question: "Why should I choose Space? 🤔",
    answer:
      "Our clients value the care we take to understand their audience and macro content strategy. We'll plug into your existing systems or create our own to save you time.",
  },
  {
    id: 4,
    question: "Why do you need me to make this a success? 🧰",
    answer:
      "We know you’re short of time and our services are set up to be as streamlined as possible. When working with us you’ll receive same-day responses in Slack meaning we’re always on hand to help you with anything you need.",
  },
  {
    id: 5,
    question: "Do you handle posting and scheduling? 📆",
    answer:
      "Yes! We handle all project management for you and schedule content, or post it manually, depending on what maximizes a post's performance.",
  },
  {
    id: 6,
    question: "Is there a minimum partnership rate? ⏳",
    answer:
      "We prefer to work with you for a minimum of 6 months to see the benefits of our work. Our client base includes creators, founders, and startups who have worked with us for years.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="px-5 lg:px-10  py-10 bg-gradient-to-b from-blue-300  to-blue-300"
    >
      <MotionSection
        variants={sectionVariants({ from: "bottom" })}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <div className=" rounded-xl space-y-5 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-5">
            <SectionHeader
              heading={{
                title: "FAQ",
                extraClass: "bg-gradient-to-b from-blue-300  to-blue-300",
              }}
              description="Some of the questions we get asked the most."
            />
          </div>

          <div className=" space-y-5">
            {FAQLIST.map((faq) => (
              <FaqCard key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default FAQ;

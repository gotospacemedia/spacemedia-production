import { Check, X } from "lucide-react";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  containerVariants,
  fadeInVariants,
  leftSideVariants,
} from "@/framer-motion/variants";
import Logo from "../logo";

export default function ComparisonSectionExact() {
  return (
    <MotionSection
      variants={leftSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="heading_1">
            EditNow goes just that
            <br />
            one step further
          </h2>
        </div>

        <MotionDiv
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-5"
        >
          {/* Other Agencies Column */}
          <MotionDiv variants={fadeInVariants} className="flex-1">
            <Card className="border-gray-700 hover:border-gray-60 hover:custom_shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Other agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Lack of focus on viral strategies can lead to limited viewership, unlike EditNow's proven 200% increase in views.",
                    "May focus on short–term projects and lack long-term client relationships and real time progress tracking.",
                    "May not achieve similar results without strong title optimization.",
                    "Prioritize their own processes over the client’s needs and have extremely long delivery time.",
                    "May lack the expertise in creating compelling hooks and optimizing thumbnails for maximum viewer engagement with low level of retention rate.",
                  ].map((text, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <div className="bg-gray-800 p-1 rounded-full">
                        <X className="h-5 w-5 shrink-0" />
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* EditFlow Column */}
          <MotionDiv variants={fadeInVariants} className="flex-1">
            <Card className="bg-brand_primary/70 hover:bg-brand_primary/80 hover:custom_shadow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <Logo variant="light" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Achieved a 200% views increase within 4 weeks for our clients through data-driven, viral-worthy creative strategies.",
                    "Builds long-term partnerships with clients based on trust and mutual success along with real time progress tracking CRM tools.",
                    "We also help to get 30% More Reach with SEO-optimized titles and tags",
                    "We prioritize the client’s needs and goals first with the record of never missing a deadline.",
                    "EditNow uses Fire Hooks and optimized thumbnails to create captivating content that hooks viewers which leads to a 5x higher engagement and retention rate",
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-background p-1 rounded-full">
                        <Check className="h-5 w-5 shrink-0" />
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

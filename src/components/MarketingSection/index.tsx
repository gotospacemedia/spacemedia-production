import { Button } from "@/components/ui/button";
import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function MarketingSection() {
  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper !py-16"
    >
      <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-12 border border-brand_primary/70 hover:custom_shadow transition-all">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Instead of reading through the details you can also join our demo
            call to be familiarise with our process
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            In a short 30-minute demo call, we&apos;d love to explain more about
            EditNow and the options we can offer your brand.
          </p>
          <Link href={"/call"}>
            <Button className="btn_primary">
              <PhoneCall />
              Demo call
            </Button>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}

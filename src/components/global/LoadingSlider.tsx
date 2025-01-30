import { Skeleton } from "@/components/ui/skeleton";
import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";

export default function LoadingSlider() {
  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-8 overflow-hidden custom_shadow"
    >
      <div className="flex space-x-4 overflow-hidden">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <Skeleton className="w-[280px] h-[400px] rounded-2xl" />
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

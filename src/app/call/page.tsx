import { Suspense } from "react";
import ShortVideoSlider from "@/components/ShortVideoSlider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";

import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";
import MeetingSchedule from "@/components/MeetingSchedule";
import { vimeoFolderPath } from "@/constant";
import LoadingSlider from "@/components/global/LoadingSlider";
import SendGTMEvent from "@/components/GTM/SendGTMEvent";

export default async function DemoCall() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <SendGTMEvent params={{ event: "Contact" }} />

      <MeetingSchedule />
      <GrowingBrandsSlider />
      <Suspense fallback={<LoadingSlider />}>
        <ShortVideoSlider path={vimeoFolderPath.shorts_videos} />
      </Suspense>
    </MotionDiv>
  );
}

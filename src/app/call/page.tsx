import { getVimeoVideo, VimeoResponse } from "@/lib/vimeo";

import ShortVideoSlider from "@/components/ShortVideoSlider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";

import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";
import MeetingSchedule from "@/components/MeetingSchedule";
import { vimeoFolderPath } from "@/constant";

export default async function DemoCall() {
  const response = (await getVimeoVideo({
    path: vimeoFolderPath.shorts_videos,
    per_page: 30,
  })) as VimeoResponse;

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <MeetingSchedule />
      <GrowingBrandsSlider />
      <ShortVideoSlider stories={response?.data} />
    </MotionDiv>
  );
}

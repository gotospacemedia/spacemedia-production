import { getVimeoVideo, type VimeoResponse } from "@/lib/vimeo";
import Fancybox from "@/components/global/fancybox";
import VideoItem from "./VideoItem";

const VideoContent = async ({ folderPath }: { folderPath: string }) => {
  const vimeoResponse = (await getVimeoVideo({
    path: folderPath,
    per_page: 100,
  })) as VimeoResponse;

  const filterVideoData =
    vimeoResponse.data?.map((long) => ({
      id: long?.video?.pictures?.base_link ?? "",
      name: long?.video?.name ?? "",
      thumbnail: long?.video?.pictures?.base_link ?? "",
      video: long?.video?.link ?? "",
    })) ?? [];

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
          Thumbs: false,
        },
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filterVideoData.map((story) => (
          <VideoItem key={story.id} story={story} />
        ))}
      </div>
    </Fancybox>
  );
};

export default VideoContent;

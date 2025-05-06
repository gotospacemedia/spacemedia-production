import { Play } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

interface VideoItem {
  id: string;
  name: string;
  thumbnail: string;
  video: string;
}

const VideoItem = memo(({ story }: { story: VideoItem }) => (
  <div className="w-full h-full">
    <a href={story.video} data-fancybox="shortformat" className="w-full h-full">
      <button className="w-full h-full relative overflow-hidden rounded-2xl border-0">
        <Image
          src={story.thumbnail || "/placeholder.svg"}
          alt={story.name}
          width={500}
          height={700}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform hover:scale-110"
            aria-hidden="true"
          >
            <Play className="h-6 w-6" />
          </div>
        </div>
      </button>
    </a>
  </div>
));

export default VideoItem;

VideoItem.displayName = "VideoItem";

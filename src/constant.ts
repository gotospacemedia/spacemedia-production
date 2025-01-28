export type VimeoFolderKey =
  | "shorts_videos"
  | "long_videos"
  | "product_videos"
  | "fashion"
  | "documentaries";

export const vimeoFolderPath: Record<VimeoFolderKey, string> = {
  shorts_videos: "/users/232053563/projects/23274712/items",
  long_videos: "/users/232053563/projects/23381603/items",
  product_videos: "/users/232053563/projects/23922215/items",
  fashion: "/users/232053563/projects/23922213/items",
  documentaries: "/users/232053563/projects/23922747/items",
};

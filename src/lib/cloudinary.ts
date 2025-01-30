import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryImage {
  asset_id: string;
  public_id: string;
  filename: string;
  width: number;
  height: number;
  aspect_ratio: number;
  secure_url: string;
}

export async function fetchImages(
  folderName: string
): Promise<CloudinaryImage[]> {
  const results = await cloudinary.search
    .expression(`folder:${folderName}/*`)
    .sort_by("created_at", "desc")
    .max_results(500)
    .execute();

  return results.resources;
}

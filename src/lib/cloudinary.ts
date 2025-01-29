import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  asset_id: string;
  width: number;
  height: number;
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

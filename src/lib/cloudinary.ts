import { v2 as cloudinary } from "cloudinary";

export interface CloudinaryImage {
  asset_id: string;
  public_id: string;
  secure_url: string;
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const fetchImages = async (
  folder: string
): Promise<CloudinaryImage[]> => {
  try {
    const { resources } = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("public_id", "desc")
      .max_results(1000)
      .execute();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return resources.map((file: any) => ({
      asset_id: file.asset_id,
      public_id: file.public_id,
      secure_url: file.secure_url,
    }));
  } catch (error) {
    console.error(
      "Error fetching images from Cloudinary:",
      (error as Error).message
    );
    return [];
  }
};

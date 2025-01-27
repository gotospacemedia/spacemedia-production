export interface CloudinaryImage {
  asset_id: string;
  public_id: string;
  secure_url: string;
}

export const fetchImages = async (
  folder: string
): Promise<CloudinaryImage[] | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/cloudinary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folder }),
    });

    if (!response.ok) {
      const errorText = await response.json();
      console.error("Error fetching images:", errorText);
      return null;
    }

    const data: { resources?: CloudinaryImage[] } = await response.json();

    if (data.resources) {
      return data.resources;
    } else {
      console.error("No resources found in the folder.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching images:", (error as Error).message);
    return null;
  }
};

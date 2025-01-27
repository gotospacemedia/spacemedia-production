import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME as string;
  const API_KEY = process.env.CLOUDINARY_API_KEY as string;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET as string;

  const { folder } = await req.json();

  if (!folder) {
    return NextResponse.json(
      { error: "Folder name is required" },
      { status: 400 }
    );
  }

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;

  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: `folder:${folder}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Cloudinary API error: ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

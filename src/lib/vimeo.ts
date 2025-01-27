import { Vimeo } from "vimeo";

export type Story = {
  video: {
    name: string;
    pictures: {
      base_link: string;
    };
    link: string;
  };
};

export type VimeoResponse = {
  data: Story[];
};

export const client = new Vimeo(
  String(process.env.VIMEO_CLIENT_ID),
  String(process.env.VIMEO_CLIENT_SECRET),
  String(process.env.VIMEO_ACCESS_TOKEN)
);

export const getVimeoVideo = ({
  path,
  page = 1,
  per_page = 25,
}: {
  path: string;
  page?: number;
  per_page?: number;
}) => {
  return new Promise((resolve, reject) => {
    client.request(
      {
        method: "GET",
        path,
        query: {
          page,
          per_page,
        },
      },
      function (error, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
};

export const getVimeoVideoById = async ({ videoId }: { videoId: string }) => {
  const accessToken = process.env.VIMEO_ACCESS_TOKEN;
  const url = `https://api.vimeo.com/videos/${videoId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Vimeo thumbnail:", error);
  }
};

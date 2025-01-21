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


export const getVimeoShortFormatVideo = ({ page = 1, per_page = 25 }: { page?: number, per_page?: number }) => {
    return new Promise((resolve, reject) => {
        client.request(
            {
                method: "GET",
                path: `/users/232053563/projects/23274712/items`,
                query: {
                    page,
                    per_page
                }
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

export const getVimeoLongFormatVideo = ({ page = 1, per_page = 25 }: { page?: number, per_page?: number }) => {
    return new Promise((resolve, reject) => {
        client.request(
            {
                method: "GET",
                path: `/users/232053563/projects/23381603/items`,
                query: {
                    page,
                    per_page
                }
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
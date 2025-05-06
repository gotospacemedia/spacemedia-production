import Glow_Lovely from "@/assets/extra/glow_lovely.jpg";
import { StaticImageData } from "next/image";

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

export type CaseStudies = {
  brand_name: string;
  title: string;
  description: {
    paragraph_1: string;
    paragraph_2: string;
  };
  coverImage: StaticImageData;
  button: {
    text: string;
    link: string;
  };
  portfolio: {
    vimeoUrl: string;
  };
};

export const caseStudiesList: CaseStudies[] = [
  // {
  //   brand_name: "Rin",
  //   title: "Boosting Social Media Presence Through Visual Storytelling",
  //   description: {
  //     paragraph_1:
  //       "Rin, a trusted household care brand by Unilever, plays a significant role in the daily lives of consumers. To strengthen their connection with their audience on social media, they sought to create visually rich and engaging content that highlights their product benefits and resonates with their target demographic in the digital sphere.",
  //     paragraph_2:
  //       "We collaborated with Rin to enhance their social media presence through expert video and photo services. Our team conceptualized and executed engaging video shoots and high-quality photo shoots optimized for various social media channels. By focusing on clear messaging and visually appealing content, we helped Rin strengthen their brand storytelling and drive more meaningful engagement with their online audience.",
  //   },
  //   coverImage: PotImage,
  //   button: {
  //     link: "https://www.youtube.com/@PrinceofTravel",
  //   },
  //   portfolio: {
  //     vimeoUrl: "/users/232053563/projects/25067698/items",
  //   },
  // },
  {
    brand_name: "Glow & Lovely",
    title: "Enhancing Social Media Engagement",
    description: {
      paragraph_1:
        "Glow & Lovely, a prominent skincare brand under Unilever, focuses on empowering women and celebrating their natural beauty. To further connect with their audience in the digital space, they aimed to elevate their social media content and create a more engaging online presence that resonates with their community.",
      paragraph_2:
        "We partnered with Glow & Lovely to amplify their social media impact through visually compelling content. Our team delivered professional photo shoots and engaging short video productions specifically tailored for their social media platforms. This included concept development, expert execution, and meticulous post-production to create high-quality visuals that effectively conveyed the brand's message and fostered deeper connections with their online community.",
    },
    coverImage: Glow_Lovely,
    button: {
      text: "View Socials",
      link: "https://www.instagram.com/glowandlovely.bd",
    },
    portfolio: {
      vimeoUrl: "/users/232053563/projects/25054990/items",
    },
  },
];

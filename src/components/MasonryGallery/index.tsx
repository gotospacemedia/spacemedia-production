"use client";

import React from "react";
import Image from "next/image";
import type { CloudinaryImage } from "@/lib/cloudinary";
import "./style.css";

const MasonryGallery = ({ images }: { images: CloudinaryImage[] }) => {
  const getImageClass = (width: number, height: number) => {
    const aspectRatio = width / height;
    if (aspectRatio > 1.5 && width > 5000) return "wide";
    if (aspectRatio < 0.7 && height > 5000) return "tall";
    if (width > 5000 && height > 5000) return "big";
    return "";
  };

  return (
    <div className="grid-wrapper">
      {images.map((image) => {
        const imageClass = getImageClass(image.width, image.height);
        return (
          <div key={image.asset_id} className={imageClass}>
            <a
              href={image.secure_url}
              data-fancybox="photography"
              className="w-full h-full overflow-hidden"
            >
              <Image
                src={image.secure_url || "/placeholder.svg"}
                width={image.width}
                height={image.height}
                alt=""
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGallery;

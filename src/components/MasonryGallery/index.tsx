"use client";

import "./style.css";
import { useRef, useCallback } from "react";
import { CldImage } from "next-cloudinary";
import { useInView } from "framer-motion";
import type { CloudinaryImage } from "@/lib/cloudinary";
import { MotionDiv } from "@/framer-motion/elements";

const MasonryGallery = ({ images }: { images: CloudinaryImage[] }) => {
  const getImageClass = useCallback((aspect_ratio: number) => {
    if (aspect_ratio < 0.75) return "tall";
    if (aspect_ratio > 1.3 && aspect_ratio <= 1.7) return "wide";
    if (aspect_ratio > 1.7) return "big";
    return "";
  }, []);

  return (
    <div className="grid-wrapper">
      {images?.map((image) => (
        <ImageCard
          key={image.asset_id}
          image={image}
          getImageClass={getImageClass}
        />
      ))}
    </div>
  );
};

const ImageCard = ({
  image,
  getImageClass,
}: {
  image: CloudinaryImage;
  getImageClass: (aspect_ratio: number) => string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const imageClass = getImageClass(image.aspect_ratio);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <MotionDiv
      ref={ref}
      className={`card ${imageClass}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <a
        href={image.secure_url}
        data-fancybox="photography"
        className="w-full h-full overflow-hidden block"
        aria-label={`View full size image: ${image.filename}`}
      >
        <MotionDiv
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <CldImage
            width={image.width}
            height={image.height}
            src={image.public_id}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={image.filename}
            className="w-full h-full object-cover"
          />
        </MotionDiv>
      </a>
    </MotionDiv>
  );
};

export default MasonryGallery;

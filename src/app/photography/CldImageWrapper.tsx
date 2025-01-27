"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

const CldImageWrapper = ({ publicId }: { publicId: string }) => {
  return (
    <div>
      <a href={""} data-fancybox="shortformat" className="w-full h-full">
        <CldImage
          src={publicId} // Use public_id from Cloudinary
          width="500" // Set desired width
          height="500" // Set desired height
          crop="fill" // Optional: Specify crop type (e.g., fill, fit)
          alt={publicId} // Provide alt text
          className=""
        />
      </a>
    </div>
  );
};

export default CldImageWrapper;

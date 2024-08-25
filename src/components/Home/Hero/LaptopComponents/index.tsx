import React from "react";
import Image from "next/image";
import LaptopMockUp from "@/assets/laptop-mockup.png";

const LaptopComponents = () => {
  return (
    <div className="z-[2] max-w-[800px] ml-auto mr-auto relative">
      <div className="w-auto h-auto mt-[3%] ml-auto mr-auto absolute top-[3%] right-[0%] left-[0%] bottom-auto">
        <div className="w-auto h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="z-[2] w-[76%] h-auto ml-auto mr-auto pt-[0%] block"
          >
            <source
              src="https://henry-webflow-assets.s3.amazonaws.com/AMPLIFY+VIDEO.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <Image
        src={LaptopMockUp}
        width={500}
        height={500}
        alt="LaptopMockUp"
        className="w-full h-full"
      />
    </div>
  );
};

export default LaptopComponents;

import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  {
    id: 1,
    brand_name: "Amira",
    brand_logo: "/growing-brands/Amira.png",
  },

  {
    id: 2,
    brand_name: "Blucheez",
    brand_logo: "/growing-brands/blucheez.png",
  },

  {
    id: 3,
    brand_name: "Defclo",
    brand_logo: "/growing-brands/Defclo.png",
  },

  {
    id: 4,
    brand_name: "FAL",
    brand_logo: "/growing-brands/FAL.png",
  },

  {
    id: 5,
    brand_name: "FREE-JEANS-WATERMARK",
    brand_logo: "/growing-brands/FREE-JEANS-WATERMARK.png",
  },
  {
    id: 6,
    brand_name: "Greenview",
    brand_logo: "/growing-brands/green-view.png",
  },
  {
    id: 7,
    brand_name: "Jumpfactor",
    brand_logo: "/growing-brands/jumpfactor.png",
  },
  {
    id: 8,
    brand_name: "MD-and-SONS",
    brand_logo: "/growing-brands/MD-and-SONS.png",
  },
  {
    id: 9,
    brand_name: "Ombre",
    brand_logo: "/growing-brands/ombre-studio.png",
  },
  {
    id: 10,
    brand_name: "Sinicare",
    brand_logo: "/growing-brands/sinicare.png",
  },
  {
    id: 11,
    brand_name: "Sleek",
    brand_logo: "/growing-brands/sleek.png",
  },
  {
    id: 12,
    brand_name: "Sprezzatura",
    brand_logo: "/growing-brands/sprezzatura.png",
  },
  {
    id: 13,
    brand_name: "yoyoso",
    brand_logo: "/growing-brands/yoyoso.png",
  },
  {
    id: 14,
    brand_name: "Unilever",
    brand_logo: "/growing-brands/unilever.png",
  },
];

export default function GrowingBrandsSlider() {
  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex flex-col md:flex-row gap-5 justify-center items-center py-10 overflow-hidden"
    >
      <div className="md:ml-10 lg:ml-40">
        <p className="text-center md:text-start text-gray-400 min-w-[200px]">
          Collaborated with the <br /> fastest-growing brands
        </p>
      </div>
      <Marquee
        gradient
        gradientColor="#131212"
        autoFill
        gradientWidth={20}
        speed={100}
      >
        {[...brands].map((brand) => (
          <div
            key={String(Math.random() * brand.id + 2000)}
            className="px-5 md:px-8"
          >
            <Image
              src={brand?.brand_logo}
              alt={brand?.brand_name}
              width={300}
              height={300}
              className="w-[120px] md:w-[150px] lg:w-[160px] object-cover"
            />
          </div>
        ))}
      </Marquee>
    </MotionSection>
  );
}

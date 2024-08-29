import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/framer-motion/elements";
import {
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import { Facebook, Instagram } from "lucide-react";
import { Separator } from "../ui/separator";
import Logo from "@/assets/logo.svg";

const Footer = () => {
  const mail = "hello@spacemediaproduction.com";

  return (
    <div className="bg-blue-200 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto p-5 md:px-8 space-y-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
          <MotionDiv
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Link href={"/"} className="select-none">
              <Image
                src={Logo}
                alt="SpaceMediaProduction Logo"
                width={300}
                height={300}
                className="w-[120px] h-[60px]"
              />
            </Link>
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
          >
            <p className="text-sm">
              Say hello 👋 →{" "}
              <a
                href={`mailto:${mail}?subject=Inquiry%20about%20your%20services&body=Hello`}
              >
                {mail}
              </a>
            </p>
          </MotionDiv>

          <MotionDiv
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            className="flex gap-5"
          >
            <Link target="_blank" href={"https://www.facebook.com/"}>
              <Facebook className="hover:text-[#0863F7]" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/"}>
              <Instagram className="hover:text-[#F70988]" />
            </Link>
          </MotionDiv>
        </div>

        <Separator className="bg-black/50" />

        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          className="py-1"
        >
          <p className="text-center text-sm">
            © {new Date().getFullYear()} SpaceMediaProduction Ltd.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Footer;

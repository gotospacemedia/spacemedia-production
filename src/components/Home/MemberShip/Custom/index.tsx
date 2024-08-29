"use client";

import React from "react";
import { Plus } from "lucide-react";
import MemberShipCard from "../MemberShipCard/index";
import { Separator } from "@/components/ui/separator";
import Buttton from "@/components/shared/Buttton";
import {
  CardSubTitle,
  CardTitle,
  ServiceList,
} from "../MemberShipCard/components";

const content = {
  title: "Custom 🔥",
  subTitle: "Bespoke pricing to your needs",
  services: [
    "Personalized content strategy",
    "Short-form clips and motion graphics",
    "YouTube editing and thumbnail",
    "Podcast production and distribution",
    "Social media management",
  ],
};

const CustomPlan = () => {
  return (
    <div className="h-full">
      <MemberShipCard className="bg-gradient-to-br from-blue-400 to-purple-100 h-full">
        <CardTitle>{content.title}</CardTitle>
        <CardSubTitle>{content.subTitle}</CardSubTitle>
        <div className="space-y-3">
          <Separator />
          <ServiceList list={content.services} icon={<Plus size={16} />} />
        </div>
        <div>
          <p className="text-base">
            We are an attentive team, committed to achieving your goals as a
            partner.
          </p>
        </div>
        <div className="flex gap-10 py-2">
          <Buttton className="px-5 py-2 text-xs bg-transparent hover:bg-transparent border hover:text-blue-950 border-white">
            Book a Call
          </Buttton>
        </div>
      </MemberShipCard>
    </div>
  );
};

export default CustomPlan;

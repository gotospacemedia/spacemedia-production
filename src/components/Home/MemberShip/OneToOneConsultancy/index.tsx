"use client";

import React from "react";
import MemberShipCard from "../MemberShipCard/index";
import { Separator } from "@/components/ui/separator";
import Buttton from "@/components/shared/Buttton";
import { CardTitle } from "../MemberShipCard/components";

const OneToOneConsultancy = () => {
  return (
    <div className="h-full">
      <MemberShipCard className="bg-gradient-to-br from-blue-400 to-purple-100 h-full">
        <CardTitle>1-1 Consultancy 📝</CardTitle>
        <div className="space-y-3">
          <Separator />
          <p className="">Limited spaces. Book now to avoid disappointment.</p>
        </div>

        <Buttton className="px-5 py-2 text-xs">Book Now</Buttton>

        <br />
        <br />

        <CardTitle>Refer & Earn 🤝</CardTitle>
        <div className="space-y-3">
          <Separator />
          <p className="">Earn for every successful referral to Amplify.</p>
        </div>

        <div className="flex gap-10 py-2">
          <Buttton className="px-5 py-2 text-xs bg-transparent hover:bg-transparent border hover:text-blue-950 border-white">
            Join Now
          </Buttton>
        </div>
      </MemberShipCard>
    </div>
  );
};

export default OneToOneConsultancy;

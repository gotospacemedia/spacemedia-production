"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import MemberShipCard from "../MemberShipCard/index";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Buttton from "@/components/shared/Buttton";
import {
  CardPriceHandler,
  CardTitle,
  ServiceList,
} from "../MemberShipCard/components";

const content = {
  title: "Short-Form 🎥",
  aggrements: {
    monthly: {
      price: 3495,
      switchLabel: "Monthly",
      footerText: "Paid monthly. Cancel anytime.",
    },
    quarterly: {
      price: 2995,
      switchLabel: "3 Months",
      footerText: "Paid quarterly. Rolling 3 month term",
    },
  },
  services: [
    "Motion graphics and animations",
    "Bespoke branding",
    "Clip script preparation",
    "7-day turnarounds (48-hours +$250)",
    "Dedicated account manager",
    "Same-day Slack responses",
    "Posting and scheduling",
  ],
};

const ShortForm = () => {
  const [paidPlan, setPaidPlan] = useState<"monthly" | "quarterly">("monthly");

  const start_price =
    paidPlan === "monthly"
      ? content.aggrements["quarterly"].price
      : content.aggrements["monthly"].price;

  const end_price =
    paidPlan === "monthly"
      ? content.aggrements["monthly"].price
      : content.aggrements["quarterly"].price;

  const save_price = start_price - end_price;

  console.log({ start_price, end_price, save_price });

  return (
    <div className="h-full">
      <div className="flex justify-center items-center gap-5 h-[60px]">
        <Switch
          name="plan"
          id="plan"
          checked={paidPlan === "quarterly"}
          onCheckedChange={() => {
            const plan = paidPlan === "quarterly" ? "monthly" : "quarterly";
            setPaidPlan(plan);
          }}
        />
        <Label htmlFor="plan" className="min-w-[100px] text-base">
          {content.aggrements[paidPlan].switchLabel}
        </Label>
      </div>

      <div className="h-[calc(100%-50px)]">
        <MemberShipCard
          badge_text={save_price > 0 ? `SAVE $${500}` : ""}
          // popular
          className="bg-gradient-to-br from-blue-400 to-purple-100 h-full"
        >
          <CardTitle>{content.title}</CardTitle>
          <div className="space-y-3">
            <CardPriceHandler start_price={start_price} end_price={end_price} />
            <Separator />
            <ServiceList list={content.services} icon={<Check size={16} />} />
          </div>
          <div className="flex gap-10 py-2">
            <Buttton className="px-5 py-2 text-xs">Get Started</Buttton>
            <Buttton className="px-5 py-2 text-xs bg-transparent hover:bg-transparent border hover:text-blue-950 border-white">
              Book a Call
            </Buttton>
          </div>
          <div>
            <p className="text-xs">{content.aggrements[paidPlan].footerText}</p>
          </div>
        </MemberShipCard>
      </div>
    </div>
  );
};

export default ShortForm;

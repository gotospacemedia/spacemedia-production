"use client";

import { ViralCardProps } from ".";
import { Card } from "../ui/card";

export default function ViralCard({ cardData }: { cardData: ViralCardProps }) {
  return (
    <Card className="min-h-[370px]  w-full relative group  border border-brand_primary/70  hover:border-brand_primary/95 transition-all rounded-2xl  overflow-hidden">
      <div className="absolute inset-0 transition-all duration-300 ease-in-out overflow-hidden bg-transparent">
        {/* Default state - black background */}
        <div className="absolute inset-0 bg-transparent p-6 flex flex-col items-center justify-between text-white group-hover:opacity-0 transition-opacity duration-300 overflow-hidden">
          <div className="w-full border-b border-white ">
            <h2 className="text-center uppercase text-4xl font-bold tracking-wider mb-2">
              {cardData.title}
            </h2>
          </div>
          <div className="text-center">
            <div className="text-8xl font-bold mb-2">{cardData.percentage}</div>
            <div className="text-3xl uppercase font-bold tracking-wider">
              {cardData.subtitle}
            </div>
          </div>
          <div />
        </div>

        {/* Hover state */}
        <div className="absolute inset-0 bg-brand_primary p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
          <div className="w-full border-b border-black mb-8">
            <h2 className="text-center uppercase text-4xl font-bold tracking-wider mb-2 text-black">
              {cardData.title}
            </h2>
          </div>
          <div>
            <p className="text-black capitalize text-lg leading-relaxed">
              {cardData.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

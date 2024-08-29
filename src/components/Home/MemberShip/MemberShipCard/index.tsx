import React from "react";
import { cn } from "@/lib/utils";

const MemberShipCard = ({
  children,
  className,
  badge_text,
  popular = false,
}: {
  children: React.ReactNode;
  className?: string;
  badge_text?: string;
  popular?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-5 hover:scale-105 transition-all duration-200 relative overflow-hidden",
        className
      )}
    >
      {badge_text ? (
        <div className="absolute top-0 right-0 bg-white rounded-bl-xl rounded-tr-xl p-2 text-sm font-semibold">
          {badge_text}
        </div>
      ) : popular ? (
        <div className="absolute top-[46px] right-[-45px] bg-white p-2 text-sm font-semibold uppercase rotate-[-90deg] rounded-bt-lg">
          Most Popular
        </div>
      ) : null}

      <div className="space-y-5">{children}</div>
    </div>
  );
};

export default MemberShipCard;

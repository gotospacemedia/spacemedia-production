import React, { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  heading: {
    Tag?: ElementType;
    title: string;
    extraClass?: string;
  };
  description?: string;
  children?: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading: { Tag: HeadingTag = "h3", title, extraClass },
  description,
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="rounded-xl p-1.5 relative bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 animate-moveBg  max-w-max">
        <HeadingTag
          className={cn(
            "bg-white rounded-xl px-10 py-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold",
            extraClass
          )}
        >
          {title}
        </HeadingTag>
      </div>

      <p className="text-gray-600 max-w-2xl text-center">{description}</p>

      <div>{children}</div>
    </div>
  );
};

export default SectionHeader;

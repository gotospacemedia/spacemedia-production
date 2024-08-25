import React from "react";
import { cn } from "@/lib/utils";

const Buttton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "bg-blue-900 hover:bg-blue-950 hover:scale-105 transition-all duration-200 px-3 py-1.5 rounded-full text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Buttton;

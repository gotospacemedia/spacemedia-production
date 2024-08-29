import { cn } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h4 className={cn("text-2xl md:text-3xl font-bold", className)}>
      {children}
    </h4>
  );
};

export const CardSubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="text-xl md:text-2xl font-semibold">{children}</h5>;
};

export const CardPriceHandler = ({
  start_price,
  end_price,
}: {
  start_price: number;
  end_price: number;
}) => {
  return (
    <div className="flex gap-10">
      <div className="flex gap-2">
        <div className="text-2xl font-semibold">
          <span>$</span>
          <span>
            <CountUp start={start_price} end={end_price} duration={1} />
          </span>
        </div>
        <div>
          <span>/month</span>
        </div>
      </div>
      {start_price > end_price && (
        <div className="line-through text-gray-500 text-lg mt-[-8px]">
          <span>$</span>
          <span>{start_price}</span>
        </div>
      )}
    </div>
  );
};

export const ServiceList = ({
  list,
  icon,
}: {
  list: string[];
  icon?: React.ReactNode;
}) => {
  return (
    <ul>
      {list.map((service) => (
        <li key={service} className="flex items-center gap-2">
          <span>{icon}</span>
          <span>{service}</span>
        </li>
      ))}
    </ul>
  );
};

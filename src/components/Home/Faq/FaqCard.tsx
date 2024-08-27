import React from "react";
import { CircleMinus, RotateCcw } from "lucide-react";
import { FAQ } from ".";
import "./card.css";

const FaqCard = ({ faq }: { faq: FAQ }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h5>{faq.question}</h5>
          <div className="">
            <RotateCcw size={20} />
          </div>
        </div>
        <div className="flip-card-back">
          <p className="">{faq.answer}</p>
          <div className="">
            <CircleMinus size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;

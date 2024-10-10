import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const clientList = [
  {
    header: {
      images: [
        "https://cdn.prod.website-files.com/636c294e93d67dd5dc049753/63974ef0c30528298970ec64_sahil.jpeg",
      ],
      clientName: "SAHIL BLOOM",
      clientProfession: "Investor, Enterpreneur, Creator",
    },
    body: {
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci alias praesentium doloremque, cum repellat conseodi eos unde cumque quas consequuntur sed ut voluptatum deleniti inventore aliquam fuga, corrupti molestias delectus. Repellat tempora ad minima assumenda sit quia necessitatibus a officiis repudiandae illo facere saepe id qui non, voluptates eveniet, natus eligendi temporibus placeat atque ex dolor consectetur soluta fugit. Ipsam?",
    },
    widget: <div></div>,
  },
];

const ClientInfo = () => {
  return (
    <div className="px-5 lg:px-10 py-36 md:p-20  bg-gradient-to-b from-[#0F1359]  to-[#156EC5] overflow-hidden">
      <Card />
    </div>
  );
};

export default ClientInfo;

const Card = () => {
  return (
    <div>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

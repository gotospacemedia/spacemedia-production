"use client";
import { cn } from "@/lib/utils";
import React from "react";
import ReactPlayer from "react-player/youtube";

const OurHappyClients = () => {
  const clientList = [
    {
      clientName: "Ali Abdal",
      clientShortDescription: "YouTuber, 4 million subscribers",
      videoUrl: "https://www.youtube.com/watch?v=mabYmE6Pepw",
    },
    {
      clientName: "Chris Williamson",
      clientShortDescription: "Podcaster, 200 million+ downloads",
      videoUrl: "https://www.youtube.com/watch?v=xDtBX0VBSIQ",
    },
    {
      clientName: "KharmaMedic",
      clientShortDescription: "YouTuber, 1 million subscribers",
      videoUrl: "https://www.youtube.com/watch?v=NYU75EVlWGA",
    },
  ];

  return (
    <div className="px-5 lg:px-10  py-10 bg-gradient-to-b from-blue-300  to-blue-300">
      <div className="space-y-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-4xl"> 🥳 </div>
          <h3 className="text-center  text-2xl">Our Happy Clients</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {clientList.map((client, index) => (
            <div
              key={client.clientName}
              className={cn("space-y-5", {
                "md:col-span-2":
                  clientList.length % 2 !== 0 &&
                  index + 1 === clientList.length,
              })}
            >
              <div className="aspect-video rounded-3xl overflow-hidden">
                <ReactPlayer width="100%" height="100%" url={client.videoUrl} />
              </div>

              <div className="flex flex-col justify-center items-center">
                <p className="text-xl  md:text-2xl text-center font-semibold">
                  {client.clientName}
                </p>
                <p className="text-sm text-center font-semibold">
                  {client.clientShortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurHappyClients;

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import {
  Shirt,
  ShoppingBag,
  Youtube,
  Film,
  Mic,
  GraduationCap,
  Sparkles,
  Building,
  Users,
  Calendar,
} from "lucide-react";

const categories = [
  {
    title: "Short Format Videos",
    items: [
      { name: "Fashion", icon: Shirt },
      { name: "Product", icon: ShoppingBag },
      { name: "LifeStyle", icon: Sparkles },
      { name: "Beauty", icon: Sparkles },
    ],
  },
  {
    title: "Long Format Videos",
    items: [
      { name: "Documentaries", icon: Film },
      { name: "Podcast", icon: Mic },
      { name: "YouTube Videos", icon: Youtube },
      { name: "Education", icon: GraduationCap },
    ],
  },
  {
    title: "Photography",
    items: [
      { name: "Fashion", icon: Shirt },
      { name: "Product", icon: ShoppingBag },
      { name: "LifeStyle", icon: Sparkles },
      { name: "Beauty", icon: Sparkles },
    ],
  },
  {
    title: "Corporate",
    items: [
      { name: "Events", icon: Calendar },
      { name: "Documentaries", icon: Film },
      { name: "Real Estate", icon: Building },
      { name: "Testimonial", icon: Users },
    ],
  },
];

export default function ServicesWeOffer() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="Services"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="heading_1">Services We Offer</h2>
        </div>
        <MotionDiv
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2"
        >
          {categories.map((category) => (
            <MotionDiv variants={fadeInVariants} key={category.title}>
              <Card className="border-gray-700 hover:border-gray-600 hover:custom_shadow">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col justify-center items-center lg:flex-row lg:justify-start p-4 bg-zinc-900 rounded-lg"
                      >
                        <item.icon className="w-6 h-6 mr-2 text-primary" />
                        <span className="text-center">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

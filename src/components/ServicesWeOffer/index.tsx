"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import {
  Apple,
  Briefcase,
  Dumbbell,
  Film,
  Gamepad2,
  Music,
  Palmtree,
  Shirt,
  ShoppingBag,
  Youtube,
  Utensils,
  Camera,
  Smartphone,
  GraduationCap,
  Mic,
  Clapperboard,
} from "lucide-react";

const categories = [
  {
    title: "Short Format Videos",
    items: [
      { name: "Fitness", icon: Dumbbell },
      { name: "Lifestyle", icon: Palmtree },
      { name: "Gaming", icon: Gamepad2 },
      { name: "Fashion", icon: Shirt },
      { name: "Social Reels", icon: Smartphone },
      { name: "Music", icon: Music },
      { name: "Product Videos", icon: ShoppingBag },
      { name: "Food", icon: Utensils },
    ],
  },
  {
    title: "Long Format Videos",
    items: [
      { name: "Vlogs", icon: Camera },
      { name: "Nutrition", icon: Apple },
      { name: "Entrepreneurship", icon: Briefcase },
      { name: "Documentaries", icon: Film },
      { name: "Podcasts", icon: Mic },
      { name: "Short Films", icon: Clapperboard },
      { name: "YouTube Videos", icon: Youtube },
      { name: "Education", icon: GraduationCap },
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
                        className="flex items-center p-4 bg-zinc-900 rounded-lg"
                      >
                        <item.icon className="w-6 h-6 mr-2 text-primary" />
                        <span>{item.name}</span>
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

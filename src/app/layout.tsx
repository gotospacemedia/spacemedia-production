import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";

import "./globals.css";

const visby = localFont({
  src: [
    {
      path: "../Fonts/VisbyThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Fonts/VisbySemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyExtrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyHeavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "EditNow",
  description:
    "We are EditNow, a video editing service provider dedicated to transforming your creative visions into stunning reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${visby.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

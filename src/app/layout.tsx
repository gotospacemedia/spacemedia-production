import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpaceMediaProduction",
  description:
    "Transforming visions into reality, SpaceMediaProduction specializes in high-quality video, and multimedia production. From concept to completion, we deliver compelling stories with creativity, precision, and cutting-edge technology. Partner with us for innovative content that captivates and inspires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

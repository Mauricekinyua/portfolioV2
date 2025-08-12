import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";

const geist =Geist({
    subsets: ['latin']
});
export const metadata: Metadata = {
  title: "Maurice Muchiri",
  description: "Come and get to know me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}

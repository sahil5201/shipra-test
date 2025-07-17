import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import QueryProvider from "@/components/providers/query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shipra",
  description: "Shipra Front-End Developer Test Task - Sahil Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        <QueryProvider>
          <ScrollArea className="h-dvh w-dvw">
            <Header />
            <Navbar />
            <div className="bg-[#F9F9F9] py-3">
              <div className="container-screen w-full mx-3">
                {children}
              </div>
            </div>
          </ScrollArea>
        </QueryProvider>
      </body>
    </html>
  );
}

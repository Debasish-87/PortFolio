import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDET / Quality Engineer Portfolio",
  description: "Professional portfolio showcasing cloud, DevOps, and security expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

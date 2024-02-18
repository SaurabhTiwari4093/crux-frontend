import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crux",
  description: "This app lets the employer find the most suitable candidates amongst a list of resumes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-gray-800">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

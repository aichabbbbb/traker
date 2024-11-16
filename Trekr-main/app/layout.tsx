import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PopupManager from "./Components/SideBarMenu/PopupManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trekr Website",
  description: "Trekr Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupManager /> 
        {children}
      </body>
    </html>
  );
}

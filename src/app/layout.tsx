import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar/NavBar";
import { ReduxProvider } from "@/lib/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prompton Gist",
  description: "AI Chat Ready Prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-mainBg p-0 m-0 h-full overflow-hidden">
      <body className="bg-mainBg flex flex-col h-full">
        <NavBar />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

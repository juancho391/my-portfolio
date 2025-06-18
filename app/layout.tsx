import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientMenuWrapper from "./components/clienWrapper";
import { ContextProvider } from "@/context/Context";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Esteban Dev",
  description:
    "Portafolio de Juan Esteban, desarrollador de software full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen p-10 pt-24`}
      >
        <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute top-[-20%] left-[-20%] h-[1200px] w-[1200px] rounded-full bg-[radial-gradient(circle_400px_at_30%_300px,#fbfbfb36,transparent)]" />
          </div>
          <ClientMenuWrapper />
          <ContextProvider>{children}</ContextProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}

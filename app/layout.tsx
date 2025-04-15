import type { Metadata } from "next";
import { Athiti } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

const font = Athiti({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "ผู้รับเหมางานก่อสร้าง กำแพงกันดิน เทถนน ถมดิน | ประสบการณ์ 20 ปี ไม่เคยทิ้งงาน",
  description: "มองหาผู้รับเหมาซื่อสัตย์ ไม่ทิ้งงาน? ทีมงานมืออาชีพ ประสบการณ์ตรง 20+ ปี เชี่ยวชาญงานถมดิน เทถนน ก่อสร้างกำแพงกันดิน ดูแลงานทุกขั้นตอน ราคาเป็นธรรม ติดต่อได้เลย!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}

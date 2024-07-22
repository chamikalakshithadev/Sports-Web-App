import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/NavBar/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sports Website Template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
import "./globals.css";
import "./../public/css/line-awesome.css";
import "./../public/css/style.css";
import "./../public/css/responsive.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "King15Photography | Home",
  description: "KING15 Photography",
  icons: {
    icon: "/images/favicon_black/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      {/* <body className="ashade-home-template has-spotlight ashade-smooth-scroll"> */}
      <body className="ashade-home-template has-spotlight ashade-smooth-scroll">
        {children}
      {/* <script src="js/jquery.min.js"></script>
      <script src="js/gsap.min.js"></script>
      <script src="js/masonry.min.js"></script> */}
      {/* <script src="js/core.js"></script> */}
    </body>
  </html>
  );
}

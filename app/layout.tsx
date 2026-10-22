import type { Metadata } from "next";
import MainLayout from "./components/MainLayout";

import "./globals.css";
import "./../public/css/line-awesome.css";
import "./../public/css/style.css";
import "./../public/css/responsive.css";

export const metadata: Metadata = {
  title: "King15Photography",
  description: "Commercial Photography & Videography in Delhi NCR",
  icons: {
    icon: "/images/favicon_black/favicon.ico",
  },
};

export default function RooTLayout({ 
  children 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

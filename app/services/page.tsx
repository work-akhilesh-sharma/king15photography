import { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services | King15Photography",
  description:
    "Explore King15Photography's brand shoots, commercial photography, promotional videos and reels.",
};

export default function Page() {
    return <ServicesPage />;
}
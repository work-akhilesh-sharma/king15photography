import { Metadata } from "next";
import TestimonialPage from "./TestimonialPage";

export const metadata: Metadata = {
  title: "Testimonials | King15Photography",
  description:
    "Explore King15Photography's brand shoots, commercial photography, promotional videos and reels.",
};


export default function Page() {
    return <TestimonialPage />;
}
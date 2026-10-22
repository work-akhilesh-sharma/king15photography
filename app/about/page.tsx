import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Me | King15Photography",
  description:
    "Meet Pawan Pal, photographer at King15 Photography in Faridabad, Haryana.",
};

export default function Page() {
  return <AboutPage />;
}

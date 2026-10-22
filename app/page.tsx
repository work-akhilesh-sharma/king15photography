// import Link from "next/link";
// import styles from "./page.module.css";
import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "KING15Photography | Brand Films & Photography",
  },
  description: "KING15 Photography | Photographer & Videographer in Faridabad"
};

export default function Home() {
  return <HomePage />;
}

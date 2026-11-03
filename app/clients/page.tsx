import type { Metadata } from "next";
import ClientsPage from "./ClientsPage";

export const metadata: Metadata = {
  title: "Our Clients | King15Photography",
  description:
    "Explore the brands and businesses that trust King15Photography for professional photography and visual storytelling.",
};

export default function Page() {
  return <ClientsPage />;
}

import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
    title: "Contact Us | King15Photography",
    description: "Contact King15Photography to discuss your photography, brand shoot",
}

export default function Page() {
    return <ContactPage />;
}

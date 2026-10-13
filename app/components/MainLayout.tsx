import type { ReactNode } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ 
    children,
}: MainLayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

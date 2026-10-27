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
        <div className="site-shell">
          <div className="site-header">
            <Header />
          </div>

          <main className="site-main">
            {children}
          </main>
            
          <div className="site-footer">
            <Footer />
          </div>
        </div>
    );
}

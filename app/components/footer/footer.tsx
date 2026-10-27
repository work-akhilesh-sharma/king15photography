"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
             <div className={styles.social}>
                <Link 
                  href="https://www.linkedin.com/company/king15photography/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="KING15 Photography on LinkedIn"
                >Ln</Link>
                <Link 
                  href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="KING15 Photography on Instagram"
                >Insta</Link>
            </div>

            {/* ================= COPYRIGHT ================= */}
            <div className={styles.copyright}>
                COPYRIGHT © { new Date().getFullYear() }. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
}

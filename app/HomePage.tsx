"use client";

import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        {/* Contact Me - RIGHT */}
        <Link href="/contacts">
          <button
            className={`${styles.verticalLink} ${styles.contactRight}`}
            >
            <span>HOW TO FIND ME</span>
            <strong>CONTACT ME</strong>
          </button>
        </Link>
        {/* <Link href="/services" className={styles.headerMenuLink}>SERVICES</Link> */}
        {/* Explore Works - RIGHT */}
        <Link href="/services">
          <button
            className={`${styles.verticalLink} ${styles.exploreRight}`}
            type="button"
            >
            <span>MY PHOTO PORTFOLIO</span>
            <strong>EXPLORE WORKS</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

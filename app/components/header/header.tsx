"use client";

import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo */}
        {/* <div className={styles.logo}> */}
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.PNG"
              width={190}
              height={65}
              className="h-auto w-[190px] object-contain"
              alt="King15 Photography"
              loading="eager"
            />
            {/* <img src="logo.PNG" alt="King15 Photography" /> */}
          </Link>
        {/* </div> */}

        {/* Navigation */}
        <div className={styles.navbar}>
          <nav className={styles.navigation}>
            <ul className={styles.headerMenu}>
              <li className={styles.headerMenuLi}>
                <Link href="/" className={styles.headerMenuLink}>HOME</Link>
                {/* <button onClick={showHome}>HOME</button> */}
              </li>
              <li className={styles.headerMenuLi}>
                <Link href="/about" className={styles.headerMenuLink}>ABOUT ME</Link>
                {/* <button type="button">ABOUT ME</button> */}
              </li>
              <li className={styles.headerMenuLi}>
                <Link href="/services" className={styles.headerMenuLink}>SERVICES</Link>
                {/* <button type="button">SERVICES</button> */}
              </li>
              <li className={styles.headerMenuLi}>
                <Link href="/testimonials" className={styles.headerMenuLink}>TESTIMONIALS</Link>
                {/* <button type="button">TESTIMONIALS</button> */}
              </li>
              <li className={styles.headerMenuLi}>
                <Link href="/contacts" className={styles.headerMenuLink}>CONTACTS</Link>
                {/* <button onClick={showContact}>CONTACTS</button> */}
              </li>
              {/* <li className={styles.headerMenuLi}>
                <button type="button" className={styles.more}>
                  •••
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

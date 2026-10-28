"use client";

import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contacts", href: "/contacts" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} onClick={closeMenu} aria-label="KING15 Photography home">
          <Image 
            src="/logo.PNG"
            width={190}
            height={65}
            alt="King15 Photography"
            priority
            sizes="(max-width: 480px) 125px, 190px"
            loading="eager"
          />
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarTopOpen : ""}`} />
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarMiddleOpen : ""}`} />
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarBottomOpen : ""}`} />
        </button>

        <nav 
          id="main-navigation"
          className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ""}`}
          aria-label="Main navigation"
        >
          <ul className={styles.headerMenu}>
            {menuItems.map((item) => { 
              const isActive = pathname === item.href;

              return (
                <li className={styles.headerMenuLi} key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.headerMenuLink} ${
                      isActive ? styles.headerMenuLinkActive : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

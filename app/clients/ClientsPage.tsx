"use client";

import Image from "next/image";
import styles from "./ClientsPage.module.css";
import { useEffect, useState } from "react";

const clients = [
  {
    id: 1,
    name: "Kwabey",
    logo: "/clients/0x0.png",
  },
  {
    id: 2,
    name: "Anytime Fitness",
    logo: "/clients/anytime_fitness.png",
  },
  {
    id: 3,
    name: "APML",
    logo: "/clients/apml.jpeg",
  },
  {
    id: 4,
    name: "Mission Fitness",
    logo: "/clients/IMG_0520.JPG.jpeg",
  },
  {
    id: 5,
    name: "Axisrayz",
    logo: "/clients/IMG_5572.JPG.jpeg",
  },
  {
    id: 6,
    name: "Eicher",
    logo: "/clients/eicher.png",
  },
  {
    id: 7,
    name: "Bharat Petroleum",
    logo: "/clients/Bharat-Petroleum-emblem.png",
  },
  {
    id: 8,
    name: "DXT Trades",
    logo: "/clients/BEBO1169.PNG",
  },
];

export default function ClientsPage() {
  const [animateLabels, setAnimateLabels] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimateLabels(true);
    });
  
    return () => cancelAnimationFrame(frame);
  }, []);
  
  return (
    <div id="top" className={styles['page-layout']}>
      <aside className={styles['left-rail']}>
        <span className={styles['left-caption']}>Brands that trust me</span>
        <span className={styles['left-title']}>Our Clients</span>
      </aside>
      <main className={styles.clientsPage}>
        <section className={styles.clientsSection}>
          <div className={styles.clientsGrid}>
            {clients.map((client) => (
              <div className={styles.clientCard} key={client.id}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 480px) 42vw,
                          (max-width: 768px) 28vw,
                          (max-width: 1200px) 22vw,
                          18vw"
                    className={styles.clientLogo}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <aside className={styles['right-rail']}>
        <span
          className={`${styles["back-to-label"]} ${
          animateLabels ? styles["from-bottom"] : ""
          }`}
        >
          Back To
        </span>
        <a
          href="#top"
          className={`${styles["back-to-top"]} ${
          animateLabels ? styles["from-top"] : ""
          }`}
          aria-label="Back to top"
        >
          Top
        </a>
      </aside>
    </div>
  );
}

"use client"

import { useEffect, useState } from "react";
import styles from "./Service.module.css";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Automotive",
    category: "Automotive",
    description:
      "Automotive",
    image: "/services/IMG_6173.PNG",
  },
  {
    title: "Fitness / Gym",
    category: "Fitness / Gym",
    description:
      "Fitness / Gym",
    image: "/services/IMG_6172.PNG",
  },
  {
    title: "Small Businesses",
    category: "Small Businesses",
    description:
      "Small Businesses",
    image: "/services/IMG_6171.PNG",
  },
  {
    title: "All Type of Product Shoot",
    category: "All Type of Product Shoot",
    description:
      "All Type of Product Shoot",
    image: "/services/IMG_6170.PNG",
  },
  {
    title: "Podcasts",
    category: "Podcasts",
    description:
      "Podcasts",
    image: "/services/IMG_6169.PNG",
  },
  {
    title: "Makeup Portfolio",
    category: "Makeup Portfolio",
    description:
      "Makeup Portfolio",
    image: "/services/IMG_6168.PNG",
  },
  {
    title: "Real Estate and Architecture",
    category: "Real Estate and Architecture",
    description:
      "Real Estate and Architectures",
    image: "/services/IMG_6166.PNG",
  },
  {
    title: "Personal Branding",
    category: "Personal Branding",
    description:
      "Personal Branding",
    image: "/services/IMG_6180.PNG",
  },
];

export default function ServicePage() {

  const [animateLabels, setAnimateLabels] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimateLabels(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div id="top" className={styles['page-layout']}>
      <aside className={styles['left-rail']} aria-hidden="true">
        <span className={styles['left-caption']}>What I&apos;m offering</span>
        <span className={styles['left-title']}>My Services</span>
      </aside>  
      <section className={styles.gallery} aria-label="Photography services">
        {/* <div className={styles.lineLeft} aria-hidden="true" /> */}
          <div className={styles.grid}>
            {services.map((service) => (
              <article className={styles.card} key={service.title}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 4800px) 100vw,
                         (max-width: 768px) 50vw,
                         (max-width: 1100px) 45vw,
                         30vw"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>
                    {service.category}
                  </span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Link
                    href="https://www.instagram.com/king15_photography?obrf=aG9mZjd3Ym8yNG1l"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="KING15 Photography on Instagram"
                  >
                    <span className={styles.explore}>
                      EXPLORE SERVICE ↗
                    </span>  
                  </Link>
                </div>
              </article>
                ))}
            </div>
        {/* <div className={styles.lineRight} aria-hidden="true" /> */}
      </section>
      <aside className={styles['right-rail']} aria-hidden="true">
        {/* <span className={styles['back-to-label']}>BACK TO</span> */}
        <span
          className={`${styles["back-to-label"]} ${
          animateLabels ? styles["from-bottom"] : ""
          }`}
        >
          Back To
        </span>
        {/* <a href="#top" className={styles['back-to-top']}>TOP</a> */}
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


"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesSlider.module.css";

const services = [
  {
    title: "Automotive",
    image: "/services/IMG_6173.PNG",
  },
  {
    title: "Fitness / Gym",
    image: "/services/IMG_6172.PNG",
  },
  {
    title: "Small Businesses",
    image: "/services/IMG_6171.PNG",
  },
  {
    title: "Product Shoots",
    image: "/services/IMG_6170.PNG",
  },
  {
    title: "Podcasts",
    image: "/services/IMG_6169.PNG",
  },
  {
    title: "Makeup Portfolio",
    image: "/services/IMG_6168.PNG",
  },
  {
    title: "Real Estate & Architecture",
    image: "/services/IMG_6166.PNG",
  },
  {
    title: "Personal Branding",
    image: "/services/IMG_6180.PNG",
  },
];

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-service-card]"
    );

    const distance = card
      ? card.getBoundingClientRect().width + 20
      : slider.clientWidth;

    slider.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <span className={styles.eyebrow}>
              WHAT I OFFER
            </span>

            <h2 id="services-heading" className={styles.heading}>
              My Services
            </h2>

            <p className={styles.description}>
              Creative photography and visual content
              for brands, businesses and individuals.
            </p>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => scroll("prev")}
              aria-label="Previous services"
            >
              &#8592;
            </button>

            <button
              type="button"
              className={styles.arrow}
              onClick={() => scroll("next")}
              aria-label="Next services"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className={styles.slider}
          aria-label="Photography services"
        >
          {services.map((service) => (
            <article
              key={service.title}
              data-service-card
              className={styles.card}
            >
              <Link
                href="/services"
                className={styles.cardLink}
                aria-label={`Explore ${service.title} services`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 600px) 82vw, (max-width: 1024px) 44vw, 31vw"
                    className={styles.image}
                  />

                  <div className={styles.overlay}>
                    <span className={styles.category}>
                      PHOTOGRAPHY & CREATIVE
                    </span>

                    <h3>{service.title}</h3>

                    <span className={styles.explore}>
                      EXPLORE SERVICE ↗
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <span>CREATIVE WORK. DISTINCTIVE STORIES.</span>

          <Link href="/services" className={styles.viewAll}>
            VIEW ALL SERVICES ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

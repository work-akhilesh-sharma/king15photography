"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./testimonial.module.css";

export default function TestimonialPage() {
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
        <span className={styles['left-caption']}>What my clients say</span>
        <span className={styles['left-title']}>Testimonials</span>
      </aside>  
      
      <main className={styles["page-content"]}>
        <section className={styles.intro}>
          <span className={styles.eyebrow}>CLIENT&apos;S REVIEWS</span>
          <h1>Backstory</h1>
          <p>
            After years of practice and experience, I have learned
            techniques that help me work with modern brands and companies.
            Here are a few words from clients who have trusted my work.
          </p>
        </section>

        <section
          className={styles.testimonialsGrid}
          aria-label="Client testimonials"
        >
          <article className={styles.testimonialCard}>
            <div className={styles.stars} aria-label="4 out of 5 stars">
              ★★★★☆
            </div>
            <p className={styles.review}>
              The shoot experience was excellent. The team was
              professional, creative, punctual, and easy to work with.
              Highly recommended for their quality, dedication, and
              seamless execution.
            </p>
            <div className={styles.author}>
              <Image
                src="/testimonials/Anytime-Fitness-Logo-No-Background.png"
                width={64}
                height={64}
                alt="Vishal Kwatra"
              />
              <div>
                <h3>Mr. Vishal Kwatra</h3>
                <span>Director, Anytime Fitness</span>
              </div>
            </div>
          </article>

          <article className={styles.testimonialCard}>
            <div className={styles.stars} aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className={styles.review}>
              Working with this team was a seamless experience. They understood our brand perfectly and captured the essence of APML (Agarwal Packers and Movers) with professionalism. The final visuals beautifully reflected our commitment to trust, reliability, and excellence, making the entire project impactful and engaging.
            </p>
            <div className={styles.author}>
              <Image
                src="/testimonials/apml.jpeg"
                width={64}
                height={64}
                alt="Karan Kholi"
              />
              <div>
                <h3>Mr. Ramesh Agarwal</h3>
                <span>Managing Director, Agarwal Packers and Movers Ltd.</span>
              </div>
            </div>
          </article>

          <article className={styles.testimonialCard}>
            <div className={styles.stars} aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className={styles.review}>
              Working with the King15 team was a seamless experience.
              Their creativity, professionalism, attention to detail,
              and execution delivered high-quality visuals that
              perfectly captured our brand and vision.
            </p>
            <div className={styles.author}>
              <Image
                src="/testimonials/Bharat-Petroleum-emblem.png"
                width={64}
                height={64}
                alt="Himanshu Gupta"
              />
              <div>
                <h3>Mr. Himanshu Gupta</h3>
                <span>Bharat Petroleum Corporation Limited</span>
              </div>
            </div>
          </article>
        </section>
      </main>

      <div className="ashade-to-top-wrap ashade-back-wrap">
        <div className="ashade-back is-to-top">
            <span>Back to</span>
            <span>Top</span>
        </div>
      </div>

      <aside id="ashade-aside">
        <a href="#" className="ashade-aside-close">Close Sidebar</a>
        <div className="ashade-aside-inner">
            <div className="ashade-aside-content">
                <div className="ashade-widget ashade-widget--about">
                    <div className="ashade-widget--about__head">
                        <Image src="/img/general/owner-avatar.jpg" height="100" width="500" alt="Pawan pal" loading="eager" />
                        {/* <img src="img/general/owner-avatar.jpg" alt="Pawan pal" /> */}
                        <h5>
                            <span>Photographer</span>
                            Pawan pal
                        </h5>
                    </div>
                    <p>Nice to meet you, friend! My name is Pawan pal. I am from Faridabad. Photography is my passion. Through the lens the world looks different and I would like to show you this difference.</p>
                    <p className="align-right">
                        <a href="/about" className="ashade-learn-more">Learn More</a>
                    </p>
                </div>
                
                <div className="ashade-widget ashade-widget--contacts">
                    <h5 className="ashade-widget-title">
                        <span>My contacts and socials</span>
                        How to find me
                    </h5>
                    <ul className="ashade-contact-details__list">
                        <li>
                            <i className="ashade-contact-icon la la-map-marker"></i>
                            First floor, DB-874, Sector-50, NIT Faridabad, Haryana 121001									
                        </li>
                        <li>
                            <i className="ashade-contact-icon la la-phone"></i>
                            <a href="tel:+918802890848">+91 8802890848</a>
                        </li>
                        <li>
                            <i className="ashade-contact-icon la la-envelope"></i>
                            <a href="mailto:king15photographer@gmail.com">king15photographer@gmail.com</a>
                        </li>
                        <li className="ashade-contact-socials">
                            <i className="ashade-contact-icon la la-share-alt"></i>
                            <a href="https://www.linkedin.com/company/king15photography/" target="https://www.linkedin.com/company/king15photography/">Ln</a>
                            <a href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw" target="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw">In</a>
                        </li>
                    </ul>
                    <p className="align-right">
                        <a href="/contacts" className="ashade-learn-more">Get in touch</a>
                    </p>
                </div>
            </div>
        </div>
      </aside>
      <div className="ashade-menu-overlay"></div>
      <div className="ashade-aside-overlay"></div>
      <div className="ashade-cursor is-inactive">
        <span className="ashade-cursor-circle"></span>
        <span className="ashade-cursor-slider"></span>
        <span className="ashade-cursor-close ashade-cursor-label">Close</span>
        <span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
      </div>
      <aside className={styles['right-rail']}>
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
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

      {/* <main className="ashade-content-wrap"> */}
      <main className={styles['page-content']}>
        <div className="ashade-content-scroll">
            <div className="ashade-content">
                <section className="ashade-section">       		
                    <div className="ashade-row">
                        <div className="ashade-col col-4">
                            <h2>
                                <span>Client&apos;s reviews</span>
                                Backstory
                            </h2>
                        </div>
                        <div className="ashade-col col-4">
                            <p>After years of practice and tons of experience I learned the techniques, that helps me in my work with modern brands and companies.</p>
                            <p>But working with famous companies does not prevent me from giving good photos to private clients. And this work in private inspires me at all.</p>
                        </div>
                        <div className="ashade-col col-4">
                            <p>Here are some of the most inspiring reviews from my clients. If you wish to join this group of satisfied people or have something to say you can feel free to fill contact form below. Your opinion is very important to me, because I always try to evolve and improve in the professional field and work on mistakes.</p>
                        </div>
                    </div>
                </section>

                <section className="ashade-section">
                    <div className="ashade-row">
                        <div className="ashade-col col-12">
                            <div className="ashade-testimonials-grid is-masonry">
                                <div className="ashade-testimonials-item">
                                    <div className="ashade-testimonials-item__author">
                                        <div className="ashade-testimonials-item__author--image">
                                            <Image src="/img/avatars/testimonial04.jpg" height="100" width="500" alt="Elizabeth Shown" loading="eager" unoptimized />
                                            {/* <img src="img/avatars/testimonial01.jpg" alt="Elizabeth Shown" /> */}
                                        </div>
                                        <div className="ashade-testimonials-item__author--name">
                                            <h6>
                                                <span>Director of Anytime fitness</span>
                                                Vishal kwatra
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="ashade-testimonials-item__content">
                                        <div className="ashade-testimonials-item__stars ashade-stars4"></div>
                                        <p>The shoot experience was excellent. The team was professional, creative, punctual, and easy to work with. Highly recommended for their quality, dedication, and seamless execution.</p>
                                    </div>
                                </div>
                                <div className="ashade-testimonials-item">
                                    <div className="ashade-testimonials-item__author">
                                        <div className="ashade-testimonials-item__author--image">
                                            <Image src="/img/avatars/testimonial05.jpg" height="100" width="500" alt="Tony Norton" loading="eager" unoptimized />
                                            {/* <img src="img/avatars/testimonial02.jpg" alt="Tony Norton" /> */}
                                        </div>
                                        <div className="ashade-testimonials-item__author--name">
                                            <h6>
                                                <span>CEO of Mission fitness</span>
                                                Karan kholi
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="ashade-testimonials-item__content">
                                        <div className="ashade-testimonials-item__stars ashade-stars5"></div>
                                        <p>Working with this team was a refreshing experience. They understood our vision perfectly and captured the energy of Mission Fitness beautifully. The final work felt authentic, engaging, and impactful.</p>
                                    </div>
                                </div>
                                <div className="ashade-testimonials-item">
                                    <div className="ashade-testimonials-item__author">
                                        <div className="ashade-testimonials-item__author--image">
                                            <Image src="/img/avatars/testimonial06.jpg" height="100" width="500" alt="Traci Harden" loading="eager" unoptimized />
                                            {/* <img src="img/avatars/testimonial03.jpg" alt="Traci Harden" /> */}
                                        </div>
                                        <div className="ashade-testimonials-item__author--name">
                                            <h6>
                                                <span>Bharat Petrolium corporation Limited </span>
                                                Himanshu gupta
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="ashade-testimonials-item__content">
                                        <div className="ashade-testimonials-item__stars ashade-stars5"></div>
                                        <p>Working with the King15 team was a seamless experience. Their creativity, professionalism, attention to detail, and execution delivered high-quality visuals that perfectly captured our brand and vision.
</p>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        </div>
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
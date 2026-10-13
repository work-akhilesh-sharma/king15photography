"use client";

import { useEffect, useState } from "react";
import styles from "./about.module.css";

const testimonials = [
  {
    quote:
      "The shoot experience was excellent. The team was professional, creative, punctual, and easy to work with. Highly recommended for their quality, dedication, and seamless execution.",
    role: "Director of Anytime Fitness",
    name: "Vishal Kwatra",
    image: "/img/avatars/testimonial01.jpg",
  },
  {
    quote:
      "Working with this team was a refreshing experience. They understood our vision perfectly and captured the energy of Mission Fitness beautifully. The final work felt authentic, engaging, and impactful.",
    role: "CEO of Mission Fitness",
    name: "Karan Kholi",
    image: "/img/avatars/testimonial02.jpg",
  },
  {
    quote:
      "Working with the King15 team was a seamless experience. Their creativity, professionalism, attention to detail, and execution delivered high-quality visuals that perfectly captured our brand and vision.",
    role: "Bharat Petroleum Corporation Limited",
    name: "Himanshu Gupta",
    image: "/img/avatars/testimonial03.jpg",
  },
];

const studioImages = [
  { src: "/img/general/studio01.jpg", thumb: "/img/general/thmb-studio01.jpg" },
  { src: "/img/general/studio02.jpg", thumb: "/img/general/thmb-studio02.jpg" },
  { src: "/img/general/studio03.jpg", thumb: "/img/general/thmb-studio03.jpg" },
  { src: "/img/general/studio04.jpg", thumb: "/img/general/thmb-studio04.jpg" },
];

export default function AboutPage() {
  const [asideOpen, setAsideOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [comparison, setComparison] = useState(50);

  const testimonial = testimonials[testimonialIndex];

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
        <span className={styles['left-caption']}>Who am I?</span>
        <span className={styles['left-title']}>About Me</span>
      </aside>

      {/* <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
          <span>Who am I?</span>
          About Me
        </h1>
      </div> */}

      <main className={styles['page-content']}>


      <main className="ashade-content-wrap">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            <section className="ashade-section">
              <div className="ashade-row ashade-row-fullheight exclude-header">
                <div className="ashade-col col-6">
                  <h2>
                    <span>Few Words About Myself</span>
                    Nice to Meet You
                  </h2>
                  <p>
                    Nice to meet you, friend! My name is Pawan Pal. I’m a
                    professional photographer from Faridabad, Haryana. I hope
                    you enjoy my photo portfolio, and that we can create
                    something great together!
                  </p>
                  <p>
                    Through the lens, the world looks different, and I would
                    like to show you this difference. I learned that at age 10,
                    when I first took photos with a manual camera with my dad.
                    Years of practice and experience helped me learn techniques
                    that support my work with modern brands and companies. Get
                    in touch and let’s create something together.
                  </p>
                </div>
                <div className="ashade-col col-6 align-bottom hide-on-tablet-port hide-on-phone">
                  <img
                    src="/img/general/about-me.jpg"
                    alt="Pawan Pal, photographer"
                    width="1240"
                    height="1500"
                    />
                </div>
              </div>
            </section>

            <section className="ashade-section">
              <div className="ashade-row ashade-keep-on-tablet">
                {[
                  ["Awards Won", "25"],
                  ["Projects Done", "67"],
                  ["Happy Clients", "211"],
                  ["Greatest Shots", "5896"],
                ].map(([label, value]) => (
                  <div className="ashade-col col-3" key={label}>
                    <div className="ashade-counter-item" data-delay="3000">
                      <span className="ashade-counter-label">{label}</span>
                      <span className="ashade-counter-value">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
{/* 
            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12 align-center">
                  <h3>
                    <span>Where magic is happening</span>
                    My Studio
                  </h3>
                  <p className="ashade-intro">
                    This is the place where I work with light and shadows to
                    create something brilliant. My photo studio is located in
                    Faridabad, Haryana, where we can discuss and create your
                    photo portfolio in a comfortable, professional atmosphere.
                  </p>
                </div>
              </div>
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <div className="ashade-grid ashade-grid-4cols">
                    {studioImages.map((photo, index) => (
                      <div className="ashade-grid-item" key={photo.src}>
                        <a
                          href={photo.src}
                          className="ashade-lightbox-link"
                          aria-label={`View studio photo ${index + 1}`}
                          target="_blank"
                          rel="noreferrer"
                          >
                          <img
                            src={photo.thumb}
                            alt={`King15 Photography studio ${index + 1}`}
                            width="1160"
                            height="920"
                            loading="lazy"
                            />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12 align-center">
                  <h3>
                    <span>How does this happen</span>
                    Photo Processing
                  </h3>
                  <p className="ashade-intro">
                    See the difference photo processing can make. Compare the
                    original image with the retouched version, including
                    adjustments to background noise, colour, and brightness.
                  </p>
                </div>
              </div>
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <div
                    className="ashade-before-after king15-before-after"
                    style={{ position: "relative", overflow: "hidden" }}
                    >
                    <img
                      src="/img/general/after.jpg"
                      alt="Photo after processing"
                      width="1920"
                      height="1280"
                      style={{ display: "block", width: "100%" }}
                      />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: `${comparison}%`,
                        overflow: "hidden",
                        borderRight: "2px solid #fff",
                      }}
                      >
                      <img
                        src="/img/general/before.jpg"
                        alt="Photo before processing"
                        width="1920"
                        height="1280"
                        style={{
                          display: "block",
                          width: "calc(100vw - 0px)",
                          maxWidth: "none",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        />
                    </div>
                    <label className="king15-comparison-control">
                      <span className="sr-only">Compare before and after</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={comparison}
                        onChange={(event) =>
                          setComparison(Number(event.target.value))
                        }
                        aria-label="Adjust before and after photo comparison"
                        />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12 align-center">
                  <h3>
                    <span>What My Clients Say About Me</span>
                    Testimonials
                  </h3>
                </div>
              </div>
              <div className="ashade-row">
                <div className="ashade-col col-2" />
                <div className="ashade-col col-8">
                  <div className="ashade-testimonials-carousel">
                    <div
                      className="ashade-tns-container"
                      id="testimonials01"
                      aria-live="polite"
                      >
                      <div className="ashade-testimonials-item align-center">
                        <div className="ashade-testimonials-item__content">
                          <p>{testimonial.quote}</p>
                        </div>
                        <div className="ashade-testimonials-item__author">
                          <div className="ashade-testimonials-item__author--image">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              width="80"
                              height="80"
                            />
                          </div>
                          <div className="ashade-testimonials-item__author--name">
                            <h6>
                              <span>{testimonial.role}</span>
                              {testimonial.name}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ashade-testimonials-nav">
                      <button
                        type="button"
                        onClick={() =>
                          setTestimonialIndex(
                            (testimonialIndex - 1 + testimonials.length) %
                              testimonials.length,
                          )
                        }
                        aria-label="Previous testimonial"
                      >
                        Previous
                      </button>
                      <span>
                        {testimonialIndex + 1} / {testimonials.length}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setTestimonialIndex(
                            (testimonialIndex + 1) % testimonials.length,
                          )
                        }
                        aria-label="Next testimonial"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ashade-col col-2" />
              </div>
            </section> */}
          </div>

        </div>
      </main>
{/* 
      <div className="ashade-to-top-wrap ashade-back-wrap">
        <button
          type="button"
          className="ashade-back is-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Back to</span>
          <span>Top</span>
        </button>
      </div>

      <aside
        id="ashade-aside"
        className={asideOpen ? "is-open" : ""}
        aria-hidden={!asideOpen}
      >
        <button
          type="button"
          className="ashade-aside-close"
          onClick={() => setAsideOpen(false)}
        >
          Close Sidebar
        </button>
        <div className="ashade-aside-inner">
          <div className="ashade-aside-content">
            <div className="ashade-widget ashade-widget--about">
              <div className="ashade-widget--about__head">
                <img src="/img/general/owner-avatar.jpg" alt="Pawan Pal" />
                <h5>
                  <span>Photographer</span>
                  Pawan Pal
                </h5>
              </div>
              <p>
                Nice to meet you! My name is Pawan Pal. I am from Faridabad.
                Photography is my passion. Through the lens, the world looks
                different, and I would like to show you this difference.
              </p>
              <p className="align-right">
                <a href="/about" className="ashade-learn-more">
                  Learn More
                </a>
              </p>
            </div>

            <div className="ashade-widget ashade-widget--contacts">
              <h5 className="ashade-widget-title">
                <span>My contacts and socials</span>
                How to find me
              </h5>
              <ul className="ashade-contact-details__list">
                <li>
                  <i className="ashade-contact-icon la la-map-marker" />
                  First floor, DB-874, Sector-50, NIT Faridabad, Haryana 121001
                </li>
                <li>
                  <i className="ashade-contact-icon la la-phone" />
                  <a href="tel:+918802890848">+91 8802890848</a>
                </li>
                <li>
                  <i className="ashade-contact-icon la la-envelope" />
                  <a href="mailto:king15photographer@gmail.com">
                    king15photographer@gmail.com
                  </a>
                </li>
                <li className="ashade-contact-socials">
                  <i className="ashade-contact-icon la la-share-alt" />
                  <a
                    href="https://www.linkedin.com/company/king15photography/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ln
                  </a>
                  <a
                    href="https://www.instagram.com/king15_photography/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In
                  </a>
                </li>
              </ul>
              <p className="align-right">
                <a href="/contacts" className="ashade-learn-more">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside> */}

      {/* <div
        className={`ashade-menu-overlay ${asideOpen ? "is-active" : ""}`}
        onClick={() => setAsideOpen(false)}
      />
      <div
        className={`ashade-aside-overlay ${asideOpen ? "is-active" : ""}`}
        onClick={() => setAsideOpen(false)}
      /> */}
      {/* <div className="ashade-cursor is-inactive" aria-hidden="true">
        <span className="ashade-cursor-circle" />
        <span className="ashade-cursor-slider" />
        <span className="ashade-cursor-close ashade-cursor-label">Close</span>
        <span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
      </div> */}
      </main>

      <aside className={styles['right-rail']}>
        {/* <span className={styles['back-to-label']}>BACK TO</span> */}
        <span
          className={`${styles["back-to-label"]} ${
          animateLabels ? styles["from-bottom"] : ""
          }`}
        >
          Back to
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

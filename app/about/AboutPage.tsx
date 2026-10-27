"use client";

import { useEffect, useState } from "react";
import styles from "./about.module.css";

export default function AboutPage() {
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
      <main className={styles['page-content']}>
        <div className="ashade-content-wrap">
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
                  <div className="ashade-col col-6 align-bottom">
                    <img
                      src="/img/general/about-me.jpg"
                      alt="Pawan Pal, photographer"
                      width="1240"
                      height="1500"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
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
            </div>
          </div>
        </div>
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

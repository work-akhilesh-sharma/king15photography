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
                    {/* <h2>
                      <span>Few Words About Myself</span>
                      Nice to Meet You
                    </h2> */}

                    <h3>
                      <span>About Us</span>
                      We Don’t Just Capture Moments. We Create Stories.
                    </h3>

                    <p>
                      At <strong>King15Photography</strong>, we believe every image has a story to tell and every brand has a unique identity waiting to be discovered.
                    </p>
                    <p>
                      We are passionate about transforming ideas into powerful visual experiences through photography, creative direction, and compelling visual storytelling. From professional portraits and lifestyle photography to brand campaigns and commercial shoots, we create visuals that capture attention, communicate emotion, and leave a lasting impression.
                    </p>
                    <p>
                      Our approach combines creativity, attention to detail, and a deep understanding of what makes a visual truly memorable. Whether you&apos;re an individual looking to preserve a special moment or a business aiming to build a stronger brand identity, we work closely with you to bring your vision to life.
                    </p>
                    <p>
                      We collaborate with individuals, creators, and businesses to produce authentic, impactful, and thoughtfully crafted visuals. Every project is an opportunity to explore new perspectives, express creativity, and tell a story that connects with the right audience.
                    </p>    
                  </div>
                  <div className="ashade-col col-6 align-bottom">
                    <img
                      src="/about/IMG_8225.JPG.jpeg"
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
                    ["Projects Done", "47"],
                    ["Happy Clients", "147"],
                    ["Greatest Shots", "596"],
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

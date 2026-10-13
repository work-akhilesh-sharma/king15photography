"use client"

import Link from "next/link";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";
import type { SubmitEventHandler } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [animateLabels, setAnimateLabels] = useState(false);
    
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimateLabels(true);
    });
  
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleContactSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      setSuccessMessage(result.message);

      // Clear form after successful submission
      form.reset();

    } catch(error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="top" className={styles['page-layout']}>
      
      <aside className={styles['left-rail']}>
        <span className={styles['left-caption']}>How to my me</span>
        <span className={styles['left-title']}>Contact me</span>
      </aside>
      
      <main className={styles['page-content']}> 
        <div className={styles["contact-form-wrapper"]}>
          <form className={styles["contact-form"]} onSubmit={handleContactSubmit}>
            <div className={styles["form-row"]}>
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <input type="tel" name="phone" placeholder="Your Phone" />
            </div>
            <textarea name="message" placeholder="Your Message" rows={8} />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
              >
              <label htmlFor="website">
                Website
              </label>

              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                />
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
            <div className={styles.contactForm}>
              {successMessage && (
                <p className="success-message">
                  {successMessage}
                </p>
              )}

              {errorMessage && (
                <p className="error-message">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className={styles['container-flex']}>
          <div className={styles['col-flex']} style={{ flexGrow: 3 }}>
            <div className={styles.contactInfo}>
                <div className={styles.smallTitle}>
                  MY CONTACTS AND SOCIALS
                </div>

                <h2>HOW TO FIND ME</h2>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>⌖</div>
                  <p>
                    First floor, DB-874, Sector-50, NIT
                    <br />
                    Faridabad, Haryana 121001
                  </p>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>⌕</div>
                  <p>+91 8802890848</p>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>✉</div>
                  <p>king15photographer@gmail.com</p>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>♧</div>
                  <p>
                    <Link className={styles.link} href="https://www.linkedin.com/company/king15photography/" target="_blank" rel="noopener noreferrer">Ln</Link>&nbsp;&nbsp;
                    <Link className={styles.link} href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw" target="_blank" rel="noopener noreferrer">In</Link>
                  </p>
                </div>
              </div>
          </div>      
          <div className={styles['col-flex']} style={{ flexGrow: 7 }}>
            <section className={styles.mapSection}>
              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1755.1029607639323!2d77.27317951882037!3d28.382847767666846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1791872909110!5m2!1sen!2sin" 
                  width="100%" 
                  height="500" 
                  style={{ 
                    border:0,
                    display: "block",
                    width: "100%",
                    height: "500px",
                  }} 
                  loading="lazy" 
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="King15Photography Location Map"
                  >
                  {/* // referrerPolicy="strict-origin-when-cross-origin" */}
                </iframe>
              </div>
            </section>
          </div>      
        </div>      

        {/* <section className={styles.contactPage}> */}
          {/* LEFT VERTICAL CONTACT */}
          {/* <button
            className={`${styles.verticalLink} ${styles.contactLeft}`}
            // onClick={showHome}
          >
            <span>HOW TO FIND ME</span>
            <strong>CONTACT ME</strong>
          </button> */}

          {/* RIGHT VERTICAL LINKS */}
          {/* <div className={styles.rightPanel}>
            {/* <button
              className={styles.verticalLink}
              type="button"
            >
              <span>MY PHOTO PORTFOLIO</span>
              <strong>EXPLORE WORKS</strong>
            </button> }

            <button
              className={`${styles.verticalLink} ${styles.backLink}`}
            //   onClick={showHome}
            >
              <strong>BACK</strong>
            </button>
          </div> */}

          {/* CONTACT CONTENT */}
          {/* <div className={styles.contactContent}> */}
            {/* Intro */}
            {/* <div className={styles.contactIntro}>
              <p>
                Nice to meet you, friend! My name is Pawan Pal. I’m a
                professional photographer from Faridabad, Colorado. If you
                have any questions, suggestions or you just want to book a
                photo session feel free to use the contact form below. Lets
                make something great together!
              </p>
            </div> */}

            {/* Contact information */}
            {/* <div className={styles.contactGrid}> */}
              {/* LEFT */}
              {/* <div className={styles.contactInfo}>
                <div className={styles.smallTitle}>
                  MY CONTACTS AND SOCIALS
                </div>

                <h2>HOW TO FIND ME</h2>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>⌖</div>
                  <p>
                    First floor, DB-874, Sector-50, NIT
                    <br />
                    Faridabad, Haryana 121001
                  </p>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>⌕</div>
                  <p>+91 8802890848</p>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>✉</div>
                  <p>king15photographer@gmail.com</p>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>♧</div>
                  <p>
                    <Link className={styles.link} href="https://www.linkedin.com/company/king15photography/" target="_blank" rel="noopener noreferrer">Ln</Link>&nbsp;&nbsp;
                    <Link className={styles.link} href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw" target="_blank" rel="noopener noreferrer">In</Link>
                  </p>
                </div>
              </div> */}

              {/* RIGHT FORM */}
{/*               
            </div> */}
          {/* </div> */}
        {/* </section> */}
      </main>
      
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
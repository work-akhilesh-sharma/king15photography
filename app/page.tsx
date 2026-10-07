"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type PageMode = "home" | "contact";

export default function Home() {
  const [page, setPage] = useState<PageMode>("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const showContact = () => {
    setPage("contact");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showHome = () => {
    setPage("home");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
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
    <main className={styles.page}>
      {/* Background */}
      <div className={styles.background} />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* ================= HEADER ================= */}
      <header className={styles.header}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="logo.PNG" alt="King15 Photography" />
        </Link>

        {/* Navigation */}
        <nav className={styles.navigation}>
          <button onClick={showHome}>HOME</button>

          <button type="button">ABOUT ME</button>

          <button type="button">SERVICES</button>

          <button type="button">TESTIMONIALS</button>

          <button onClick={showContact}>CONTACTS</button>

          <button type="button" className={styles.more}>
            •••
          </button>
        </nav>
      </header>

      {/* ================= SOCIAL ================= */}
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/company/king15photography/" target="_blank" rel="noopener noreferrer">Ln</Link>
        <Link href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw" target="_blank" rel="noopener noreferrer">Insta</Link>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className={styles.copyright}>
        COPYRIGHT © 2026. ALL RIGHTS RESERVED.
      </div>

      {/* ================= HOME ================= */}
      {page === "home" && (
        <>
          {/* Contact Me - RIGHT */}
          <button
            className={`${styles.verticalLink} ${styles.contactRight}`}
            onClick={showContact}
          >
            <span>HOW TO FIND ME</span>
            <strong>CONTACT ME</strong>
          </button>

          {/* Explore Works - RIGHT */}
          {/* <button
            className={`${styles.verticalLink} ${styles.exploreRight}`}
            type="button"
          >
            <span>MY PHOTO PORTFOLIO</span>
            <strong>EXPLORE WORKS</strong>
          </button> */}
        </>
      )}

      {/* ================= CONTACT ================= */}
      {page === "contact" && (
        <section className={styles.contactPage}>
          {/* LEFT VERTICAL CONTACT */}
          <button
            className={`${styles.verticalLink} ${styles.contactLeft}`}
            onClick={showHome}
          >
            <span>HOW TO FIND ME</span>
            <strong>CONTACT ME</strong>
          </button>

          {/* RIGHT VERTICAL LINKS */}
          <div className={styles.rightPanel}>
            {/* <button
              className={styles.verticalLink}
              type="button"
            >
              <span>MY PHOTO PORTFOLIO</span>
              <strong>EXPLORE WORKS</strong>
            </button> */}

            <button
              className={`${styles.verticalLink} ${styles.backLink}`}
              onClick={showHome}
            >
              <strong>BACK</strong>
            </button>
          </div>

          {/* CONTACT CONTENT */}
          <div className={styles.contactContent}>
            {/* Intro */}
            <div className={styles.contactIntro}>
              <p>
                Nice to meet you, friend! My name is Pawan Pal. I’m a
                professional photographer from Faridabad, Colorado. If you
                have any questions, suggestions or you just want to book a
                photo session feel free to use the contact form below. Lets
                make something great together!
              </p>
            </div>

            {/* Contact information */}
            <div className={styles.contactGrid}>
              {/* LEFT */}
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

              {/* RIGHT FORM */}
              <form
                className={styles.contactForm}
                onSubmit={handleContactSubmit}
              >
                <div className={styles.formRow}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={8}
                />

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
          </div>
        </section>
      )}
    </main>
  );
}
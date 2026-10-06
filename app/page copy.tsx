"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [showContacts, setShowContacts] = useState(false);

  // useEffect(() => {
  //   gsap.to(".ashade-home-link--contacts", {
  //     top: "100%",
  //     duration: 0.5,
  //   });
  // }, []);

  const openContacts = () => {
    setShowContacts(true);
  }

  const closeContacts = () => {
    setShowContacts(false);
  }

  useEffect(() => {
    if (!showContacts) return;

     // Darken background
    gsap.to(".ashade-home-background", {
      opacity: 0.25,
      duration: 0.8,
    });

    // Hide the "How to find me / Contact Me" home link
    gsap.to(".ashade-home-link--contacts", {
      opacity: 0,
      duration: 0.4,
    });

    // Show contact content
    gsap.fromTo(
      "#ashade-home-contacts",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
      }
    );
  }, [showContacts]);

  useEffect(() => {
    if (showContacts) return;

    gsap.to(".ashade-home-background", {
      opacity: 1,
      duration: 0.8,
    });

    gsap.to(".ashade-home-link--contacts", {
      opacity: 1,
      duration: 0.5,
    });
  }, [showContacts]);

  return (
    <main className={showContacts ? "contact-view-active" : ""}>
	    <div className="ashade-home-background ashade-page-background is-image"></div>
	    <header id="ashade-header">
        <div className="ashade-header-inner">
          <div className="ashade-logo-block">
            <Link href="/">
              <img src="img/logo.png" alt="King15 Photography" width="150" />
            </Link>
          </div>
          <div className="ashade-nav-block">
            <nav className="ashade-nav">
              <ul className="main-menu">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Me</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link href="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link href="#" className="ashade-aside-toggler">
                      <span className="ashade-aside-toggler__icon01"></span>
                      <span className="ashade-aside-toggler__icon02"></span>
                      <span className="ashade-aside-toggler__icon03"></span>
                    </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="ashade-home-link--works ashade-home-link-wrap">
        <Link href="/services">
          {/* <div className="ashade-home-link is-link"> */}
            <span>My Photo Portfolio</span>
            <span>Explore Works</span>
          {/* </div> */}
        </Link>
      </div>
      <div className={`ashade-home-link--contacts ashade-home-link-wrap ${ showContacts ? "is-active" : ""}`}>
        <div 
          className="ashade-home-link is-link"
          role="button"
          tabIndex={0} 
          onClick={() => setShowContacts(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowContacts(true);
            }
          }}
        >
          <span>How to find me</span>
          <span>Contact Me</span>
        </div>
      </div>
      <div className="ashade-page-title-wrap is-inactive ">
          <h1 className="ashade-page-title">&nbsp;</h1>
      </div>
      
      <section id="ashade-home-contacts" className={showContacts ? "is-active" : ""}>
        <div className="ashade-home-contacts-inner">
          <div className="ashade-row">
            <div className="ashade-col col-12">
              <p className="ashade-intro">Nice to meet you, friend! My name is Adrew Shade. I’m a professional photographer from Faridabad, Colorado. If you have any questions, suggestions or you just want to book a photo session feel free to use the contact form below. Lets make something great together!</p>
            </div>
          </div>
          <div className="ashade-row">
            <div className="ashade-col col-4">
              <div className="ashade-contact-details">
                <h4 className="ashade-contact-details__title">
                  <span>My Contacts and Socials</span>
                  How to Find Me
                </h4>
                <ul className="ashade-contact-details__list">
                  <li>
                    <i className="ashade-contact-icon la la-map-marker"></i>
                      First floor, DB-874, Sector-50, NIT Faridabad, Haryana 121001									
                  </li>
                  <li>
                    <i className="ashade-contact-icon la la-phone"></i>
                    <Link href="tel:+918802890848">+91 8802890848</Link>
                  </li>
                  <li>
                    <i className="ashade-contact-icon la la-envelope"></i>
                    <Link href="mailto:king15photographer@gmail.com">king15photographer@gmail.com</Link>
                  </li>
                  <li className="ashade-contact-socials">
                    <i className="ashade-contact-icon la la-share-alt"></i>
                    <Link href="https://www.linkedin.com/company/king15photography/" target="_blank" rel="noopener noreferrer">Ln</Link>
                    <Link href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw" target="_blank" rel="noopener noreferrer">In</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ashade-col col-8">
              <form className="ashade-contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="ashade-row ashade-small-gap">
                  <div className="ashade-col col-4">
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="ashade-col col-4">
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="ashade-col col-4">
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone" required />
                  </div>
                </div>
                <textarea name="message" id="message" placeholder="Your Message" required />
                <div className="ashade-contact-form__footer">
                  <div className="ashade-contact-form__response"></div>
                  <div className="ashade-contact-form__submit">
                    <input type="submit" value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className={`ashade-home-return ashade-back-wrap ${ showContacts ? "is-active" : "" }`}>
        <div 
          className="ashade-back is-home-return"
          role="button"
          tabIndex={0}
          onClick={() => setShowContacts(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowContacts(false);
            }
          }}
        >
          <span>Explore Works</span>
          <span>Back</span>
        </div>
      </div>
      <footer id="ashade-footer">
        <div className="ashade-footer-inner">
          <div className="ashade-footer__socials">
            <ul className="ashade-socials">
              <li>
                <Link href="https://www.linkedin.com/company/king15photography/">Ln</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/king15_photography?stkn=ZTBreHUyNXhvNGMw">Insta</Link>
              </li>
            </ul>
          </div>
          <div className="ashade-footer__copyright">
            Copyright &copy; 2020. All Rights Reserved.
          </div>
        </div>
      </footer>
      <aside id="ashade-aside">
        <Link href="#" className="ashade-aside-close">Close Sidebar</Link>
        <div className="ashade-aside-inner">
          <div className="ashade-aside-content">
            <div className="ashade-widget ashade-widget--about">
              <div className="ashade-widget--about__head">
                <img src="img/general/owner-avatar.jpg" alt="Pawan pal" />
                <h5>
                  <span>Photographer</span>
                  Pawan pal
                </h5>
              </div>
              <p>Nice to meet you, friend! My name is Pawan pal. I am from Faridabad. Photography is my passion. Through the lens the world looks different and I would like to show you this difference.</p>
              <p className="align-right">
                <Link href="/about" className="ashade-learn-more">Learn More</Link>
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
                  <Link href="tel:+918802890848">+91 8802890848</Link>
                </li>
                <li>
                  <i className="ashade-contact-icon la la-envelope"></i>
                  <Link href="mailto:king15photographer@gmail.com">king15photographer@gmail.com</Link>
                </li>
                <li className="ashade-contact-socials">
                  <i className="ashade-contact-icon la la-share-alt"></i>
                  <Link href="https://www.linkedin.com/company/king15photography/" target="https://www.linkedin.com/company/king15photography/">Ln</Link>
                  <Link href="https://www.instagram.com/king15_photography" target="https://www.instagram.com/king15_photography">Insta</Link>
                </li>
              </ul>
              <p className="align-right">
                <Link href="contacts" className="ashade-learn-more">Get in touch</Link>
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div className="ashade-home-block-overlay"></div>
      <div className="ashade-menu-overlay"></div>
      <div className="ashade-aside-overlay"></div>
      <div className="ashade-cursor is-inactive">
        <span className="ashade-cursor-circle"></span>
        <span className="ashade-cursor-slider"></span>
        <span className="ashade-cursor-close ashade-cursor-label">Close</span>
        <span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
      </div>
    </main>
    // <main style={{
    //   minHeight: "100vh",
    //   background: "black",
    //   color: "white",
    //   padding: "50px",
    // }}>
    //   <h1 style={{ fontSize: "50px" }}>
    //     KING15 TEST
    //   </h1>
    //   <p>
    //     Next.js page is rendering correctly.
    //   </p>
    // </main>
  );
}

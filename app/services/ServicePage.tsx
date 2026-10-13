"use client"

import { useEffect, useState } from "react";
import styles from "./Service.module.css";
import Image from "next/image";

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

      <aside className={styles['left-rail']}>
        <span className={styles['left-caption']}>What I&apos;m offering</span>
        <span className={styles['left-title']}>My Services</span>
      </aside>  
{/* 
      <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>What Im offering</span>
            My Services
        </h1>
      </div> */}
      <main className={styles['page-content']}>
		<div className="ashade-content-scroll">
		  <div className="ashade-content">

			<section className="ashade-section">
			  <div className="ashade-row">
				<div className="ashade-col col-12">
				  <p className="ashade-intro">I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</p>
				</div>
			  </div>
			</section>
				
            <section className="ashade-section">
                <div className="ashade-row">
                    <div className="ashade-col col-12">
                        <div className="ashade-service-card-grid">
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-personal.jpeg" alt="Personal Session" height="100" width="500" loading="eager" />
                                        {/* <img src="img/services/thmb-personal.jpeg" alt="Personal Session" height="100" width="500" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>For Beginner Models</span>
                                            Beauty
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>Beauty and wellness are all about confidence, self-care, elegance, and feeling your best. Our Beauty & Wellness Photography is designed to capture these qualities through visually engaging and thoughtfully created images. Whether you are a beauty brand, salon, spa, skincare company, wellness professional, or lifestyle business, we create photographs that represent your identity and connect with your audience..</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-wedding.png" height="100" width="500" alt="Wedding Photography" loading="eager" />
                                        {/* <img src="img/services/thmb-wedding.png" alt="Wedding Photography" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Emotions Captured in Time</span>
                                            Podcasts
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>A great podcast is more than a conversation—it is a collection of stories, ideas, expressions, and emotions. Our Podcast Photography focuses on capturing those authentic moments that bring your conversations to life. From thoughtful expressions and engaging interactions to candid reactions and behind-the-scenes moments, we create visuals that reflect the true personality of your podcast.</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-lovestory.jpeg" height="100" width="500" alt="Your Love Story" loading="eager" />
                                        {/* <img src="img/services/thmb-lovestory.jpeg" alt="Your Love Story" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Sell your properties faster</span>
                                            Real Estate Photography
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>Every property has a story, and professional photography helps bring that story to life. Our Real Estate Photography is focused on capturing spaces with clarity, detail, and visual appeal. From luxury homes and apartments to commercial spaces, offices, hotels, and architectural projects, we create images that showcase every property at its best..</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-travell.jpeg" height="100" width="500" alt="Commercial Photos" loading="eager" />
                                        {/* <img src="img/services/thmb-commercial.jpg" alt="Commercial Photos" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Automative and commercial</span>
                                            Automative
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>If we are talking about high-quality promotional photos, then you can not talk about savings, but you need to approach the matter with all responsibility and seriousness. After all, future sales directly depend on the quality of the finished photos.</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-nature.jpeg" height="100" width="500" alt="Nature Photography" loading="eager" />
                                        {/* <img src="img/services/thmb-nature.jpeg" alt="Nature Photography" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Fitness Reels and Photography</span>
                                            Fitness
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>TFitness is about energy, strength, movement, and dedication—and our photography and reels are designed to capture exactly that. We create dynamic fitness content for gyms, trainers, athletes, fitness influencers, and wellness brands. From workout reels and exercise demonstrations to professional fitness portraits and action shots, we capture every movement with engaging visuals.</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-travel.jpeg" height="100" width="500" alt="Travel Photography" loading="eager" />
                                        {/* <img src="img/services/thmb-travel.jpeg" alt="Travel Photography" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Visualise your Local Businesses</span>
                                        Local Business
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>Every local business has a unique story, and professional photography helps bring that story to your customers. We create engaging visuals for cafés, restaurants, salons, boutiques, retail stores, offices, clinics, and other local businesses. From interiors and products to team portraits, customer experiences, and behind-the-scenes moments, we capture images that reflect your brand and build trust.</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-travell.jpeg" height="100" width="500" alt="Travel Photography" loading="eager" />
                                        {/* <img src="img/services/thmb-travell.jpeg" alt="Travel Photography" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Your Personal Brands</span>
                                            Personal Brands
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>Your personal brand is a reflection of your personality, expertise, and unique story. Our Personal Brand Photography is designed to create authentic and professional visuals that represent who you are and what you stand for. Whether you are an entrepreneur, creator, coach, consultant, professional, or public personality, we capture images that build a strong and recognizable identity.</p>
                                    <div className="align-right">
                                        <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ashade-service-card">
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <Image src="/img/services/thmb-travelll.jpg" height="100" width="500" alt="Travel Photography" loading="eager" />
                                        {/* <img src="img/services/thmb-travelll.jpg" alt="Travel Photography" /> */}
                                    </div>
                                    <div className="ashade-service-card__label">
                                        <h4>
                                            <span>Product Photography</span>
                                            Product shoots
                                        </h4>
                                    </div>
                                </div>
                                <div className="ashade-service-card__content">
                                    <p>Great product photography can turn a simple product into a powerful visual experience. We create professional product images that highlight the design, quality, details, and unique features of your products. From beauty and skincare to fashion, food, lifestyle, and e-commerce products, every shoot is planned to match your brand’s style and audience.</p>
                                        <div className="align-right">
                                            <a href="javascript:void()" className="ashade-learn-more">Explore Works</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
				
            {/* <section className="ashade-section">
                <div className="ashade-row">
                    <div className="ashade-col col-12 align-center">
                        <h3>
                            <span>According to Successfully Projects</span>
                            My Skills Level
                        </h3>
                        <div className="ashade-row ashade-keep-on-tablet">
                            <div className="ashade-col col-3">
                                <div className="ashade-progress-item" data-delay="3000" data-percent="92">
                                    <span className="ashade-progress-label">Personal Brands</span>
                                </div>
                            </div>
                            <div className="ashade-col col-3">
                                <div className="ashade-progress-item" data-delay="3000" data-percent="91">
                                    <span className="ashade-progress-label">Podcasts</span>
                                </div>
                            </div>
                            <div className="ashade-col col-3">
                                <div className="ashade-progress-item" data-delay="3000" data-percent="88">
                                    <span className="ashade-progress-label">Automative</span>
                                </div>
                            </div>
                            <div className="ashade-col col-3">
                                <div className="ashade-progress-item" data-delay="3000" data-percent="87">
                                    <span className="ashade-progress-label">Commercial Photography</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
		  </div>
		</div>
	  </main>
{/*     
    <aside id="ashade-aside">
       	<a href="#" className="ashade-aside-close">Close Sidebar</a>
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
						<a href="about.html" className="ashade-learn-more">Learn More</a>
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
						<a href="contacts.html" className="ashade-learn-more">Get in touch</a>
					</p>
				</div>
        	</div>
        </div>
      </aside> */}

      {/* <div className="ashade-menu-overlay"></div>
      <div className="ashade-aside-overlay"></div>
      <div className="ashade-cursor is-inactive">
    	<span className="ashade-cursor-circle"></span>
    	<span className="ashade-cursor-slider"></span>
    	<span className="ashade-cursor-close ashade-cursor-label">Close</span>
    	<span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
      </div> */}
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

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectEnquiry from "@/components/ProjectEnquiry";
import Silk from "@/components/Silk";
import ServiceIndex from "@/components/ServiceIndex";
import SiteHeader from "@/components/SiteHeader";
import SiteMotion from "@/components/SiteMotion";
import WorkRail from "@/components/WorkRail";
import TypewriterText from "@/components/TypewriterText";
import {
  footerNavigationGroups,
  navigation,
  serviceNavigation,
} from "@/content/site-content";

const processSteps = [
  {
    name: "Think.",
    description: "Define the problem, audience, goals and constraints.",
  },
  {
    name: "Design.",
    description: "Shape the structure, interface and visual system.",
  },
  {
    name: "Develop.",
    description: "Build with scalable, maintainable technology.",
  },
  {
    name: "Launch.",
    description: "Test, refine and release with confidence.",
  },
  {
    name: "Grow.",
    description: "Measure, improve and support what comes next.",
  },
];

const aboutStatement =
  "N33 helps startups, SMEs, established businesses and brands plan, design and build the digital tools their work requires.";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteMotion />
      <SiteHeader
        brandHref="/"
        ctaHref="/contact"
        ctaLabel="Start a Project"
        links={navigation}
        mobileFoot={null}
      />

      <main id="main-content" className="site-shell">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero__silk" aria-hidden="true">
            <div className="hero__silk-fallback" />
            <Silk
              speed={5.2}
              scale={1.15}
              color="#303030"
              noiseIntensity={1.1}
              rotation={1.74}
            />
          </div>
          <div className="hero__wash" aria-hidden="true" />
          <div className="blueprint-grid hero__grid" aria-hidden="true" />

          <div className="hero__content page-gutter">
            <div className="hero__title-wrap">
              <h1
                id="hero-title"
                className="hero__title"
                aria-label="We Build Digital Presence."
              >
                <span className="hero__line" aria-hidden="true">
                  <span className="hero__line-inner">We Build</span>
                </span>
                <span className="hero__line" aria-hidden="true">
                  <span className="hero__line-inner">Digital Presence.</span>
                </span>
              </h1>
            </div>

            <div className="hero__support">
              <p className="hero__copy">
                N33 combines strategy, design, development and technology to
                build websites, digital products, custom systems and e-commerce
                experiences.
              </p>
              <div className="hero__actions" aria-label="Primary actions">
                <a className="action-link action-link--light" href="#contact">
                  <span>Project enquiry</span>
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
                </a>
                <a className="action-link action-link--ghost" href="#work">
                  <span>Selected work</span>
                  <ArrowDownRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>

            <div className="hero__foot" aria-hidden="true">
              <span>N33 / Digital agency</span>
              <span className="hero__scroll">
                Scroll to explore
                <span className="hero__scroll-line" />
              </span>
              <span>Strategy / Design / Technology</span>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="chapter services-section page-gutter"
          aria-labelledby="services-title"
        >
          <div className="section-intro reveal-block">
            <div className="section-intro__main">
              <span className="section-intro__badge">Services</span>
              <h2 id="services-title">
                Strategy, design, development and growth.
              </h2>
            </div>
            <div className="section-intro__desc">
              <p>
                N33 connects strategy, design, development and marketing from the
                first decision through launch and ongoing support.
              </p>
            </div>
          </div>
          <ServiceIndex />
        </section>

        <section id="work" className="chapter work-section" aria-labelledby="work-title">
          <div className="section-intro section-intro--work page-gutter reveal-block">
            <div className="section-intro__main">
              <span className="section-intro__badge">Selected work</span>
              <h2 id="work-title">Built around real business needs.</h2>
            </div>
            <div className="section-intro__desc">
              <p>
                Project information will appear here after N33 approves the
                details.
              </p>
            </div>
          </div>
          <WorkRail />
        </section>

        <section
          id="process"
          className="chapter process-section page-gutter"
          aria-labelledby="process-title"
        >
          <div className="process-layout">
            <div className="process-heading reveal-block">
              <span className="section-intro__badge">Process</span>
              <h2 id="process-title">From first thought to what comes next.</h2>
              <p>
                N33 carries the project direction through delivery and support.
              </p>
            </div>
            <ol className="process-steps">
              {processSteps.map((step, index) => (
                <li className="process-step" key={step.name}>
                  <span className="process-step__line" aria-hidden="true" />
                  <span className="process-step__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.name}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="studio"
          className="chapter about-section page-gutter"
          aria-labelledby="studio-title"
        >
          <div className="about-layout">
            <div className="about-heading reveal-block">
              <span className="section-intro__badge">N33</span>
              <h2 id="studio-title">One digital partner across the work.</h2>
            </div>
            <p className="about-statement" aria-label={aboutStatement}>
              {aboutStatement.split(" ").map((word, index) => (
                <span
                  className="about-word"
                  aria-hidden="true"
                  key={`${word}-${index}`}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section page-gutter"
          aria-labelledby="contact-title"
        >
          <div className="contact-layout">
            <div className="contact-copy reveal-block">
              <p className="contact-copy__context">Project enquiry</p>
              <h2 id="contact-title">Tell us about your project.</h2>
              <p>
                Share what you need to build, who it serves and where the
                project stands.
              </p>
            </div>
            <ProjectEnquiry />
          </div>
        </section>

        <footer className="site-footer page-gutter">
          <div className="site-footer__top">
            <a className="site-footer__brand" href="#home">
              <TypewriterText text="N33 STUDIO." />
            </a>
            <a className="site-footer__back" href="#home">
              Back to top
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.4} />
            </a>
          </div>

          <div className="site-footer__grid">
            {/* Column 1: PAGES */}
            <div className="site-footer__col">
              <div className="site-footer__group">
                <p className="site-footer__label">Pages</p>
                <nav className="site-footer__nav" aria-label="Pages navigation">
                  {footerNavigationGroups[0].links.map((link) => (
                    <Link className="site-footer__link" href={link.href} key={link.href}>
                      <span>{link.label}</span>
                      <span className="site-footer__link-arrow" aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Column 2: SERVICES */}
            <div className="site-footer__col">
              <div className="site-footer__group">
                <p className="site-footer__label">Services</p>
                <ul className="site-footer__list">
                  {serviceNavigation.map((service) => (
                    <li key={service.href}>
                      <Link className="site-footer__link" href={service.href}>
                        <span>{service.label}</span>
                        <span className="site-footer__link-arrow" aria-hidden="true">↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: CONTACT */}
            <div className="site-footer__col">
              <div className="site-footer__group">
                <p className="site-footer__label">Contact</p>
                <nav className="site-footer__nav" aria-label="Contact options">
                  <a className="site-footer__link" href="mailto:hello@n33studio.com">
                    <span>hello@n33studio.com</span>
                    <span className="site-footer__link-arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="site-footer__link" href="https://wa.me/601162389981" rel="noreferrer" target="_blank">
                    <span>+60 11-6238 9981</span>
                    <span className="site-footer__link-arrow" aria-hidden="true">↗</span>
                  </a>
                </nav>
              </div>
            </div>

            {/* Column 4: COMPANY POLICIES */}
            <div className="site-footer__col">
              <div className="site-footer__group">
                <p className="site-footer__label">Company Policies</p>
                <nav className="site-footer__nav" aria-label="Company policies">
                  <Link className="site-footer__link" href="/privacy">
                    <span>Privacy Policy</span>
                    <span className="site-footer__link-arrow" aria-hidden="true">↗</span>
                  </Link>
                  <Link className="site-footer__link" href="/terms">
                    <span>Terms of Use</span>
                    <span className="site-footer__link-arrow" aria-hidden="true">↗</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span>© 2026 N33.</span>
            <div className="site-footer__socials">
              <a
                className="site-footer__social-link"
                href="https://threads.net/@n33studio"
                rel="noreferrer"
                target="_blank"
              >
                Threads ↗
              </a>
              <span className="site-footer__social-divider">/</span>
              <a
                className="site-footer__social-link"
                href="https://instagram.com/n33studio"
                rel="noreferrer"
                target="_blank"
              >
                Instagram ↗
              </a>
            </div>
            <span>We Build Digital Presence.</span>
          </div>
        </footer>
      </main>
    </>
  );
}

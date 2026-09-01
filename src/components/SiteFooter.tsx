import Link from "next/link";
import BackToTop from "./BackToTop";
import TypewriterText from "./TypewriterText";
import {
  footerNavigationGroups,
  serviceNavigation,
} from "@/content/site-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer page-gutter">
      <div className="site-footer__top">
        <Link className="site-footer__brand" href="/" aria-label="N33 Studio home">
          <TypewriterText text="N33 STUDIO." />
        </Link>
        <BackToTop />
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
              <a
                className="site-footer__link"
                href="https://wa.me/601162389981"
                rel="noreferrer"
                target="_blank"
              >
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
  );
}

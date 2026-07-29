import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  contactPage,
  footerNavigationGroups,
  footerContent,
  socialLinks,
} from "@/content/site-content";

export default function SiteFooter() {
  return (
    <footer className="route-footer page-gutter">
      <div className="route-footer__lead">
        <Link className="route-footer__brand" href="/" aria-label="N33 Studio home">
          N33 STUDIO.
        </Link>
        <p>{footerContent.description}</p>
      </div>

      <div className="route-footer__grid">
        <div className="route-footer__navigation">
          {footerNavigationGroups.map((group) => (
            <nav aria-label={`${group.label} navigation`} key={group.label}>
              <p>{group.label}</p>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={15}
                    strokeWidth={1.25}
                  />
                </Link>
              ))}
            </nav>
          ))}

          <nav aria-label="Social navigation">
            <p>Connect</p>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.25} />
              </a>
            ))}
          </nav>
        </div>

        <div className="route-footer__details">
          <p>
            <span>Email:</span>
            <a href={`mailto:${contactPage.details.email}`}>
              {contactPage.details.email}
            </a>
          </p>
          <p>
            <span>Phone / WhatsApp:</span>
            <a href={`tel:${contactPage.details.phone.replace(/[^+\d]/g, "")}`}>
              {contactPage.details.phone}
            </a>
          </p>
          <p>
            <span>Location:</span>
            {contactPage.details.location}
          </p>
          <p>
            <span>Hours:</span>
            {contactPage.details.hours}
          </p>
        </div>

        <div className="route-footer__legal" aria-label="Legal">
          {footerContent.legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="route-footer__bottom">
        <span>{footerContent.copyright}</span>
        <span>We Build Digital Presence.</span>
      </div>
    </footer>
  );
}

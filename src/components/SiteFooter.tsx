import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  contactPage,
  footerNavigationGroups,
  footerContent,
} from "@/content/site-content";

export default function SiteFooter() {
  return (
    <footer className="route-footer page-gutter">
      <div className="route-footer__lead">
        <Link className="route-footer__brand" href="/" aria-label="N33 home">
          N33.
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
        </div>

        <div className="route-footer__details">
          <p>
            <span>Email:</span>
            {contactPage.details.email}
          </p>
          <p>
            <span>Phone:</span>
            {contactPage.details.phone}
          </p>
          <p>
            <span>Location:</span>
            {contactPage.details.location}
          </p>
        </div>

        <div className="route-footer__legal" aria-label="Legal">
          {footerContent.legal.map((label) => (
            <span aria-disabled="true" key={label}>
              {label}
            </span>
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

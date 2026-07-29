import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SubpageMotion from "@/components/SubpageMotion";
import { navigation } from "@/content/site-content";
import "./site-pages.css";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SubpageMotion />
      <SiteHeader
        brandHref="/"
        ctaHref="/contact"
        ctaLabel="Start a Project"
        links={navigation}
        mobileFoot={null}
      />
      <main id="main-content" className="route-shell">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

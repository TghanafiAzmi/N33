"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const homeLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#studio", label: "Studio" },
];

const homeMobileFoot = [
  "N33 / Digital agency",
  "Strategy / Design / Technology",
];

type NavigationLink = {
  href: string;
  label: string;
  children?: readonly NavigationLink[];
};

type SiteHeaderProps = {
  brandHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  links?: readonly NavigationLink[];
  mobileFoot?: readonly string[] | null;
};

export default function SiteHeader({
  brandHref = "#home",
  ctaHref = "#contact",
  ctaLabel = "Project enquiry",
  links = homeLinks,
  mobileFoot = homeMobileFoot,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !open) {
        return;
      }

      const focusable = [
        menuButtonRef.current,
        ...Array.from(
          mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []
        ),
      ].filter(
        (
          element
        ): element is HTMLButtonElement | HTMLAnchorElement => element !== null
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyboard);
    desktop.addEventListener("change", closeAtDesktop);
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      requestAnimationFrame(() => {
        mobileNavRef.current?.scrollTo({ top: 0 });
        mobileNavRef.current
          ?.querySelector<HTMLAnchorElement>("a")
          ?.focus({ preventScroll: true });
      });
    }

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      desktop.removeEventListener("change", closeAtDesktop);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const isCurrent = (href: string) => pathname === href;
  const hasActiveChild = (link: NavigationLink) =>
    link.children?.some((child) => isCurrent(child.href)) ?? false;

  return (
    <>
      <header className="site-header">
        <Link
          className="site-header__brand"
          href={brandHref}
          onClick={closeMenu}
        >
          N33.
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {links.map((link) =>
            link.children ? (
              <div
                className="site-header__nav-group"
                data-active={isCurrent(link.href) || hasActiveChild(link)}
                key={link.href}
              >
                <Link
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  {link.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={13}
                    strokeWidth={1.5}
                  />
                </Link>
                <div className="site-header__submenu">
                  {link.children.map((child) => (
                    <Link
                      href={child.href}
                      aria-current={
                        isCurrent(child.href) ? "page" : undefined
                      }
                      key={child.href}
                    >
                      {child.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={14}
                        strokeWidth={1.25}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link className="site-header__enquiry" href={ctaHref}>
          {ctaLabel}
          <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.5} />
        </Link>

        <button
          ref={menuButtonRef}
          className="site-header__menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Close" : "Menu"}
          {open ? (
            <X aria-hidden="true" size={18} strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" size={18} strokeWidth={1.5} />
          )}
        </button>
      </header>

      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className="mobile-nav"
        data-open={open}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-nav__links">
          {links.map((link, index) => (
            <div className="mobile-nav__group" key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </Link>
              {link.children ? (
                <div className="mobile-nav__sub-links">
                  {link.children.map((child) => (
                    <Link
                      href={child.href}
                      aria-current={
                        isCurrent(child.href) ? "page" : undefined
                      }
                      key={child.href}
                      onClick={closeMenu}
                    >
                      {child.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={16}
                        strokeWidth={1.25}
                      />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link href={ctaHref} onClick={closeMenu}>
            {ctaLabel}
            <ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.25} />
          </Link>
        </div>
        {mobileFoot ? (
          <div className="mobile-nav__foot" aria-hidden="true">
            {mobileFoot.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        ) : null}
      </nav>
    </>
  );
}

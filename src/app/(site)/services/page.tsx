import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { servicesPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: servicesPage.title,
  description: servicesPage.introduction[0],
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageMasthead
        image="/images/abstract/gradient-fold.jpg"
        introduction={servicesPage.introduction}
        title={servicesPage.title}
        variant="offset"
      />

      <section
        className="services-directory page-gutter"
        aria-label="Services"
      >
        <ol className="services-directory__list">
          {servicesPage.services.map((service, index) => (
            <li
              className={`services-directory__item services-directory__item--${index + 1} page-reveal`}
              key={service.title}
            >
              <article className="services-directory__article">
                <div className="services-directory__heading">
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{service.title}</h2>
                </div>

                <EditorialMedia
                  className="services-directory__media"
                  src={service.image}
                  sizes="(max-width: 900px) 100vw, 42vw"
                />

                <div className="services-directory__details">
                  <p>{service.description}</p>
                  <ul>
                    {service.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  <Link
                    className="services-directory__link"
                    href={service.href}
                  >
                    <span>{service.linkLabel}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.35}
                    />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <CallToAction
        description={servicesPage.closing.description}
        primary={{
          href: servicesPage.closing.href,
          label: servicesPage.closing.label,
        }}
        title={servicesPage.closing.title}
      />
    </div>
  );
}

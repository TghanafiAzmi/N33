import type { Metadata } from "next";
import ContactProjectForm from "@/components/ContactProjectForm";
import PageMasthead from "@/components/PageMasthead";
import { contactPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.introduction[0],
};

export default function ContactPage() {
  return (
    <article className="contact-page">
      <PageMasthead
        image="/images/abstract/ambient-ridge.jpg"
        introduction={contactPage.introduction}
        title={contactPage.title}
        variant="offset"
      />

      <section
        className="contact-page-enquiry page-gutter page-reveal"
        aria-labelledby="project-enquiry-title"
      >
        <div className="contact-page-enquiry__heading">
          <h2 id="project-enquiry-title">{contactPage.formTitle}</h2>
        </div>
        <ContactProjectForm />
      </section>

      <section
        className="contact-page-details page-gutter page-reveal"
        aria-labelledby="direct-contact-title"
      >
        <div className="contact-page-details__heading">
          <h2 id="direct-contact-title">Direct Contact Details</h2>
          <p>{contactPage.details.availability}</p>
        </div>
        <dl className="contact-page-details__list">
          <div>
            <dt>Email</dt>
            <dd>{contactPage.details.email}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{contactPage.details.phone}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{contactPage.details.location}</dd>
          </div>
        </dl>
      </section>
    </article>
  );
}

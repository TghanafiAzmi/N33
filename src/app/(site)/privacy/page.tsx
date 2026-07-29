import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import PageMasthead from "@/components/PageMasthead";
import { privacyPolicy } from "@/content/site-content";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | N33 Studio`,
  description: privacyPolicy.content[0],
};

export default function PrivacyPage() {
  return (
    <>
      <PageMasthead
        image="/images/abstract/ambient-ridge.jpg"
        introduction={[`Last Updated: ${privacyPolicy.lastUpdated}`]}
        title={privacyPolicy.title}
        variant="balanced"
      />

      <section className="legal-page-content page-gutter page-reveal">
        <article className="legal-article">
          {privacyPolicy.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>

      <CallToAction
        description="Have questions about privacy or how your project information is handled?"
        primary={{ href: "/contact", label: "Contact N33 Studio" }}
        title="Need Further Clarification?"
      />
    </>
  );
}

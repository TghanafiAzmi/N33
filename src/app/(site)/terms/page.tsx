import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import PageMasthead from "@/components/PageMasthead";
import { termsOfUse } from "@/content/site-content";

export const metadata: Metadata = {
  title: `${termsOfUse.title} | N33 Studio`,
  description: termsOfUse.content[0],
};

export default function TermsPage() {
  return (
    <>
      <PageMasthead
        image="/images/abstract/dark-botanical.jpg"
        introduction={[`Last Updated: ${termsOfUse.lastUpdated}`]}
        title={termsOfUse.title}
        variant="balanced"
      />

      <section className="legal-page-content page-gutter page-reveal">
        <article className="legal-article">
          {termsOfUse.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>

      <CallToAction
        description="Questions regarding our terms or intellectual property rights?"
        primary={{ href: "/contact", label: "Contact N33 Studio" }}
        title="Need More Information?"
      />
    </>
  );
}

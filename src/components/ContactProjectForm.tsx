"use client";

import { ArrowUpRight } from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { contactPage } from "@/content/site-content";

const maximumAttachmentSize = 10 * 1024 * 1024;

export default function ContactProjectForm() {
  const [hasSubmissionError, setHasSubmissionError] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasSubmissionError) {
      errorRef.current?.focus();
    }
  }, [hasSubmissionError]);

  const handleAttachment = (event: ChangeEvent<HTMLInputElement>) => {
    const attachment = event.currentTarget;
    const file = attachment.files?.[0];

    attachment.setCustomValidity(
      file && file.size > maximumAttachmentSize
        ? contactPage.error.description
        : ""
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmissionError(true);
  };

  const handleTryAgain = () => {
    setHasSubmissionError(false);
    requestAnimationFrame(() => nameRef.current?.focus());
  };

  return (
    <div className="project-form">
      <form
        className="project-form__fields"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="project-form__field">
          <label htmlFor="contact-name">Your name</label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="project-form__field">
          <label htmlFor="contact-email">Work email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@company.com"
            required
          />
        </div>

        <div className="project-form__field project-form__field--wide">
          <label htmlFor="contact-company">Company or organisation</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Enter your company name"
            required
          />
        </div>

        <div className="project-form__field">
          <label htmlFor="contact-service">
            What do you need help with?
          </label>
          <select
            id="contact-service"
            name="service"
            defaultValue=""
            required
          >
            <option value="" disabled />
            {contactPage.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="project-form__field">
          <label htmlFor="contact-budget">Estimated project budget</label>
          <select
            id="contact-budget"
            name="budget"
            defaultValue=""
            required
          >
            <option value="" disabled />
            {contactPage.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="project-form__field project-form__field--wide">
          <label htmlFor="contact-timeline">Preferred timeline</label>
          <select
            id="contact-timeline"
            name="timeline"
            defaultValue=""
            required
          >
            <option value="" disabled />
            {contactPage.timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="project-form__field project-form__field--wide">
          <label htmlFor="contact-project">Tell us about the project</label>
          <textarea
            id="contact-project"
            name="project"
            rows={7}
            placeholder="What are you planning, what is not working, and what would a successful result look like?"
            required
          />
        </div>

        <div className="project-form__field project-form__field--wide">
          <label htmlFor="contact-attachment">Supporting document</label>
          <input
            id="contact-attachment"
            name="attachment"
            type="file"
            accept=".csv,.doc,.docx,.jpeg,.jpg,.key,.odt,.pdf,.png,.ppt,.pptx,.rtf,.txt,.webp,.xls,.xlsx"
            aria-describedby="contact-attachment-help"
            onChange={handleAttachment}
          />
          <p id="contact-attachment-help" className="project-form__help">
            Optional. Attach a brief, reference, requirement document or
            relevant file.
          </p>
        </div>

        <div className="project-form__consent project-form__field--wide">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
          />
          <label htmlFor="contact-consent">
            I agree that N33 may use the information provided to respond to
            this enquiry.
          </label>
        </div>

        <div className="project-form__submit project-form__field--wide">
          <button type="submit">
            <span>Send Project Enquiry</span>
            <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.35} />
          </button>
          <p>{contactPage.supportingMessage}</p>
        </div>
      </form>

      {hasSubmissionError ? (
        <div
          ref={errorRef}
          className="project-form__error"
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
        >
          <h3>{contactPage.error.title}</h3>
          <p>{contactPage.error.description}</p>
          <button type="button" onClick={handleTryAgain}>
            {contactPage.error.label}
          </button>
        </div>
      ) : null}
    </div>
  );
}

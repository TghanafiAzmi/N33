"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ProjectEnquiry() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      "N33 has not connected the submission destination, so this form cannot send your enquiry yet."
    );
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="enquiry-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="enquiry-field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="enquiry-field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          required
        />
      </div>
      <div className="enquiry-field">
        <label htmlFor="project-type">Project type</label>
        <select id="project-type" name="projectType" defaultValue="" required>
          <option value="" disabled>
            Select project type
          </option>
          <option>Website</option>
          <option>Landing page</option>
          <option>E-commerce platform</option>
          <option>Custom software</option>
          <option>UI/UX design</option>
          <option>Digital marketing</option>
          <option>Other digital solution</option>
        </select>
      </div>
      <div className="enquiry-field enquiry-field--wide">
        <label htmlFor="brief">Project brief</label>
        <textarea id="brief" name="brief" rows={4} required />
      </div>
      <div className="enquiry-form__action">
        <button type="submit">
          Send enquiry
          <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.4} />
        </button>
        <p className="enquiry-form__status" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}

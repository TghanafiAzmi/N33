"use client";

import { ArrowDownRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    name: "Digital Marketing",
    description:
      "N33 plans digital strategy, campaigns and content to reach the right audience and support growth.",
  },
  {
    name: "Website Design",
    description:
      "N33 designs clear structures, responsive interfaces and visual systems around your business and audience.",
  },
  {
    name: "Website Development",
    description:
      "N33 develops fast, accessible websites that stay manageable and support future change.",
  },
  {
    name: "Custom Software Development",
    description:
      "N33 builds internal systems and digital products around the way your team works.",
  },
  {
    name: "UI/UX Design",
    description:
      "N33 maps user journeys and designs interface systems that make complex products easier to use.",
  },
];

export default function ServiceIndex() {
  const [active, setActive] = useState(0);

  return (
    <div className="service-index">
      <div className="service-index__rows">
        {services.map((service, index) => {
          const expanded = active === index;
          const detailsId = `service-details-${index}`;

          return (
            <div
              className="service-row"
              data-active={expanded}
              key={service.name}
              onMouseEnter={() => setActive(index)}
            >
              <button
                className="service-row__button"
                type="button"
                aria-expanded={expanded}
                aria-controls={detailsId}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="service-row__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="service-row__name">{service.name}</span>
                <ArrowDownRight
                  className="service-row__icon"
                  aria-hidden="true"
                  size={26}
                  strokeWidth={1.2}
                />
              </button>
              <div
                id={detailsId}
                className="service-row__detail"
                aria-hidden={!expanded}
              >
                <div>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="service-stage"
        data-service={active + 1}
        aria-hidden="true"
      >
        <div className="service-stage__grid" />
        <span className="service-stage__number">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="service-stage__name">{services[active].name}</span>
        <span className="service-stage__axis service-stage__axis--x" />
        <span className="service-stage__axis service-stage__axis--y" />
      </div>
    </div>
  );
}

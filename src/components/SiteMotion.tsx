"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitHeading } from "@/lib/split-heading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SiteMotion() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 901px)",
        mobile: "(max-width: 900px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          gsap.set(
            [
              ".site-header",
              ".hero__line-inner",
              ".hero__copy",
              ".hero__actions",
              ".hero__foot",
              ".reveal-block",
              ".service-row",
              ".project-card",
              ".process-step",
              ".process-step__line",
              ".about-word",
              ".capability-item",
              ".enquiry-field",
              ".enquiry-form__action",
              ".site-footer__brand",
              ".site-footer__grid",
            ],
            { clearProps: "all" }
          );
          return;
        }

        const headingSplits = gsap.utils
          .toArray<HTMLElement>(".site-shell h2, .site-shell h3")
          .map((heading) => {
            const split = splitHeading(heading);

            gsap.from(split.words, {
              autoAlpha: 0,
              duration: 0.9,
              ease: "power4.out",
              rotateX: -12,
              stagger: 0.035,
              transformOrigin: "50% 100%",
              yPercent: 115,
              scrollTrigger: {
                trigger: heading,
                start: "top 84%",
                once: true,
              },
            });

            return split;
          });

        const intro = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        intro
          .from(".site-header", {
            yPercent: -110,
            duration: 1,
          })
          .from(
            ".hero__line-inner",
            {
              yPercent: 115,
              duration: 1.25,
              stagger: 0.1,
            },
            0.15
          )
          .from(
            [".hero__copy", ".hero__actions"],
            {
              autoAlpha: 0,
              y: 32,
              duration: 0.9,
              stagger: 0.12,
            },
            0.62
          )
          .from(
            ".hero__foot",
            {
              autoAlpha: 0,
              y: 16,
              duration: 0.75,
            },
            0.85
          )
          .fromTo(
            ".hero__scroll-line",
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 0.8,
              ease: "power3.inOut",
            },
            1
          );

        gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 70,
            duration: 1.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          });
        });

        gsap.from(".service-row", {
          autoAlpha: 0,
          y: 45,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".service-index",
            start: "top 78%",
            once: true,
          },
        });

        gsap.utils
          .toArray<HTMLElement>(".process-step")
          .forEach((step) => {
            const line = step.querySelector(".process-step__line");

            gsap.from(step, {
              autoAlpha: 0.18,
              y: 80,
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top 88%",
                end: "top 48%",
                scrub: 0.7,
              },
            });

            if (line) {
              gsap.from(line, {
                scaleX: 0,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: step,
                  start: "top 84%",
                  end: "top 58%",
                  scrub: 0.7,
                },
              });
            }
          });

        if (desktop) {
          gsap.fromTo(
            ".about-word",
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.055,
              scrollTrigger: {
                trigger: ".about-statement",
                start: "top 78%",
                end: "bottom 46%",
                scrub: 0.8,
              },
            }
          );
        } else {
          gsap.set(".about-word", { opacity: 1 });
        }

        gsap.from(".capability-item", {
          autoAlpha: 0,
          y: 55,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".capability-list",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from([".enquiry-field", ".enquiry-form__action"], {
          autoAlpha: 0,
          y: 36,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".enquiry-form",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".site-footer__brand", {
          yPercent: 50,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".site-footer",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".site-footer__grid", {
          autoAlpha: 0,
          y: 30,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".site-footer__grid",
            start: "top 88%",
            once: true,
          },
        });

        if (desktop) {
          const track = document.querySelector<HTMLElement>(".work-track");
          const pin = document.querySelector<HTMLElement>(".work-pin");

          if (track && pin) {
            const distance = () =>
              Math.max(0, track.scrollWidth - window.innerWidth);

            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: pin,
                start: "top top",
                end: () => `+=${distance()}`,
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            gsap.from(".project-card", {
              scale: 0.92,
              autoAlpha: 0.55,
              duration: 1,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: pin,
                start: "top 76%",
                once: true,
              },
            });
          }
        }

        return () => {
          headingSplits.forEach((split) => split.revert());
        };
      }
    );

    return () => media.revert();
  }, []);

  return null;
}

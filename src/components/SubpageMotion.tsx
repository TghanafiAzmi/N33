"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { splitHeading } from "@/lib/split-heading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SubpageMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
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
                ".page-masthead h1",
                ".page-masthead__intro > *",
                ".page-masthead__media",
                ".page-reveal",
                ".page-media img",
                ".route-footer__lead",
                ".route-footer__grid",
                ".route-footer__bottom",
              ],
              { clearProps: "all" }
            );
            return;
          }

          const mastheadHeading =
            document.querySelector<HTMLElement>(".page-masthead h1");
          const mastheadSplit = mastheadHeading
            ? splitHeading(mastheadHeading)
            : null;
          const contentHeadingSplits = gsap.utils
            .toArray<HTMLElement>(
              ".route-shell h2, .route-shell h3"
            )
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

          const entry = gsap.timeline({
            defaults: { ease: "power4.out" },
          });

          entry
            .from(
              mastheadSplit?.words ?? [],
              {
                autoAlpha: 0,
                duration: 1.05,
                rotateX: -12,
                stagger: 0.045,
                transformOrigin: "50% 100%",
                yPercent: 115,
              }
            )
            .from(
              ".page-masthead__intro > *",
              {
                autoAlpha: 0,
                y: 28,
                duration: 0.75,
                stagger: 0.1,
              },
              0.32
            )
            .from(
              ".page-masthead__media",
              {
                autoAlpha: 0,
                clipPath: "inset(18% 0 0 0)",
                duration: 1.2,
              },
              0.35
            );

          gsap.utils.toArray<HTMLElement>(".page-reveal").forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 58,
              duration: 0.95,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                once: true,
              },
            });
          });

          if (desktop) {
            gsap.utils
              .toArray<HTMLElement>(".page-media")
              .forEach((frame) => {
                const image = frame.querySelector("img");

                if (!image || frame.classList.contains("page-masthead__media")) {
                  return;
                }

                gsap.fromTo(
                  image,
                  { scale: 1.08 },
                  {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: frame,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.8,
                    },
                  }
                );
              });
          }

          const processLine =
            document.querySelector<HTMLElement>(".process-journey__line");

          if (processLine) {
            gsap.from(processLine, {
              scaleY: 0,
              transformOrigin: "top",
              ease: "none",
              scrollTrigger: {
                trigger: ".process-journey",
                start: "top 72%",
                end: "bottom 54%",
                scrub: 0.8,
              },
            });
          }

          gsap.from(
            [
              ".route-footer__lead",
              ".route-footer__grid",
              ".route-footer__bottom",
            ],
            {
              autoAlpha: 0,
              y: 36,
              duration: 0.85,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".route-footer",
                start: "top 82%",
                once: true,
              },
            }
          );

          return () => {
            mastheadSplit?.revert();
            contentHeadingSplits.forEach((split) => split.revert());
          };
        }
      );

      ScrollTrigger.refresh();

      return () => media.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}

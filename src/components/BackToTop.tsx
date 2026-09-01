"use client";

import { useLenis } from "lenis/react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useState } from "react";

interface BackToTopProps {
  className?: string;
}

export default function BackToTop({
  className = "site-footer__back",
}: BackToTopProps) {
  const lenis = useLenis();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isTransitioning) return;
    setIsTransitioning(true);

    let overlay = document.getElementById("dissolve-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "dissolve-overlay";
      document.body.appendChild(overlay);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    tl.to(overlay, {
      opacity: 1,
      duration: 0.42,
      ease: "power2.inOut",
      onStart: () => {
        gsap.to("main", {
          filter: "blur(6px)",
          scale: 0.985,
          duration: 0.42,
          ease: "power2.inOut",
        });
      },
    })
      .add(() => {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      })
      .to(overlay, {
        opacity: 0,
        duration: 0.55,
        delay: 0.06,
        ease: "power2.out",
        onStart: () => {
          gsap.to("main", {
            filter: "blur(0px)",
            scale: 1,
            duration: 0.55,
            ease: "power2.out",
          });
        },
      });
  };

  return (
    <button
      className={className}
      onClick={handleScrollToTop}
      type="button"
      aria-label="Back to top of page"
    >
      Back to top
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.4} />
    </button>
  );
}

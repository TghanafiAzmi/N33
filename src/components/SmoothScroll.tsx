"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollManager() {
  const pathname = usePathname();

  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      }}
    >
      <ScrollManager />
      {children}
    </ReactLenis>
  );
}

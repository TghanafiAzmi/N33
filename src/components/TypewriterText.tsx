"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterText({
  text,
  className = "",
  speed = 100,
  delay = 200,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeNextChar, speed);
      }
    };

    timeoutId = setTimeout(typeNextChar, delay);
    return () => clearTimeout(timeoutId);
  }, [started, text, speed, delay]);

  return (
    <span className={className} ref={elementRef}>
      {displayedText}
      <span className="typewriter-cursor" aria-hidden="true">
        _
      </span>
    </span>
  );
}

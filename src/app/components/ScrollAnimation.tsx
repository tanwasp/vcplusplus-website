"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const animationClass = {
    "fade-up": isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8",
    "fade-left": isVisible
      ? "animate-fade-in-left"
      : "opacity-0 -translate-x-8",
    "fade-right": isVisible
      ? "animate-fade-in-right"
      : "opacity-0 translate-x-8",
    "scale-in": isVisible ? "animate-scale-in" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClass[animation]} ${className}`}
    >
      {children}
    </div>
  );
}

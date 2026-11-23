"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "@/context/StoreContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * Awaken Bakery `.Grow_Anim` magnetic letter hover effect:
 * Hovering any individual letter scales it to 1.22 with a silky 2.4s return,
 * while the word softens to scale(0.95) in signature pink.
 */
export function GrowText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`Grow_Anim ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, wi) => (
        <span className="word" aria-hidden="true" key={`${word}-${wi}`}>
          {word.split("").map((char, ci) => (
            <span className="letter" key={`${char}-${ci}`}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

/**
 * Awaken Bakery `.Cool_Text_Anim.Words`:
 * Masked word-by-word upward tilt reveal (`y: 101%, rotation: 12 -> 0`, `expo.out`).
 */
export function RevealWords({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0.12,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = el.querySelectorAll(".Word > span");
    const ctx = gsap.context(() => {
      gsap.from(spans, {
        y: "105%",
        rotation: 12,
        duration: 1.35,
        delay,
        stagger: { amount: 0.45 },
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, text]);

  const words = text.split(" ");

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      className={className}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, idx) => (
        <span className="Word" aria-hidden="true" key={`${word}-${idx}`}>
          <span>{word}</span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Awaken Bakery `.Cool_Anim.Fade`:
 * Smooth `opacity: 0, y: 3.5rem -> 0` entrance on scroll.
 */
export function RevealFade({
  children,
  className = "",
  delay = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: "3.5rem",
        duration: 1.05,
        delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Awaken Bakery `.Form_Button.Relative_To_Mouse`:
 * Tracks exact cursor entry point (`--mouse-x`, `--mouse-y`) so the radial fill
 * expands organically from where the pointer touches the pill.
 */
export function MagneticRippleWrapper({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`Form_Button Relative_To_Mouse ${className}`}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Route link that triggers Awaken Bakery's curved SVG page curtain transition.
 */
export function TransitionLink({
  href,
  className = "",
  children,
  onClick,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const { navigateWithTransition } = useStore();

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onClick?.();
        navigateWithTransition(href);
      }}
    >
      {children}
    </Link>
  );
}

/**
 * Hand-drawn editorial bakery sketches for Awaken Bakery's floating cake & cookie doodles.
 */
export function BakeryDoodle({
  variant,
  className = "",
}: {
  variant: "cake-slice" | "cookies" | "cupcake" | "bread";
  className?: string;
}) {
  if (variant === "cake-slice") {
    return (
      <svg viewBox="0 0 120 110" fill="none" className={className} aria-hidden="true">
        <path
          d="M16 54L64 16C74 26 98 30 105 46L103 86C80 94 42 98 18 92L16 54Z"
          fill="#4f515e"
          stroke="#4f515e"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M18 66C45 71 78 67 104 60" stroke="#fcebd6" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 80C46 84 78 80 103 73" stroke="#fcebd6" strokeWidth="4" strokeLinecap="round" />
        <path
          d="M18 52C38 44 74 36 104 45C92 31 74 20 63 16L18 52Z"
          fill="#fcebd6"
          stroke="#4f515e"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="43" r="9" fill="#c28b8b" stroke="#4f515e" strokeWidth="2.5" />
        <path d="M29 34C27 29 31 26 35 28" stroke="#4f515e" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "cookies") {
    return (
      <svg viewBox="0 0 130 90" fill="none" className={className} aria-hidden="true">
        <ellipse cx="68" cy="70" rx="52" ry="12" fill="#c28b8b" opacity="0.45" />
        <ellipse cx="48" cy="54" rx="34" ry="20" fill="#fcebd6" stroke="#4f515e" strokeWidth="3" />
        <ellipse cx="86" cy="40" rx="30" ry="18" fill="#fcebd6" stroke="#4f515e" strokeWidth="3" />
        <circle cx="35" cy="50" r="3.5" fill="#4f515e" />
        <circle cx="52" cy="46" r="4" fill="#4f515e" />
        <circle cx="62" cy="58" r="3.5" fill="#4f515e" />
        <circle cx="43" cy="61" r="3" fill="#c28b8b" />
        <circle cx="77" cy="36" r="3.5" fill="#4f515e" />
        <circle cx="94" cy="34" r="3.8" fill="#4f515e" />
        <circle cx="88" cy="46" r="3" fill="#c28b8b" />
        <circle cx="102" cy="43" r="2.8" fill="#4f515e" />
      </svg>
    );
  }

  if (variant === "cupcake") {
    return (
      <svg viewBox="0 0 110 115" fill="none" className={className} aria-hidden="true">
        <path d="M24 62H86L76 102H34L24 62Z" fill="#fcebd6" stroke="#4f515e" strokeWidth="3" strokeLinejoin="round" />
        <path d="M40 62L44 102M55 62V102M70 62L66 102" stroke="#4f515e" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M20 62C18 46 32 39 42 40C41 26 55 18 65 26C76 24 89 35 88 49C94 52 93 62 86 62H20Z"
          fill="#c28b8b"
          stroke="#4f515e"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="55" cy="18" r="7" fill="#fcebd6" stroke="#4f515e" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 130 85" fill="none" className={className} aria-hidden="true">
      <ellipse cx="65" cy="67" rx="50" ry="10" fill="#c28b8b" opacity="0.4" />
      <path
        d="M16 56C16 28 38 14 65 14C92 14 114 28 114 56C114 64 106 68 98 68H32C24 68 16 64 16 56Z"
        fill="#fcebd6"
        stroke="#4f515e"
        strokeWidth="3"
      />
      <path d="M42 26L52 40M63 22L73 38M84 26L92 40" stroke="#c28b8b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

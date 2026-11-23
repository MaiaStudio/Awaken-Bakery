"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "@/context/StoreContext";

gsap.registerPlugin(ScrollTrigger);

const LOAD_START_PATH = "M 0 0 h 342 v 277 S 111 535 0 277 V 0 Z";
const LOAD_END_PATH = "M 0 0 h 342 v 0 S 272 -116 0 0 V 0 Z";
const HIDE_START_PATH = "M 0 0 h 342 v 0 S 272 116 0 0 V 0 Z";
const HIDE_END_PATH = "M 0 0 h 342 v -277 S 111 -535 0 -277 V 0 Z";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { registerLenis, isPageHiding } = useStore();
  const pageLoadPathRef = useRef<SVGPathElement | null>(null);
  const pageHidePathRef = useRef<SVGPathElement | null>(null);
  const isFirstMountRef = useRef(true);

  // Initialize Lenis + GSAP ticker sync for smooth scrolling
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    registerLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      registerLenis(null);
    };
  }, [registerLenis]);

  // Play curved SVG curtain reveal on client route transitions without blocking initial SSR LCP
  useEffect(() => {
    const loadPath = pageLoadPathRef.current;
    const hidePath = pageHidePathRef.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hidePath) {
      gsap.set(hidePath, { attr: { d: HIDE_START_PATH } });
    }

    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      if (loadPath) gsap.set(loadPath, { attr: { d: LOAD_END_PATH } });
    } else if (loadPath && !prefersReduced) {
      gsap.fromTo(
        loadPath,
        { attr: { d: LOAD_START_PATH } },
        {
          attr: { d: LOAD_END_PATH },
          duration: 0.95,
          ease: "power2.inOut",
          delay: 0.04,
        }
      );
    }

    let cancelled = false;
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };
    const timer = setTimeout(refresh, 350);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [pathname]);

  // Play curved SVG page-hide curtain before internal navigation
  useEffect(() => {
    const hidePath = pageHidePathRef.current;
    if (!hidePath || !isPageHiding) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      hidePath,
      { attr: { d: HIDE_START_PATH } },
      {
        attr: { d: HIDE_END_PATH },
        duration: 0.45,
        ease: "power2.inOut",
      }
    );
  }, [isPageHiding]);

  return (
    <>
      <svg
        className="pageload"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 342 277"
        aria-hidden="true"
      >
        <path ref={pageLoadPathRef} className="anim-path" d={LOAD_END_PATH} />
      </svg>

      <svg
        className="pagehide"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -391.667 342 391.7"
        aria-hidden="true"
      >
        <path ref={pageHidePathRef} className="anim-path" d={HIDE_START_PATH} />
      </svg>

      {children}
    </>
  );
}

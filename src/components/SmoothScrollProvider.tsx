"use client";

import { useCallback, useEffect, useRef } from "react";
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
  const { registerLenis, registerTransitionRunner } = useStore();
  const pageLoadSvgRef = useRef<SVGSVGElement | null>(null);
  const pageHideSvgRef = useRef<SVGSVGElement | null>(null);
  const pageLoadPathRef = useRef<SVGPathElement | null>(null);
  const pageHidePathRef = useRef<SVGPathElement | null>(null);
  const isFirstMountRef = useRef(true);
  const transitionTokenRef = useRef(0);
  const hideSafetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadSafetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetHideCurtain = useCallback(() => {
    if (hideSafetyTimerRef.current) {
      clearTimeout(hideSafetyTimerRef.current);
      hideSafetyTimerRef.current = null;
    }
    const hidePath = pageHidePathRef.current;
    const hideSvg = pageHideSvgRef.current;
    if (hidePath) {
      gsap.killTweensOf(hidePath);
      gsap.set(hidePath, { attr: { d: HIDE_START_PATH } });
    }
    if (hideSvg) {
      hideSvg.style.visibility = "hidden";
    }
  }, []);

  const resetLoadCurtain = useCallback(() => {
    if (loadSafetyTimerRef.current) {
      clearTimeout(loadSafetyTimerRef.current);
      loadSafetyTimerRef.current = null;
    }
    const loadPath = pageLoadPathRef.current;
    const loadSvg = pageLoadSvgRef.current;
    if (loadPath) {
      gsap.killTweensOf(loadPath);
      gsap.set(loadPath, { attr: { d: LOAD_END_PATH } });
    }
    if (loadSvg) {
      loadSvg.style.visibility = "hidden";
    }
  }, []);

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

  // Register deterministic, race-free page-hide curtain runner:
  // router.push only fires AFTER the hide tween finishes (onComplete), never racing against it.
  useEffect(() => {
    const runHideTransition = (onCovered: () => void) => {
      const hidePath = pageHidePathRef.current;
      const hideSvg = pageHideSvgRef.current;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!hidePath || !hideSvg || prefersReduced) {
        onCovered();
        return;
      }

      const token = ++transitionTokenRef.current;
      resetLoadCurtain();
      if (hideSafetyTimerRef.current) {
        clearTimeout(hideSafetyTimerRef.current);
        hideSafetyTimerRef.current = null;
      }
      gsap.killTweensOf(hidePath);
      hideSvg.style.visibility = "visible";

      let navigated = false;
      const triggerNavigation = () => {
        if (navigated || transitionTokenRef.current !== token) return;
        navigated = true;
        if (hideSafetyTimerRef.current) {
          clearTimeout(hideSafetyTimerRef.current);
          hideSafetyTimerRef.current = null;
        }
        onCovered();

        // Fail-safe recovery if navigation is aborted, slow, or resolves to the same route
        hideSafetyTimerRef.current = setTimeout(() => {
          if (transitionTokenRef.current !== token) return;
          gsap.killTweensOf(hidePath);
          gsap.to(hidePath, {
            attr: { d: HIDE_START_PATH },
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              if (transitionTokenRef.current === token) {
                resetHideCurtain();
              }
            },
          });
        }, 1800);
      };

      gsap.fromTo(
        hidePath,
        { attr: { d: HIDE_START_PATH } },
        {
          attr: { d: HIDE_END_PATH },
          duration: 0.42,
          ease: "power2.inOut",
          onComplete: triggerNavigation,
        }
      );

      // Backup trigger in case rAF is throttled right after click (e.g. background tab)
      hideSafetyTimerRef.current = setTimeout(triggerNavigation, 650);
    };

    registerTransitionRunner(runHideTransition);
    return () => {
      registerTransitionRunner(null);
      resetHideCurtain();
      resetLoadCurtain();
    };
  }, [registerTransitionRunner, resetHideCurtain, resetLoadCurtain]);

  // Play curved SVG curtain reveal on client route transitions without blocking initial SSR LCP
  useEffect(() => {
    const token = ++transitionTokenRef.current;
    const loadPath = pageLoadPathRef.current;
    const loadSvg = pageLoadSvgRef.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Immediately kill & hide any active page-hide curtain so it can never overwrite after navigation
    resetHideCurtain();

    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      resetLoadCurtain();
    } else if (loadPath && loadSvg && !prefersReduced) {
      if (loadSafetyTimerRef.current) {
        clearTimeout(loadSafetyTimerRef.current);
        loadSafetyTimerRef.current = null;
      }
      gsap.killTweensOf(loadPath);
      loadSvg.style.visibility = "visible";

      gsap.fromTo(
        loadPath,
        { attr: { d: LOAD_START_PATH } },
        {
          attr: { d: LOAD_END_PATH },
          duration: 0.85,
          ease: "power2.inOut",
          delay: 0.03,
          onComplete: () => {
            if (transitionTokenRef.current === token) {
              resetLoadCurtain();
            }
          },
        }
      );

      // Hard safety deadline so pageload curtain can never linger if rAF pauses
      loadSafetyTimerRef.current = setTimeout(() => {
        if (transitionTokenRef.current === token) {
          resetLoadCurtain();
        }
      }, 1250);
    } else {
      resetLoadCurtain();
    }

    let cancelled = false;
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };
    const rafId = requestAnimationFrame(refresh);
    const timer = setTimeout(refresh, 350);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname, resetHideCurtain, resetLoadCurtain]);

  return (
    <>
      <svg
        ref={pageLoadSvgRef}
        className="pageload"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 342 277"
        preserveAspectRatio="none"
        style={{ visibility: "hidden" }}
        aria-hidden="true"
      >
        <path ref={pageLoadPathRef} className="anim-path" d={LOAD_END_PATH} />
      </svg>

      <svg
        ref={pageHideSvgRef}
        className="pagehide"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -391.667 342 391.7"
        preserveAspectRatio="none"
        style={{ visibility: "hidden" }}
        aria-hidden="true"
      >
        <path ref={pageHidePathRef} className="anim-path" d={HIDE_START_PATH} />
      </svg>

      {children}
    </>
  );
}

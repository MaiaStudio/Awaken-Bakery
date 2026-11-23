"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "@/context/StoreContext";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const frontRef = useRef<HTMLDivElement | null>(null);

  const { setIsOverDarkHero, scrollToHash, triggerCrumbsFromElement } = useStore();

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const bg = bgRef.current;
    const img = imgRef.current;
    const front = frontRef.current;
    if (!section || !wrapper || !bg || !img) return;

    setIsOverDarkHero(true);

    const ctx = gsap.context(() => {
      // Adaptive Header toggle synced with Dark_Section ScrollTrigger
      ScrollTrigger.create({
        trigger: section,
        start: "top top+=20px",
        end: "bottom top+=80px",
        onEnter: () => setIsOverDarkHero(true),
        onEnterBack: () => setIsOverDarkHero(true),
        onLeave: () => setIsOverDarkHero(false),
        onLeaveBack: () => setIsOverDarkHero(false),
      });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance stagger for Hero Headline & Float CTA
        gsap.from(".Hero_Reveal_Line", {
          y: "105%",
          rotation: 6,
          duration: 1.35,
          stagger: 0.14,
          ease: "expo.out",
          delay: 0.15,
        });

        gsap.from(".Hero_Float", {
          scale: 0.5,
          opacity: 0,
          rotation: 45,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.3,
        });
      });

      // Desktop scroll-scrubbed Hero Parallax + Dynamic Bottom Arch Radius (single consolidated timeline)
      mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        tl.to(bg, { y: "45%", ease: "none" }, 0)
          .to(img, { scale: 1.35, ease: "none" }, 0);
        if (front) {
          tl.to(front, { y: "-28%", ease: "none" }, 0);
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [setIsOverDarkHero]);

  return (
    <section ref={sectionRef} className="Section Hero_Section Dark_Section">
      <div ref={wrapperRef} className="Hero_Wrapper Parallax_Wrapper">
        <div ref={bgRef} className="Hero_Back_Img Parallax_Back_Hero">
          <img
            ref={imgRef}
            src="/awaken/images/hero-bakery.jpg"
            alt="Awaken Bakery 100% gluten-free freshly baked cakes, cookies, and treats in Bowling Green, KY"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        <div className="Hero_Scrim" aria-hidden="true" />

        <div ref={frontRef} className="Hero_Content Parallax_Hero_Front">
          <div className="Hero_Heading_wrapper">
            <div className="Hero_Eyebrow">
              <span>♡ 100% Dedicated Gluten-Free Kitchen</span>
              <span aria-hidden="true">•</span>
              <span>Safe for Celiac · Bowling Green, KY</span>
            </div>

            <h1 className="Hero_Heading">
              <span className="block overflow-hidden">
                <span className="Hero_Reveal_Line inline-block origin-top-left">
                  GLUTEN FREE,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="Hero_Reveal_Line inline-block origin-top-left">
                  THE REAL THING
                </span>
              </span>
            </h1>
          </div>

          <div className="Hero_Float">
            <button
              type="button"
              className="Hero_Float_Inner"
              onMouseEnter={(e) => triggerCrumbsFromElement(e.currentTarget)}
              onClick={(e) => {
                triggerCrumbsFromElement(e.currentTarget);
                scrollToHash("#hero-anchor");
              }}
              aria-label="Allow yourself — scroll to best sellers"
            >
              <span>
                ALLOW
                <br />
                YOURSELF
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

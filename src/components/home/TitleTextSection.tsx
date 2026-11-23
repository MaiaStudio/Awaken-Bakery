"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AWAKEN_BUSINESS } from "@/data/awakenData";
import { BakeryDoodle, RevealFade, RevealWords, TransitionLink } from "../MotionPrimitives";

gsap.registerPlugin(ScrollTrigger);

export function TitleTextSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftDoodleRef = useRef<HTMLDivElement | null>(null);
  const rightDoodleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      if (leftDoodleRef.current) {
        gsap.to(leftDoodleRef.current, {
          y: -28,
          rotation: -10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (rightDoodleRef.current) {
        gsap.to(rightDoodleRef.current, {
          y: -16,
          rotation: 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="Section Title_Text_Section Parallax_Wrapper SectionPadded"
    >
      <div className="Title_Text_Heading">
        <RevealWords
          text="SO GOOD YOU'D NEVER GUESS IT'S GLUTEN FREE"
          as="h2"
          className="SectionTitle"
        />

        <div className="flex items-end gap-8 mt-14 pl-2">
          <div ref={leftDoodleRef} className="w-28 md:w-32 pointer-events-none">
            <BakeryDoodle variant="cake-slice" className="w-full h-auto" />
          </div>
          <div ref={rightDoodleRef} className="w-24 md:w-28 pointer-events-none">
            <BakeryDoodle variant="cupcake" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <RevealFade className="Title_Text_Content" delay={0.2}>
        <p>
          Located in downtown Bowling Green at 300 E Main Ave, Awaken Bakery is a 100% dedicated gluten-free kitchen — completely safe for celiac disease, with dairy-free, vegan, and nut-free options baked fresh daily.
        </p>
        <p>
          Stop in for espresso, warm bagel sandwiches, breakfast, lunch, or bakery treats — or order custom cakes, cookies, artisan loaves, and take-and-bake cinnamon rolls ahead online.
        </p>

        <div className="flex flex-wrap gap-2.5 mt-7">
          <span
            className="px-4 py-2 rounded-full bg-[#4f515e]/10 text-[#4f515e] text-xs font-extrabold uppercase tracking-wide"
            style={{ fontFamily: "var(--title-font)" }}
          >
            ★ {AWAKEN_BUSINESS.ratings.google.score} Google ({AWAKEN_BUSINESS.ratings.google.count})
          </span>
          <span
            className="px-4 py-2 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wide"
            style={{ fontFamily: "var(--title-font)" }}
          >
            {AWAKEN_BUSINESS.ratings.award}
          </span>
          <TransitionLink
            href="/our-story"
            className="px-4 py-2 rounded-full border-2 border-[#4f515e] text-[#4f515e] hover:bg-[#4f515e] hover:text-[#fcebd6] transition-colors text-xs font-extrabold uppercase tracking-wide"
          >
            Read Our Story →
          </TransitionLink>
        </div>
      </RevealFade>
    </section>
  );
}

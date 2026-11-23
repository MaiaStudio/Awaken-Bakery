"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AWAKEN_BUSINESS } from "@/data/awakenData";
import { MagneticRippleWrapper, TransitionLink } from "../MotionPrimitives";

gsap.registerPlugin(ScrollTrigger);

export function CollectionsCtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    const textPath = textPathRef.current;
    const btn = buttonRef.current;
    if (!section || !svg || !textPath) return;

    const ctx = gsap.context(() => {
      // Collections_CTA_Title_SVG scroll-scrubbed textPath:
      // Starts at startOffset="220" and glides smoothly around the arch contour to "20"
      gsap.fromTo(
        textPath,
        { attr: { startOffset: 225 } },
        {
          attr: { startOffset: 10 },
          ease: "none",
          scrollTrigger: {
            trigger: svg,
            start: "top bottom+=40",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Circular ORDER button pop on scroll (centering handled by CSS translate: -50% 50%)
      if (btn) {
        gsap.to(btn, {
          scale: 1.12,
          ease: "expo.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: btn,
            start: "top 92%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleOrderRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      className="Section Collections_CTA_Section Parallax_Wrapper SectionPadded"
    >
      <div className="Collections_CTA_Image Dynamic_Window">
        {/* Static arch Window_Image (No_Anim) so image stays full-size and never scales up */}
        <div className="Window_Image No_Anim">
          <div className="Window_Image_Limit">
            <div className="Window_Image_Container Fluid">
              <img
                src="/awaken/images/funfetti-cake.webp"
                alt="Awaken Bakery 100% gluten-free custom celebration cake"
              />
            </div>
          </div>
        </div>

        <div
          ref={buttonRef}
          className="Collections_CTA_Button Relative_To_Mouse"
          onMouseEnter={handleOrderRipple}
          onMouseLeave={handleOrderRipple}
        >
          <TransitionLink href="/cakes">ORDER</TransitionLink>
        </div>

        {/* Concentric arch SVG <textPath> gliding tightly around the image frame */}
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 221.66 283.6"
          className="Collections_CTA_Title_SVG"
          aria-hidden="true"
        >
          <path
            fill="none"
            id="Awaken_Text_Path"
            d="M 0.5 283.6 V 106 C 0.5 48.7 48.7 5 106 5 H 111.6 C 171.1 5 219.4 48.8 219.4 108.4 V 283.6 H 0.5 Z"
          />
          <text>
            <textPath ref={textPathRef} href="#Awaken_Text_Path" startOffset="225">
              Celebrate with cake
            </textPath>
          </text>
        </svg>
      </div>

      <div className="Collections_CTA_Text space-y-4">
        <p>
          Whether you&apos;re stopping in today for coffee, warm breakfast, and fresh bakery treats — or planning ahead for a birthday, shower, or wedding dessert table — everything we bake is 100% gluten free and made from scratch in Bowling Green.
        </p>
        <p>
          Custom cakes and cupcakes require at least 4 days advance notice (and dairy-free, vegan, and egg-free customizations are always welcome). Want to skip the line and earn <strong>10% off your first order</strong> plus Double Points Wednesdays?
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <MagneticRippleWrapper className="bg-[#c28b8b] border-2 border-[#c28b8b] before:bg-[#4f515e]">
            <a
              href={AWAKEN_BUSINESS.links.todayMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Order Today&apos;s Menu
            </a>
          </MagneticRippleWrapper>

          <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#c28b8b]">
            <TransitionLink
              href="/holiday#awaken-app"
              className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6]"
            >
              Get The Awaken App (10% Off)
            </TransitionLink>
          </MagneticRippleWrapper>
        </div>
      </div>
    </section>
  );
}

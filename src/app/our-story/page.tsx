"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Home, Sparkles } from "lucide-react";
import { STORY_MILESTONES } from "@/data/awakenData";
import {
  MagneticRippleWrapper,
  RevealFade,
  RevealWords,
  TransitionLink,
} from "@/components/MotionPrimitives";

gsap.registerPlugin(ScrollTrigger);

export default function OurStoryPage() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const innerLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = timelineRef.current;
    const innerLine = innerLineRef.current;
    if (!container || !innerLine) return;

    const ctx = gsap.context(() => {
      // Scroll-scrubbed vertical Timeline_Line fill (GPU scaleY, zero layout thrash)
      gsap.fromTo(
        innerLine,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top center+=80px",
            end: "bottom center+=80px",
            scrub: true,
          },
        }
      );

      // Timeline_Anchor `.Passed` toggles
      const anchors = container.querySelectorAll(".Timeline_Anchor");
      anchors.forEach((anchor) => {
        ScrollTrigger.create({
          trigger: anchor,
          start: "top center+=100px",
          end: "bottom center+=100px",
          onEnter: () => anchor.classList.add("Passed"),
          onLeaveBack: () => anchor.classList.remove("Passed"),
        });
      });

      // `.Parallax_Image` subtle vertical scrub inside timeline frames
      const imgs = container.querySelectorAll(".Parallax_Image");
      imgs.forEach((img) => {
        gsap.fromTo(
          img,
          { y: "-10%" },
          {
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
      container.querySelectorAll(".Timeline_Anchor.Passed").forEach((el) => {
        el.classList.remove("Passed");
      });
    };
  }, []);

  return (
    <>
      {/* Awaken Bakery About Us Editorial Intro */}
      <section className="Section Page_Section SectionPadded">
        <div className="max-w-7xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-5"
            style={{ fontFamily: "var(--title-font)" }}
          >
            Started at a Farmers Market · Built on Faith
          </span>

          <RevealWords
            text="FROM A FOLDING TABLE TO SOMETHING FAR GREATER"
            as="h1"
            className="SectionTitle mb-8 max-w-5xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <RevealFade className="lg:col-span-6 space-y-5 text-lg text-[#4f515e]/90 leading-relaxed">
              <p>
                A mother. Two kids. A folding table. A calling. Before Awaken existed, founder Tiana Post worked in website design, marketing, and operations — busy and capable, yet sensing a nudge from God to come home and homeschool Wyatt and Layla with her husband Rich right beside her.
              </p>
              <p>
                Having been diagnosed with celiac disease in 2011 (and Lyme disease in 2021), Tiana knew firsthand the ache of losing favorite foods and being left out at birthday tables. That obedience became the soil where Awaken Bakery took root in Bowling Green, Kentucky.
              </p>
            </RevealFade>

            <RevealFade
              delay={0.2}
              className="lg:col-span-6 p-8 rounded-[2.2rem] bg-[#c28b8b] text-[#fcebd6] space-y-4"
            >
              <div
                className="text-5xl font-extrabold text-[#fcebd6] leading-none"
                style={{ fontFamily: "var(--title-font)" }}
              >
                &ldquo;
              </div>
              <p className="text-xl leading-relaxed font-medium">
                He comforts us in all our troubles, so that we can comfort others with the same comfort we ourselves receive.
              </p>
              <div
                className="text-xs uppercase font-extrabold tracking-widest text-[#fcebd6]/85"
                style={{ fontFamily: "var(--title-font)" }}
              >
                2 Corinthians 1:3–4
              </div>
            </RevealFade>
          </div>
        </div>
      </section>

      {/* Scroll-Scrubbed Story Timeline Section */}
      <section className="Section Timeline_Section Parallax_Wrapper SectionPadded">
        <div ref={timelineRef} className="Timeline_Container max-w-7xl mx-auto">
          <div className="Timeline_Line" aria-hidden="true">
            <div ref={innerLineRef} className="Timeline_Inner" />
            {STORY_MILESTONES.map((m, idx) => (
              <div key={`anchor-${m.id}`} className="Timeline_Anchor">
                <span
                  className="text-xs font-extrabold"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>

          {STORY_MILESTONES.map((milestone) => (
            <div key={milestone.id} className="Timeline_Element">
              <div className="Timeline_Image Fluid">
                <img
                  src={milestone.image}
                  alt={milestone.imageAlt}
                  className="Parallax_Image"
                  loading="lazy"
                />
              </div>
              <div className="Timeline_Content">
                <span className="Timeline_Date">{milestone.date}</span>
                <h2>{milestone.title}</h2>
                {milestone.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faith, Family & Purpose Pillars + Mission */}
      <section className="Section SectionPadded">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="text-xs uppercase font-extrabold tracking-widest text-[#c28b8b]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              What We Stand For
            </span>
            <RevealWords text="MORE THAN A BAKERY" as="h2" className="SectionTitle mt-2 mb-4" />
            <p className="text-base text-[#4f515e]/85">
              Awaken was built on three pillars — and they shape every loaf, every cupcake, and every conversation across our counter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Faith",
                copy: "Every step of this journey has been led by God. We bake as worship, serve as ministry, and trust the One who multiplied loaves long before us.",
                bg: "bg-[#c28b8b] text-[#fcebd6]",
              },
              {
                icon: Home,
                title: "Family",
                copy: "This is a family-run bakery in every sense. Our kids grew up at our farmers market booth, and our customers became our friends. You're walking into our home.",
                bg: "bg-[#4f515e] text-[#fcebd6]",
              },
              {
                icon: Heart,
                title: "Purpose",
                copy: "Everyone deserves real food without fear. Plus, a portion of every order supports community work fighting for high-risk and exploited youth across Kentucky.",
                bg: "bg-[#fff7ec] text-[#4f515e] border-4 border-[#c28b8b]",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-8 rounded-[2.4rem] ${pillar.bg} flex flex-col justify-between gap-6`}
                >
                  <div className="w-12 h-12 rounded-full bg-current/15 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      className="text-3xl uppercase font-extrabold mb-3"
                      style={{ fontFamily: "var(--title-font)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-relaxed opacity-90">{pillar.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Signature by Tiana */}
          <div className="p-10 rounded-[2.6rem] border-4 border-[#c28b8b] bg-[#fcebd6] text-center max-w-4xl mx-auto space-y-5">
            <p className="text-xl leading-relaxed text-[#4f515e]">
              &ldquo;As long as people keep walking through our doors looking for relief, belonging, or just a really good cupcake — we&apos;ll keep showing up to bake. Thank you for being part of this story.&rdquo;
            </p>
            <div
              className="text-2xl uppercase font-extrabold text-[#c28b8b]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              — Tiana Post &amp; Family
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <MagneticRippleWrapper className="bg-[#c28b8b] border-2 border-[#c28b8b] before:bg-[#4f515e]">
                <TransitionLink
                  href="/menu"
                  className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6]"
                >
                  Explore Today&apos;s Menu
                </TransitionLink>
              </MagneticRippleWrapper>
              <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#c28b8b]">
                <TransitionLink
                  href="/contact"
                  className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6]"
                >
                  Visit Us in Bowling Green
                </TransitionLink>
              </MagneticRippleWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

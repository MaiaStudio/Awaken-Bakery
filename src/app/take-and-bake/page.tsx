"use client";

import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame, Snowflake } from "lucide-react";
import {
  AWAKEN_BUSINESS,
  BREAD_CARE_GUIDES,
  TAKE_AND_BAKE_GUIDES,
} from "@/data/awakenData";
import {
  MagneticRippleWrapper,
  RevealFade,
  RevealWords,
} from "@/components/MotionPrimitives";

export default function TakeAndBakePage() {
  const [mode, setMode] = useState<"take-and-bake" | "bread-care">("take-and-bake");

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash === "#bread-care") {
        setMode("bread-care");
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(t);
  }, [mode]);

  const guides = mode === "take-and-bake" ? TAKE_AND_BAKE_GUIDES : BREAD_CARE_GUIDES;

  return (
    <div className="Page_Section SectionPadded">
      <div className="max-w-7xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-5"
          style={{ fontFamily: "var(--title-font)" }}
        >
          Bakery Fresh, Finished in Your Oven
        </span>

        <RevealWords
          text={
            mode === "take-and-bake"
              ? "TAKE & BAKE INSTRUCTIONS"
              : "GLUTEN-FREE BREAD CARE"
          }
          as="h1"
          className="SectionTitle mb-6"
        />

        {/* Mode Switcher Tabs */}
        <div id="bread-care" className="Collection_Browser_Tabs mb-8" role="group" aria-label="Instruction Guides">
          <button
            type="button"
            aria-pressed={mode === "take-and-bake"}
            onClick={() => setMode("take-and-bake")}
            className={`Collection_Browser_Tab_Button ${
              mode === "take-and-bake" ? "Selected" : ""
            }`}
          >
            <div className="Back" aria-hidden="true" />
            <span>Take &amp; Bake Guides</span>
          </button>
          <button
            type="button"
            aria-pressed={mode === "bread-care"}
            onClick={() => setMode("bread-care")}
            className={`Collection_Browser_Tab_Button PinkTab ${
              mode === "bread-care" ? "Selected" : ""
            }`}
          >
            <div className="Back" aria-hidden="true" />
            <span>Bread Storage &amp; Reheating</span>
          </button>
        </div>

        {/* Golden Oven Preheat Callout */}
        <RevealFade className="p-7 rounded-[2rem] bg-[#4f515e] text-[#fcebd6] flex flex-col md:flex-row items-start md:items-center gap-5 mb-12">
          <div className="w-14 h-14 rounded-full bg-[#c28b8b] text-[#fcebd6] flex items-center justify-center flex-shrink-0">
            {mode === "take-and-bake" ? <Flame size={28} /> : <Snowflake size={28} />}
          </div>
          <div>
            <h2
              className="text-2xl uppercase font-extrabold text-[#fcebd6] mb-1.5"
              style={{ fontFamily: "var(--title-font)" }}
            >
              {mode === "take-and-bake"
                ? "Before You Bake — Read This First!"
                : "Golden Rule for Gluten-Free Bread"}
            </h2>
            <p className="text-sm md:text-base text-[#fcebd6]/90 leading-relaxed m-0">
              {mode === "take-and-bake"
                ? "Your oven is never fully pre-heated when it beeps. Let it continue pre-heating for an additional 20 minutes after it signals it's ready. We know it's hard to wait — but this single step makes all the difference in rise and golden texture!"
                : "Our gluten-free breads contain zero artificial preservatives — enjoy fresh on your counter for 2–3 days, then pre-slice and freeze so every future slice tastes straight from our oven."}
            </p>
          </div>
        </RevealFade>

        {/* Step-by-step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="rounded-[2.4rem] border-4 border-[#c28b8b] bg-[#fcebd6] overflow-hidden flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-[#f2dec4]">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span
                  className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  {guide.badge}
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <h3
                    className="text-3xl uppercase font-extrabold text-[#4f515e] mb-2"
                    style={{ fontFamily: "var(--title-font)" }}
                  >
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[#4f515e]/85 font-medium mb-4">
                    {guide.summary}
                  </p>

                  <div className="space-y-4">
                    {guide.steps.map((step) => (
                      <div key={step.heading}>
                        <h4
                          className="text-sm uppercase font-extrabold text-[#c28b8b] tracking-wide mb-2"
                          style={{ fontFamily: "var(--title-font)" }}
                        >
                          {step.heading}
                        </h4>
                        <ul className="space-y-1.5 text-sm text-[#4f515e]/90 list-disc pl-5">
                          {step.bullets.map((b, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <MagneticRippleWrapper className="bg-[#c28b8b] border-2 border-[#c28b8b] before:bg-[#4f515e]">
                    <a
                      href={AWAKEN_BUSINESS.links.shop}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#fcebd6]"
                      style={{ fontFamily: "var(--title-font)" }}
                    >
                      Order More {guide.title} →
                    </a>
                  </MagneticRippleWrapper>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

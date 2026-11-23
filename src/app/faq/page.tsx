"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { AWAKEN_BUSINESS, FAQS, type FaqItem } from "@/data/awakenData";
import {
  MagneticRippleWrapper,
  RevealWords,
  TransitionLink,
} from "@/components/MotionPrimitives";

const CATEGORIES: ("All" | FaqItem["category"])[] = [
  "All",
  "Allergens & Ingredients",
  "Ordering",
  "Custom Orders & Events",
  "Visiting Us",
  "The Awaken App",
];

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | FaqItem["category"]>("All");
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQS[0]?.question ?? null);

  const visibleFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, query]);

  return (
    <div className="Page_Section SectionPadded">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-5"
            style={{ fontFamily: "var(--title-font)" }}
          >
            Everything You Need to Know
          </span>
          <RevealWords text="FREQUENTLY ASKED QUESTIONS" as="h1" className="SectionTitle mb-5" />
          <p className="text-lg text-[#4f515e] max-w-2xl leading-relaxed">
            Our dedicated gluten-free kitchen, celiac safety protocols, ordering ahead, custom cakes, and visiting us in downtown Bowling Green.
          </p>
        </div>

        {/* Search + Category Pills */}
        <div className="space-y-4">
          <div className="relative max-w-lg">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#c28b8b]"
            />
            <input
              type="search"
              aria-label="Search frequently asked questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search celiac, vegan, parking, shipping..."
              className="w-full rounded-full border-2 border-[#c28b8b] bg-[#fff7ec] pl-12 pr-5 py-3.5 text-sm text-[#4f515e]"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="FAQ Categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={selectedCategory === cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  const first = FAQS.find((f) => cat === "All" || f.category === cat);
                  setOpenQuestion(first?.question ?? null);
                }}
                className={`px-4 py-2 rounded-full text-xs uppercase font-extrabold tracking-wide border-2 transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#4f515e] text-[#fcebd6] border-[#4f515e]"
                    : "border-[#c28b8b]/50 text-[#4f515e] hover:border-[#c28b8b]"
                }`}
                style={{ fontFamily: "var(--title-font)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Smooth Grid-Row Accordion */}
        {visibleFaqs.length === 0 ? (
          <div className="py-12 px-6 text-center rounded-3xl border-2 border-[#c28b8b]/40 bg-[#fff7ec] space-y-3">
            <p
              className="text-xl uppercase font-extrabold text-[#4f515e]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              No matching questions found
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wide cursor-pointer"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleFaqs.map((faq, idx) => {
              const isOpen = openQuestion === faq.question;
              const panelId = `faq-panel-${idx}`;
              return (
                <div
                  key={faq.question}
                  className="rounded-3xl border-2 border-[#c28b8b]/40 bg-[#fff7ec] overflow-hidden transition-colors hover:border-[#c28b8b]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <div>
                      <span
                        className="text-[11px] uppercase font-extrabold tracking-widest text-[#c28b8b] block mb-1"
                        style={{ fontFamily: "var(--title-font)" }}
                      >
                        {faq.category}
                      </span>
                      <span
                        className="text-xl uppercase font-extrabold text-[#4f515e]"
                        style={{ fontFamily: "var(--title-font)" }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 ${
                        isOpen
                          ? "bg-[#c28b8b] text-[#fcebd6] rotate-180"
                          : "bg-[#fcebd6] text-[#4f515e]"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    inert={!isOpen}
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.45s var(--awaken-ease)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-base text-[#4f515e]/85 leading-relaxed m-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Refund & Cancellation Policy Card */}
        <section
          id="refund-policy"
          className="p-8 md:p-10 rounded-[2.5rem] bg-[#c28b8b] text-[#fcebd6] space-y-5"
        >
          <span
            className="inline-block px-4 py-1 rounded-full bg-[#fcebd6] text-[#4f515e] text-xs font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "var(--title-font)" }}
          >
            Refund &amp; Cancellation Policy
          </span>
          <h2
            className="text-3xl md:text-4xl uppercase font-extrabold m-0"
            style={{ fontFamily: "var(--title-font)" }}
          >
            We Want Every Order To Be Right
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#4f515e]/35">
              <div
                className="text-2xl font-extrabold text-[#fcebd6]"
                style={{ fontFamily: "var(--title-font)" }}
              >
                7+ DAYS NOTICE
              </div>
              <p className="text-sm mt-1 opacity-95">Full refund on custom cake &amp; pre-order cancellations.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#4f515e]/35">
              <div
                className="text-2xl font-extrabold text-[#fcebd6]"
                style={{ fontFamily: "var(--title-font)" }}
              >
                3–6 DAYS NOTICE
              </div>
              <p className="text-sm mt-1 opacity-95">50% refund prior to your scheduled pickup date.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#4f515e]/35">
              <div
                className="text-2xl font-extrabold text-[#fcebd6]"
                style={{ fontFamily: "var(--title-font)" }}
              >
                UNDER 72 HOURS
              </div>
              <p className="text-sm mt-1 opacity-95">Non-refundable once your baking slot is reserved.</p>
            </div>
          </div>
          <p className="text-sm text-[#fcebd6]/95 leading-relaxed">
            For daily menu orders (walk-in, app, or same-day online), contact us the same day at{" "}
            <a href={AWAKEN_BUSINESS.emailHref} className="underline font-bold text-[#fcebd6]">
              {AWAKEN_BUSINESS.email}
            </a>{" "}
            or {AWAKEN_BUSINESS.phone} and we&apos;ll gladly make it right.
          </p>
          <div className="pt-2">
            <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#fcebd6]">
              <TransitionLink
                href="/contact"
                className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6] hover:text-[#4f515e]"
              >
                Still Have a Question? Contact Us
              </TransitionLink>
            </MagneticRippleWrapper>
          </div>
        </section>
      </div>
    </div>
  );
}

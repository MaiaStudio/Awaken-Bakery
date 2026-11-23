import React from "react";
import { AWAKEN_BUSINESS, REVIEWS } from "@/data/awakenData";
import { RevealWords } from "../MotionPrimitives";

export function TestimonialsSection() {
  const repeated = [...REVIEWS, ...REVIEWS];
  const half = REVIEWS.length;

  return (
    <section className="Section Testimonials_Section Parallax_Wrapper pt-10 pb-2">
      <div className="px-[4vw] flex flex-wrap items-end justify-between gap-6">
        <div>
          <span
            className="text-xs uppercase font-extrabold tracking-widest text-[#c28b8b] block mb-2"
            style={{ fontFamily: "var(--title-font)" }}
          >
            259+ Five-Star Reviews Across Bowling Green &amp; Beyond
          </span>
          <RevealWords
            text="LOVED BY FAMILIES"
            as="h2"
            className="SectionTitle m-0"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={AWAKEN_BUSINESS.links.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#4f515e] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wide hover:bg-[#c28b8b] hover:text-[#fcebd6] transition-colors"
            style={{ fontFamily: "var(--title-font)" }}
          >
            ★★★★★ 4.9 Google
          </a>
          <a
            href={AWAKEN_BUSINESS.links.findMeGf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wide hover:bg-[#4f515e] hover:text-[#fcebd6] transition-colors"
            style={{ fontFamily: "var(--title-font)" }}
          >
            ★★★★★ 5.0 Find Me GF
          </a>
          <a
            href={AWAKEN_BUSINESS.links.yelp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full border-2 border-[#4f515e] text-[#4f515e] text-xs font-extrabold uppercase tracking-wide hover:bg-[#4f515e] hover:text-[#fcebd6] transition-colors"
            style={{ fontFamily: "var(--title-font)" }}
          >
            ★★★★★ 5.0 Yelp
          </a>
        </div>
      </div>

      <div className="Testimonials_Scroller">
        <div className="Testimonials_Container">
          {repeated.map((rev, idx) => (
            <article
              key={`${rev.id}-${idx}`}
              className="Testimonial"
              aria-hidden={idx >= half || undefined}
            >
              <div>
                <div className="Citations" aria-hidden="true">&ldquo;</div>
                <p>{rev.quote}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#fcebd6]/25">
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-full bg-[#fcebd6] text-[#4f515e] flex items-center justify-center font-extrabold text-sm"
                    style={{ fontFamily: "var(--title-font)" }}
                    aria-hidden="true"
                  >
                    {rev.initials}
                  </span>
                  <div>
                    <div
                      className="uppercase font-extrabold text-base tracking-wide"
                      style={{ fontFamily: "var(--title-font)" }}
                    >
                      {rev.author}
                    </div>
                    <div className="text-xs text-[#fcebd6]/80">
                      {rev.source} · {rev.date}
                    </div>
                  </div>
                </div>
                <span className="text-[#fcebd6] text-sm tracking-widest" aria-label="5 out of 5 stars">
                  <span aria-hidden="true">★★★★★</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

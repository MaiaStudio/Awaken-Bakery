"use client";

import React from "react";
import { AWAKEN_BUSINESS } from "@/data/awakenData";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="Section Page_Section SectionPadded min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center space-y-5">
        <span
          className="inline-block px-4 py-1.5 rounded-full bg-[#4f515e] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider"
          style={{ fontFamily: "var(--title-font)" }}
        >
          Oops · Something Went Wrong
        </span>
        <h1 className="SectionTitle">LET&apos;S TRY THAT AGAIN</h1>
        <p className="text-base text-[#4f515e]/85 leading-relaxed">
          We hit a small kitchen snag loading this page. Try refreshing below, or reach us at{" "}
          <a href={AWAKEN_BUSINESS.phoneHref} className="underline font-bold text-[#c28b8b]">
            {AWAKEN_BUSINESS.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="px-8 py-3.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-sm font-extrabold uppercase tracking-wide cursor-pointer hover:bg-[#4f515e] transition-colors"
          style={{ fontFamily: "var(--title-font)" }}
        >
          Reload Page
        </button>
      </div>
    </section>
  );
}

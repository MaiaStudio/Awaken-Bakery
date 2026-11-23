import React from "react";
import { MagneticRippleWrapper, TransitionLink } from "@/components/MotionPrimitives";

export default function NotFound() {
  return (
    <section className="Section Page_Section SectionPadded min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <span
          className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider"
          style={{ fontFamily: "var(--title-font)" }}
        >
          404 · Page Not Found
        </span>
        <h1 className="SectionTitle">THAT TREAT SOLD OUT!</h1>
        <p className="text-base text-[#4f515e]/85 leading-relaxed">
          We couldn&apos;t find the page you were looking for — head back to our 100% gluten-free menu or return home.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <MagneticRippleWrapper className="bg-[#c28b8b] border-2 border-[#c28b8b] before:bg-[#4f515e]">
            <TransitionLink
              href="/menu"
              className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6]"
            >
              Browse Full Menu
            </TransitionLink>
          </MagneticRippleWrapper>
          <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#c28b8b]">
            <TransitionLink
              href="/"
              className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6]"
            >
              Back Home
            </TransitionLink>
          </MagneticRippleWrapper>
        </div>
      </div>
    </section>
  );
}

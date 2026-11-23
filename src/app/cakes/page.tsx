"use client";

import React from "react";
import { AWAKEN_BUSINESS, PRODUCTS } from "@/data/awakenData";
import { ProductCard } from "@/components/ProductCard";
import {
  BakeryDoodle,
  MagneticRippleWrapper,
  RevealFade,
  RevealWords,
  TransitionLink,
} from "@/components/MotionPrimitives";

const CAKES = PRODUCTS.filter((p) => p.category === "cakes");
const CUPCAKES = PRODUCTS.filter((p) => p.category === "cupcakes");

export default function CakesPage() {
  return (
    <div className="Page_Section SectionPadded">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-14">
          <div className="lg:w-7/12">
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--title-font)" }}
            >
              4+ Days Advance Notice · DF, Vegan &amp; Egg-Free Available
            </span>
            <RevealWords
              text="CELEBRATION CAKES & CUSTOM ORDERS"
              as="h1"
              className="SectionTitle mb-5"
            />
            <p className="text-lg text-[#4f515e] leading-relaxed max-w-2xl">
              From first birthdays and smash cakes to elegant 6&quot; and 8&quot; wedding cutting cakes and full gluten-free dessert tables — every cake is handcrafted from scratch in our 100% dedicated gluten-free kitchen.
            </p>
          </div>

          <RevealFade className="lg:w-5/12 w-full p-7 rounded-[2.2rem] border-4 border-[#c28b8b] bg-[#fcebd6] space-y-4">
            <div className="flex items-center justify-between">
              <h2
                className="text-2xl uppercase font-extrabold text-[#4f515e] m-0"
                style={{ fontFamily: "var(--title-font)" }}
              >
                How Custom Ordering Works
              </h2>
              <BakeryDoodle variant="cake-slice" className="w-12 h-12" />
            </div>
            <ul className="space-y-2.5 text-sm text-[#4f515e]/90 leading-relaxed">
              <li>
                <strong>1. Book Early:</strong> Minimum 4 days advance notice required; weekends fill quickly!
              </li>
              <li>
                <strong>2. Allergy Customizations:</strong> Dairy-free, vegan, egg-free, or nut-free requests welcomed.
              </li>
              <li>
                <strong>3. Weddings &amp; Corporate:</strong> We craft stunning 6&quot;/8&quot; bridal cutting cakes, dessert tables, and office bulk boxes. Call{" "}
                <a href={AWAKEN_BUSINESS.phoneHref} className="underline font-bold text-[#c28b8b]">
                  {AWAKEN_BUSINESS.phone}
                </a>
                .
              </li>
              <li>
                <strong>4. Grab-and-Go Freezer:</strong> Need a cake today? Stop in to check our small retail freezer selection!
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <MagneticRippleWrapper className="bg-[#c28b8b] border-2 border-[#c28b8b] before:bg-[#4f515e]">
                <a
                  href={AWAKEN_BUSINESS.links.shop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#fcebd6]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Order in Awaken Shop
                </a>
              </MagneticRippleWrapper>
              <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#c28b8b]">
                <TransitionLink
                  href="/contact"
                  className="px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#fcebd6]"
                >
                  Ask About Events
                </TransitionLink>
              </MagneticRippleWrapper>
            </div>
          </RevealFade>
        </div>

        {/* Whole Cakes Grid */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-6">
            <h2
              className="text-4xl uppercase font-extrabold text-[#c28b8b]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Signature Whole Cakes
            </h2>
            <span className="text-xs uppercase font-bold text-[#4f515e]/70">
              {CAKES.length} Flavors &amp; Styles
            </span>
          </div>
          <div className="Collection_Browser_Grid !mt-4">
            {CAKES.map((cake) => (
              <ProductCard key={cake.id} product={cake} arched />
            ))}
          </div>
        </div>

        {/* Cupcakes Grid */}
        <div>
          <div className="flex items-end justify-between mb-6">
            <h2
              className="text-4xl uppercase font-extrabold text-[#c28b8b]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Cupcake Packs &amp; Dozens
            </h2>
            <span className="text-xs uppercase font-bold text-[#4f515e]/70">
              Regular, Mini &amp; Vegan/DF
            </span>
          </div>
          <div className="Collection_Browser_Grid !mt-4">
            {CUPCAKES.map((cupcake) => (
              <ProductCard key={cupcake.id} product={cupcake} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

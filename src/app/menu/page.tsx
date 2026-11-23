"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AWAKEN_BUSINESS, PRODUCTS, type ProductItem } from "@/data/awakenData";
import { ProductCard } from "@/components/ProductCard";
import { MagneticRippleWrapper, RevealFade, RevealWords, TransitionLink } from "@/components/MotionPrimitives";

const FILTER_TABS: { id: "all" | ProductItem["category"]; label: string; pink?: boolean }[] = [
  { id: "all", label: "All Treats" },
  { id: "cookies", label: "Cookies", pink: true },
  { id: "cakes", label: "Cakes" },
  { id: "cupcakes", label: "Cupcakes", pink: true },
  { id: "bread", label: "Bread" },
  { id: "scones", label: "Scones", pink: true },
  { id: "take-n-bake", label: "Take & Bake" },
  { id: "shipping", label: "Ships Nationwide", pink: true },
];

const VALID_CATEGORIES = new Set<string>(FILTER_TABS.map((t) => t.id));

function matchesDietFilter(
  product: ProductItem,
  filter: "all" | "Dairy Free" | "Vegan" | "Ships US"
): boolean {
  if (filter === "all") return true;
  const hay = [
    product.format,
    ...product.dietaryTags,
    ...(product.options || []).flatMap((o) => [o.name, ...o.choices.map((c) => c.label)]),
  ]
    .join(" ")
    .toLowerCase();

  if (filter === "Dairy Free") {
    return (
      hay.includes("dairy free") ||
      hay.includes("dairy-free") ||
      hay.includes("dairy & egg free") ||
      hay.includes("df") ||
      hay.includes("vegan")
    );
  }
  if (filter === "Vegan") {
    return hay.includes("vegan") || hay.includes("egg free") || hay.includes("egg-free");
  }
  return product.category === "shipping" || hay.includes("ships us") || hay.includes("ships nationwide");
}

export default function MenuPage() {
  const [category, setCategory] = useState<"all" | ProductItem["category"]>("all");
  const [dietFilter, setDietFilter] = useState<"all" | "Dairy Free" | "Vegan" | "Ships US">("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && VALID_CATEGORIES.has(cat)) {
      setCategory(cat as "all" | ProductItem["category"]);
    }
  }, []);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      return matchesDietFilter(p, dietFilter);
    });
  }, [category, dietFilter]);

  return (
    <div className="Page_Section SectionPadded">
      <div className="max-w-7xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-5"
          style={{ fontFamily: "var(--title-font)" }}
        >
          100% Dedicated Gluten-Free Kitchen · Safe for Celiac
        </span>

        <RevealWords text="OUR GLUTEN-FREE MENU" as="h1" className="SectionTitle mb-6" />

        <RevealFade className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          <div className="p-8 rounded-[2.2rem] bg-[#c28b8b] text-[#fcebd6] flex flex-col justify-between gap-5">
            <div>
              <span
                className="text-xs uppercase font-extrabold tracking-widest text-[#fcebd6]/85"
                style={{ fontFamily: "var(--title-font)" }}
              >
                In Stock Today · Downtown Bowling Green
              </span>
              <h2
                className="text-3xl uppercase font-extrabold mt-2 mb-3"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Order for Today
              </h2>
              <p className="text-[#fcebd6]/95 text-sm leading-relaxed">
                Breakfast (open–10:30am), lunch (10:30am–30 min before close), espresso, bagels, sandwiches, cupcakes, and cookies fresh in our case. Saturday batches often sell out by 11am — order ahead!
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#fcebd6]">
                <a
                  href={AWAKEN_BUSINESS.links.todayMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#fcebd6] hover:text-[#4f515e]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Browse Today&apos;s Case →
                </a>
              </MagneticRippleWrapper>
            </div>
          </div>

          <div className="p-8 rounded-[2.2rem] bg-[#4f515e] text-[#fcebd6] flex flex-col justify-between gap-5">
            <div>
              <span
                className="text-xs uppercase font-extrabold tracking-widest text-[#c28b8b]"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Plan Ahead · 4+ Days Notice or Ship US
              </span>
              <h2
                className="text-3xl uppercase font-extrabold mt-2 mb-3"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Pre-Order &amp; Nationwide Shipping
              </h2>
              <p className="text-[#fcebd6]/90 text-sm leading-relaxed">
                Reserve custom cakes, dozen cupcakes, cookie packs, take-and-bake pans, or have our gluten-free breads, bagels, and dry baking mixes shipped nationwide straight to your door.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticRippleWrapper className="bg-[#fcebd6] border-2 border-[#fcebd6] before:bg-[#c28b8b]">
                <TransitionLink
                  href="/cakes"
                  className="px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#4f515e] hover:text-[#fcebd6]"
                >
                  Cakes &amp; Custom Orders →
                </TransitionLink>
              </MagneticRippleWrapper>
            </div>
          </div>
        </RevealFade>

        {/* Category Pill Filter Bar */}
        <div className="space-y-4 mb-10">
          <div className="Collection_Browser_Tabs" role="group" aria-label="Menu Categories">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={category === tab.id}
                onClick={() => setCategory(tab.id)}
                className={`Collection_Browser_Tab_Button ${tab.pink ? "PinkTab" : ""} ${
                  category === tab.id ? "Selected" : ""
                }`}
              >
                <div className="Back" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2" role="group" aria-label="Dietary and Delivery Filters">
            <span
              className="text-xs uppercase font-extrabold tracking-wider text-[#4f515e] mr-2"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Dietary / Delivery Filter:
            </span>
            {(["all", "Dairy Free", "Vegan", "Ships US"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                aria-pressed={dietFilter === opt}
                onClick={() => setDietFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide border-2 transition-colors cursor-pointer ${
                  dietFilter === opt
                    ? "bg-[#c28b8b] text-[#fcebd6] border-[#c28b8b]"
                    : "border-[#4f515e]/35 text-[#4f515e] hover:border-[#c28b8b]"
                }`}
                style={{ fontFamily: "var(--title-font)" }}
              >
                {opt === "all" ? "Show All" : opt}
              </button>
            ))}
            <span className="ml-auto text-xs text-[#4f515e]/70 font-semibold">
              Showing {filtered.length} gluten-free items
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="py-16 px-6 text-center rounded-[2.2rem] border-2 border-[#c28b8b]/40 bg-[#fff7ec] space-y-4">
            <p
              className="text-2xl uppercase font-extrabold text-[#4f515e]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              No treats match that combination yet
            </p>
            <p className="text-sm text-[#4f515e]/80">
              Try resetting your filters or call us at {AWAKEN_BUSINESS.phone} for custom dairy-free &amp; vegan requests!
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setDietFilter("all");
              }}
              className="px-6 py-2.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wide cursor-pointer hover:bg-[#4f515e] transition-colors"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="Collection_Browser_Grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

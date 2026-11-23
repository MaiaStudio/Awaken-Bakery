"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { COLLECTION_TABS, PRODUCTS, type ProductItem } from "@/data/awakenData";
import { ProductCard } from "../ProductCard";
import { GrowText, TransitionLink } from "../MotionPrimitives";

gsap.registerPlugin(ScrollTrigger);

const PAGE_SIZE = 6;

export function CollectionsBrowserSection() {
  const [activeCategory, setActiveCategory] = useState<ProductItem["category"]>("cookies");
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const shouldEnterAnimateRef = useRef(false);
  const exitTweenRef = useRef<gsap.core.Tween | null>(null);

  const categoryProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.max(1, Math.ceil(categoryProducts.length / PAGE_SIZE));
  const visibleProducts = categoryProducts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // Enter animation runs safely after React commits the updated category/page DOM
  useLayoutEffect(() => {
    if (!shouldEnterAnimateRef.current) return;
    shouldEnterAnimateRef.current = false;
    const grid = gridRef.current;
    if (!grid) {
      setIsAnimating(false);
      return;
    }
    const ctx = gsap.context(() => {
      const nextCards = grid.querySelectorAll(".Collection_Browser_Card_Inner");
      gsap.fromTo(
        nextCards,
        {
          y: "101%",
          rotation: -12,
          opacity: 0,
          transformOrigin: "top right",
        },
        {
          y: "0%",
          rotation: 0,
          opacity: 1,
          stagger: { amount: 0.35 },
          duration: 0.6,
          ease: "expo.out",
          onComplete: () => {
            setIsAnimating(false);
            ScrollTrigger.refresh();
          },
        }
      );
    }, grid);
    return () => {
      ctx.revert();
      exitTweenRef.current?.kill();
    };
  }, [activeCategory, page]);

  // Tilt-out (`y: 101%, rotation: 12`) -> tilt-in (`y: 101%, rotation: -12 -> 0`) card transition
  const animateSwap = (updateFn: () => void) => {
    const grid = gridRef.current;
    if (!grid || isAnimating) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updateFn();
      return;
    }
    const cards = grid.querySelectorAll(".Collection_Browser_Card_Inner");
    setIsAnimating(true);

    exitTweenRef.current?.kill();
    exitTweenRef.current = gsap.to(cards, {
      y: "101%",
      rotation: 12,
      opacity: 0,
      transformOrigin: "top left",
      stagger: { amount: 0.25 },
      duration: 0.42,
      ease: "power3.in",
      onComplete: () => {
        shouldEnterAnimateRef.current = true;
        updateFn();
      },
    });
  };

  const handleCategoryChange = (cat: ProductItem["category"]) => {
    if (cat === activeCategory || isAnimating) return;
    animateSwap(() => {
      setActiveCategory(cat);
      setPage(0);
    });
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= totalPages || isAnimating) return;
    animateSwap(() => setPage(nextPage));
  };

  return (
    <section className="Section Collections_Browser_Section Parallax_Wrapper SectionPadded">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div className="Collection_Browser_Tabs" role="tablist" aria-label="Menu Categories">
          {COLLECTION_TABS.map((tab) => {
            const selected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => handleCategoryChange(tab.id)}
                className={`Collection_Browser_Tab_Button ${tab.pinkAccent ? "PinkTab" : ""} ${
                  selected ? "Selected" : ""
                }`}
              >
                <div className="Back" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <p className="text-sm text-[#4f515e] font-medium max-w-sm">
          {COLLECTION_TABS.find((t) => t.id === activeCategory)?.tagline}
        </p>
      </div>

      <div ref={gridRef} className="Collection_Browser_Grid">
        {visibleProducts.map((product) => (
          <div key={product.id} className="Collection_Browser_Product">
            <div className="Collection_Browser_Card_Inner">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>

      <div className="Collection_Browser_Bottom">
        <div className="Collection_Browser_Navigation">
          <button
            type="button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
            className={`Collection_Browser_Arrow Left ${page === 0 ? "Disabled" : ""}`}
            aria-label="Previous page"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages - 1}
            className={`Collection_Browser_Arrow Right ${page >= totalPages - 1 ? "Disabled" : ""}`}
            aria-label="Next page"
          >
            <ArrowRight size={20} />
          </button>
          <span
            className="text-xs uppercase font-bold text-[#4f515e]/70 ml-2"
            style={{ fontFamily: "var(--title-font)" }}
          >
            Page {page + 1} / {totalPages}
          </span>
        </div>

        <TransitionLink
          href="/menu"
          className="text-xl uppercase font-extrabold underline text-[#4f515e]"
        >
          <GrowText text="View Full Menu" />
        </TransitionLink>
      </div>
    </section>
  );
}

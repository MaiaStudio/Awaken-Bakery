import React from "react";
import { FEATURED_PRODUCTS } from "@/data/awakenData";
import { ProductCard } from "../ProductCard";

const MARQUEE_WORDS = Array.from({ length: 8 }, () => "BEST SELLERS");

const MARQUEE_ROWS = [
  { key: "row-1", reversed: false, duration: "22s" },
  { key: "row-2", reversed: true, duration: "30s" },
  { key: "row-3", reversed: false, duration: "26s" },
  { key: "row-4", reversed: true, duration: "34s" },
];

export function CollectionDisplaySection() {
  return (
    <section
      id="hero-anchor"
      className="Section Collection_Display_Section Parallax_Wrapper SectionPadded"
    >
      {/* Signature Tilted Opposing 4-Row Marquee Backdrop */}
      <div className="Collection_Display_Back" aria-hidden="true">
        {MARQUEE_ROWS.map((row) => (
          <div className="Marquee" key={row.key}>
            <div
              className={`Marquee_Content ${row.reversed ? "Reversed" : ""}`}
              style={{ animationDuration: row.duration }}
            >
              {MARQUEE_WORDS.map((word, idx) => (
                <span
                  key={`${row.key}-${idx}`}
                  className={row.reversed ? "ReversedText" : undefined}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3 Arch-Bordered Featured Bestsellers */}
      <div className="Collection_Display">
        {FEATURED_PRODUCTS.slice(0, 3).map((product) => (
          <div key={product.id} className="Collection_Display_Item">
            <ProductCard product={product} arched />
          </div>
        ))}
      </div>
    </section>
  );
}

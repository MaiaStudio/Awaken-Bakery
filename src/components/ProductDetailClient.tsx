"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import type { ProductHighlight, ProductItem } from "@/data/awakenData";
import { AWAKEN_BUSINESS, COLLECTION_TABS } from "@/data/awakenData";
import { useStore } from "@/context/StoreContext";
import { MagneticRippleWrapper, RevealWords, TransitionLink } from "./MotionPrimitives";
import { ProductCard } from "./ProductCard";

function EditorialIcon({ kind }: { kind: ProductHighlight["icon"] }) {
  const stroke = "#4f515e";
  const accent = "#c28b8b";

  switch (kind) {
    case "gf":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="24" stroke={stroke} strokeWidth="2.2" strokeDasharray="3 2" />
          <path d="M32 15v34" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M32 23c-5-2-8-6-7-10 4 1 7 4 7 10Z" fill={accent} stroke={stroke} strokeWidth="1.8" />
          <path d="M32 23c5-2 8-6 7-10-4 1-7 4-7 10Z" fill={accent} stroke={stroke} strokeWidth="1.8" />
          <path d="M32 33c-6-2-9-5-8-9 4 1 8 4 8 9Z" fill="#fcebd6" stroke={stroke} strokeWidth="1.8" />
          <path d="M32 33c6-2 9-5 8-9-4 1-8 4-8 9Z" fill="#fcebd6" stroke={stroke} strokeWidth="1.8" />
          <path d="M16 48 48 16" stroke={accent} strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    case "cake":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <path d="M12 28 38 14l14 14v22H12V28Z" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12 28h40" stroke={stroke} strokeWidth="2.2" />
          <path d="M12 36h40M12 43h40" stroke={accent} strokeWidth="2.6" />
          <circle cx="25" cy="18" r="4.5" fill={accent} stroke={stroke} strokeWidth="2" />
          <path d="M26 14c1-3 3-4 5-4" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "buttercream":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <path d="M22 14h22c4 0 7 3 7 7v8H18v-9c0-3.3 2.7-6 6-6Z" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M26 29v12m10-12v12" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="26" cy="46" rx="5.5" ry="7" stroke={stroke} strokeWidth="2" fill={accent} fillOpacity="0.35" />
          <ellipse cx="36" cy="46" rx="5.5" ry="7" stroke={stroke} strokeWidth="2" fill={accent} fillOpacity="0.35" />
          <path d="M23 21h18" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "bread":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <path d="M10 38c0-13 10-21 22-21s22 8 22 21c0 5-3 9-8 9H18c-5 0-8-4-8-9Z" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" />
          <path d="M22 21c2 4 4 7 4 11M32 18c2 4 4 8 4 12M42 21c2 4 3 7 3 10" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case "vegan":
    case "df":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <path d="M16 46C16 26 30 14 49 15c1 19-11 33-33 31Z" fill={accent} fillOpacity="0.38" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M16 48c8-10 18-19 29-26" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M28 36v-8m8 1h-7" stroke={stroke} strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case "bake":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <rect x="12" y="20" width="40" height="30" rx="5" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" />
          <rect x="18" y="30" width="28" height="14" rx="2.5" fill={accent} fillOpacity="0.35" stroke={stroke} strokeWidth="2" />
          <circle cx="22" cy="25" r="2" fill={stroke} />
          <circle cx="32" cy="25" r="2" fill={stroke} />
          <circle cx="42" cy="25" r="2" fill={stroke} />
          <path d="M24 14c0-2 2-3 2-5M32 14c0-2 2-3 2-5M40 14c0-2 2-3 2-5" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "ship":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <path d="M12 24 32 14l20 10v20L32 54 12 44V24Z" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12 24 32 34l20-10M32 34v20" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M22 19 42 29" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "fresh":
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <circle cx="32" cy="34" r="19" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" />
          <circle cx="24" cy="29" r="2.6" fill={accent} stroke={stroke} strokeWidth="1.5" />
          <circle cx="38" cy="27" r="2.4" fill={stroke} />
          <circle cx="31" cy="39" r="2.8" fill={accent} stroke={stroke} strokeWidth="1.5" />
          <circle cx="41" cy="38" r="2.1" fill={stroke} />
          <circle cx="22" cy="40" r="2" fill={stroke} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true">
          <path d="M32 12 50 20v12c0 12-7.5 19.5-18 22-10.5-2.5-18-10-18-22V20l18-8Z" fill="#fcebd6" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="m23 33 6 6 12-13" stroke={accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: {
  product: ProductItem;
  relatedProducts: ProductItem[];
}) {
  const { addToCart, triggerCrumbsFromElement } = useStore();

  const gallery = useMemo(
    () => (product.images && product.images.length > 0 ? product.images : [product.image]),
    [product]
  );

  // Circular morph gallery state
  const [activeIndex, setActiveIndex] = useState(0);
  const [deactiveIndex, setDeactiveIndex] = useState<number | null>(null);
  const morphTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Selected variant option indices (default 0 for each option group)
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>(() => {
    const init: Record<number, number> = {};
    (product.options || []).forEach((_, idx) => {
      init[idx] = 0;
    });
    return init;
  });

  const [qty, setQty] = useState(1);

  // Clear morph timer on unmount
  useEffect(() => {
    return () => {
      if (morphTimerRef.current) clearTimeout(morphTimerRef.current);
    };
  }, []);

  const handleSelectImage = (nextIdx: number) => {
    if (nextIdx === activeIndex) return;
    if (morphTimerRef.current) clearTimeout(morphTimerRef.current);
    const prevIdx = activeIndex;
    setDeactiveIndex(prevIdx);
    setActiveIndex(nextIdx);
    morphTimerRef.current = setTimeout(() => {
      setDeactiveIndex((cur) => (cur === prevIdx ? null : cur));
    }, 1000);
  };

  // Compute live unit price (rounded to cents) based on base price + selected option deltas
  const unitPrice = useMemo(() => {
    let total = product.price;
    (product.options || []).forEach((opt, optIdx) => {
      const choiceIdx = selectedOptions[optIdx] ?? 0;
      const choice = opt.choices[choiceIdx];
      if (choice?.priceDelta) total += choice.priceDelta;
    });
    return Math.round(total * 100) / 100;
  }, [product, selectedOptions]);

  // Human-readable variant summary for Cart Drawer
  const variantSummary = useMemo(() => {
    if (!product.options || product.options.length === 0) return undefined;
    const parts = product.options
      .map((opt, optIdx) => {
        const choice = opt.choices[selectedOptions[optIdx] ?? 0];
        if (!choice) return null;
        if (choice.label === "None" || choice.label === "No" || choice.label === "No Sprinkles" || choice.label === "No Color") {
          return null;
        }
        return choice.label;
      })
      .filter(Boolean);
    return parts.length > 0 ? parts.join(" • ") : undefined;
  }, [product, selectedOptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(product, qty, variantSummary, unitPrice);
    setQty(1);
  };

  const categoryInfo = COLLECTION_TABS.find((t) => t.id === product.category);
  const categoryLabel =
    categoryInfo?.label || (product.category === "shipping" ? "Nationwide Shipping" : "Menu");

  const paragraphs = useMemo(
    () =>
      (product.fullDescription || product.description)
        .split(/\n{2,}/)
        .map((p) => p.trim())
        .filter(Boolean),
    [product]
  );

  const hasMultiplePhotos = gallery.length > 1;

  return (
    <section className="Section Product_Page_Section SectionPadded">
      {/* Subtle Breadcrumb */}
      <nav className="Product_Breadcrumb" aria-label="Breadcrumb">
        <TransitionLink href="/menu">Menu</TransitionLink>
        <span>/</span>
        <TransitionLink
          href={product.category === "cakes" ? "/cakes" : `/menu?category=${product.category}`}
        >
          {categoryLabel}
        </TransitionLink>
        <span>/</span>
        <span>{product.title}</span>
      </nav>

      {/* Top 50/50 Product Showcase Split */}
      <div className="Product_Top">
        <div className="Product_Media">
          <div className={`Product_Main_Media ${!hasMultiplePhotos ? "Single_Photo" : ""}`}>
            {gallery.map((src, idx) => {
              const isActive = idx === activeIndex;
              const isDeactive = idx === deactiveIndex;
              return (
                <div
                  key={`${src}-${idx}`}
                  className={`Main_Image ${isActive ? "Active" : ""} ${isDeactive ? "Deactive" : ""}`}
                >
                  <img
                    src={src}
                    alt={`${product.title}${gallery.length > 1 ? ` — photo ${idx + 1}` : ""}`}
                  />
                </div>
              );
            })}
          </div>

          {hasMultiplePhotos && (
            <div className="Product_Other_Media" role="group" aria-label="Product photos">
              {gallery.map((src, idx) => (
                <button
                  key={`${src}-${idx}`}
                  type="button"
                  aria-current={idx === activeIndex ? "true" : undefined}
                  aria-label={`View photo ${idx + 1} of ${product.title}`}
                  className={`Additional_Image ${idx === activeIndex ? "Active" : ""}`}
                  onClick={() => handleSelectImage(idx)}
                >
                  <img src={src} alt={`${product.title} thumbnail ${idx + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="Product_Infos">
          <div className="Wrapper">
            <RevealWords as="h1" text={product.title} className="Product_Title" />

            <div className="Product_Format">
              <span className="Product_Price">${unitPrice.toFixed(2)}</span>
              <span className="Separator_Dot" aria-hidden="true" />
              <span className="Product_Format_Sub">{product.format}</span>
            </div>

            <div className="Product_Description">
              {paragraphs.map((para, i) => {
                const isIngredients = para.toLowerCase().startsWith("ingredients:");
                return (
                  <p
                    key={i}
                    style={
                      isIngredients
                        ? {
                            fontSize: "0.88rem",
                            color: "rgba(79, 81, 94, 0.78)",
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            padding: "0.85rem 1rem",
                            borderRadius: "0.9rem",
                            border: "1px solid rgba(194, 139, 139, 0.28)",
                          }
                        : undefined
                    }
                  >
                    {para}
                  </p>
                );
              })}

              <div className="Product_Disclaimers">
                {product.disclaimers.map((line, i) => (
                  <span key={i} className="disclaimer">
                    {i === 0 && (
                      <span className="disclaimer_icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                          <path
                            d="M12 3 19 6v5.5c0 4.6-3 8.1-7 9.5-4-1.4-7-4.9-7-9.5V6l7-3Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="m9 12 2 2 4-4.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                    {line}
                  </span>
                ))}
              </div>
            </div>

            <form className="Product_Form" onSubmit={handleSubmit}>
              {/* Awaken Variant Selector */}
              {product.options && product.options.length > 0 && (
                <div className="awaken-variant-selector">
                  {product.options.map((opt, optIdx) => {
                    const isSizeLike =
                      opt.choices.length <= 3 &&
                      opt.choices.some((c) => (c.priceDelta ?? 0) > 0);
                    return (
                      <div key={opt.name} className="avs-option-group">
                        <p className="avs-option-label">{opt.name} :</p>
                        <div
                          className={`avs-option-buttons ${isSizeLike ? "avs-compact-grid" : ""}`}
                          role="radiogroup"
                          aria-label={opt.name}
                        >
                          {opt.choices.map((choice, choiceIdx) => {
                            const selected = (selectedOptions[optIdx] ?? 0) === choiceIdx;
                            const otherDeltas = (product.options || []).reduce((sum, o, i) => {
                              if (i === optIdx) return sum;
                              const c = o.choices[selectedOptions[i] ?? 0];
                              return sum + (c?.priceDelta ?? 0);
                            }, 0);
                            const showTotalPrice = isSizeLike;
                            const displayPrice = showTotalPrice
                              ? `$${(Math.round((product.price + otherDeltas + (choice.priceDelta ?? 0)) * 100) / 100).toFixed(2)}`
                              : choice.priceDelta
                                ? `+$${choice.priceDelta.toFixed(2)}`
                                : null;

                            return (
                              <button
                                key={choice.label}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                className={`avs-option-btn ${selected ? "is-selected" : ""}`}
                                onClick={() =>
                                  setSelectedOptions((prev) => ({
                                    ...prev,
                                    [optIdx]: choiceIdx,
                                  }))
                                }
                              >
                                <span className="avs-btn-value">{choice.label}</span>
                                {displayPrice && (
                                  <span className="avs-btn-price">{displayPrice}</span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Quantity Selector */}
              <div className="Product_Form_Top">
                <span className="Product_Form_Label">Quantity :</span>
                <div className="Quantity_Selector" aria-label={`Quantity for ${product.title}`}>
                  <button
                    type="button"
                    className="Minus_Button Quantity_Selector_Button"
                    onMouseEnter={(e) => triggerCrumbsFromElement(e.currentTarget)}
                    onClick={(e) => {
                      triggerCrumbsFromElement(e.currentTarget);
                      setQty((q) => Math.max(1, q - 1));
                    }}
                    aria-label="Decrease quantity"
                  >
                    <span>−</span>
                  </button>
                  <span className="Quantity_Value" aria-live="polite">
                    {qty}
                  </span>
                  <button
                    type="button"
                    className="Plus_Button Quantity_Selector_Button"
                    onMouseEnter={(e) => triggerCrumbsFromElement(e.currentTarget)}
                    onClick={(e) => {
                      triggerCrumbsFromElement(e.currentTarget);
                      setQty((q) => Math.min(24, q + 1));
                    }}
                    aria-label="Increase quantity"
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <div className="Product_Form_Bottom">
                <MagneticRippleWrapper className="Product_Item_Submit_Container">
                  <button
                    type="submit"
                    className="Product_Item_Submit"
                    onClick={(e) => triggerCrumbsFromElement(e.currentTarget)}
                  >
                    Add To Cart — ${(unitPrice * qty).toFixed(2)}
                  </button>
                </MagneticRippleWrapper>
              </div>

              <div className="Product_Shop_Note">
                Also available directly on{" "}
                <a href={product.shopUrl} target="_blank" rel="noopener noreferrer">
                  shop.awakenbg.com ↗
                </a>{" "}
                • Questions? Call {AWAKEN_BUSINESS.phone}
              </div>
            </form>

            {/* 3 Editorial Bakery Icons */}
            <div className="Product_Icons">
              {product.highlights.slice(0, 3).map((item) => (
                <div key={item.label} className="Product_Icon">
                  <div className="Product_Icon_Image">
                    <EditorialIcon kind={item.icon} />
                  </div>
                  <span className="Product_Icon_Title">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products ("YOU MAY ALSO LIKE:") */}
      {relatedProducts.length > 0 && (
        <div className="Product_Bottom">
          <RevealWords
            as="h2"
            text="YOU MAY ALSO LIKE:"
            className="SectionTitle RecommendedTitle"
          />
          <div className="Collection_Product_List">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="Collection_Product">
                <ProductCard product={rel} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

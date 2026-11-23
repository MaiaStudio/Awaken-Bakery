"use client";

import React, { useState } from "react";
import type { ProductItem } from "@/data/awakenData";
import { useStore } from "@/context/StoreContext";
import { MagneticRippleWrapper, TransitionLink } from "./MotionPrimitives";

const BADGE_COORDS = [
  { top: "20%", left: "26%", rotation: "-11deg" },
  { top: "76%", left: "73%", rotation: "9deg" },
  { top: "24%", left: "76%", rotation: "7deg" },
];

export function ProductCard({
  product,
  arched = false,
}: {
  product: ProductItem;
  arched?: boolean;
}) {
  const [qty, setQty] = useState(1);
  const { addToCart, triggerCrumbsFromElement } = useStore();

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerCrumbsFromElement(e.currentTarget);
    setQty((q) => Math.max(1, q - 1));
  };

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerCrumbsFromElement(e.currentTarget);
    setQty((q) => Math.min(24, q + 1));
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerCrumbsFromElement(e.currentTarget);
    addToCart(product, qty);
    setQty(1);
  };

  const secondImg = product.secondImage || product.images?.[1];
  const hasGenuineSecond = Boolean(secondImg) && secondImg !== product.image;
  const productHref = `/products/${product.slug}`;

  return (
    <article className="Product_Item">
      <TransitionLink
        href={productHref}
        className={`Product_Item_Image ${hasGenuineSecond ? "Has_Second" : "Single_Image"} ${arched ? "Arched" : ""}`}
        ariaLabel={`View details for ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
        />

        {hasGenuineSecond && secondImg && (
          <div className="Product_Item_Second_Image">
            <img
              src={secondImg}
              alt={`${product.title} alternate view`}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        {product.dietaryTags.slice(0, 3).map((tag, idx) => {
          const coord = BADGE_COORDS[idx % BADGE_COORDS.length];
          return (
            <span
              key={tag}
              className={`Product_Item_Ingredient ${idx === 1 ? "DarkBadge" : ""}`}
              style={
                {
                  "--top": coord.top,
                  "--left": coord.left,
                  "--rotation": coord.rotation,
                } as React.CSSProperties
              }
            >
              {tag}
            </span>
          );
        })}
      </TransitionLink>

      <TransitionLink href={productHref} className="Product_Item_Title_Link">
        <h3 className="Product_Item_Title">{product.title}</h3>
      </TransitionLink>
      <div className="Product_Item_Meta">
        <span>{product.format}</span>
      </div>

      <div className="Product_Item_Content">
        <span className="Price">${(product.price * qty).toFixed(2)}</span>

        <div className="Quantity_Selector" aria-label={`Quantity for ${product.title}`}>
          <button
            type="button"
            className="Minus_Button Quantity_Selector_Button"
            onMouseEnter={(e) => triggerCrumbsFromElement(e.currentTarget)}
            onClick={handleDecrement}
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
            onClick={handleIncrement}
            aria-label="Increase quantity"
          >
            <span>+</span>
          </button>
        </div>
      </div>

      <MagneticRippleWrapper className="Product_Item_Submit_Container">
        <button
          type="button"
          className="Product_Item_Submit"
          onClick={handleAdd}
        >
          Add to Cart
        </button>
      </MagneticRippleWrapper>
    </article>
  );
}

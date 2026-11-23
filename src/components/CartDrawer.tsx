"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, CheckCircle2, MapPin, Package, X } from "lucide-react";
import { AWAKEN_BUSINESS } from "@/data/awakenData";
import { useStore } from "@/context/StoreContext";
import { GrowText, MagneticRippleWrapper, TransitionLink } from "./MotionPrimitives";

export function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    showToast,
    triggerCrumbsFromElement,
  } = useStore();

  const [fulfillment, setFulfillment] = useState<"pickup" | "shipping">("pickup");
  const [pickupDate, setPickupDate] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const checkoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasCake = useMemo(
    () => items.some((i) => i.product.category === "cakes"),
    [items]
  );

  const minPickupDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + (hasCake ? 4 : 0));
    return d.toISOString().split("T")[0];
  }, [hasCake]);

  useEffect(() => {
    if (!isCartOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCartOpen, closeCart]);

  useEffect(() => {
    return () => {
      if (checkoutTimerRef.current) clearTimeout(checkoutTimerRef.current);
    };
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0 || orderPlaced) return;
    setOrderPlaced(true);
    showToast("Order summary prepared! Continue in our official Awaken Shop or call (270) 551-4440.");
    if (checkoutTimerRef.current) clearTimeout(checkoutTimerRef.current);
    checkoutTimerRef.current = setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      closeCart();
    }, 2200);
  };

  return (
    <>
      <div
        className={`overlay ${isCartOpen ? "open" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`Cart_Drawer ${isCartOpen ? "open" : ""}`}
        aria-label="Shopping Bag"
        aria-hidden={!isCartOpen}
        inert={!isCartOpen}
      >
        <div className="Drawer_Top">
          <h2>Your Bakery Bag</h2>
          <button
            type="button"
            className="Drawer_Close"
            onClick={closeCart}
            aria-label="Close bag"
          >
            <X size={26} />
          </button>
        </div>

        {/* Dedicated GF reassurance banner */}
        <div className="mb-4 px-4 py-3 rounded-2xl border-2 border-[#c28b8b] bg-[#fcebd6] text-xs leading-relaxed text-[#4f515e]">
          <strong className="uppercase tracking-wide block mb-0.5" style={{ fontFamily: "var(--title-font)" }}>
            100% Dedicated Gluten-Free Kitchen
          </strong>
          Every item is celiac-safe with zero cross-contamination. Custom cakes require 4+ days notice.
        </div>

        {/* Fulfillment Toggle */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            type="button"
            onClick={() => setFulfillment("pickup")}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs uppercase font-bold border-2 transition-colors cursor-pointer ${
              fulfillment === "pickup"
                ? "bg-[#c28b8b] text-[#fcebd6] border-[#c28b8b]"
                : "bg-transparent text-[#4f515e] border-[#c28b8b]/40"
            }`}
            style={{ fontFamily: "var(--title-font)" }}
          >
            <MapPin size={14} /> Bowling Green Pickup
          </button>
          <button
            type="button"
            onClick={() => setFulfillment("shipping")}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs uppercase font-bold border-2 transition-colors cursor-pointer ${
              fulfillment === "shipping"
                ? "bg-[#c28b8b] text-[#fcebd6] border-[#c28b8b]"
                : "bg-transparent text-[#4f515e] border-[#c28b8b]/40"
            }`}
            style={{ fontFamily: "var(--title-font)" }}
          >
            <Package size={14} /> US Shipping
          </button>
        </div>

        <form onSubmit={handleCheckout} className="flex-1 flex flex-col justify-between min-h-0">
          <div className="flex-1 overflow-y-auto pr-1 space-y-5" data-lenis-prevent>
            {orderPlaced ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <CheckCircle2 size={56} className="text-[#c28b8b] mb-3" />
                <h3
                  className="text-2xl uppercase font-extrabold text-[#4f515e]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Sweet! We&apos;ve Got Your Order
                </h3>
                <p className="text-sm text-[#4f515e]/80 mt-2">
                  Thank you for supporting Awaken Bakery in Bowling Green, KY.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <p
                  className="text-2xl uppercase font-extrabold text-[#c28b8b]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Your bag is empty
                </p>
                <p className="text-sm text-[#4f515e]/75 mt-2 max-w-xs">
                  Add cookies, celebration cakes, artisan loaves, or our famous take-and-bake cinnamon rolls!
                </p>
              </div>
            ) : (
              items.map(({ cartKey, product, quantity, variantLabel, unitPrice }) => (
                <div
                  key={cartKey}
                  className="flex gap-4 pb-4 border-b border-[#4f515e]/15"
                >
                  <TransitionLink
                    href={`/products/${product.slug}`}
                    onClick={closeCart}
                    className="flex-shrink-0"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 rounded-2xl object-cover bg-[#fcebd6]"
                    />
                  </TransitionLink>
                  <div className="flex-1 min-w-0">
                    <TransitionLink
                      href={`/products/${product.slug}`}
                      onClick={closeCart}
                    >
                      <h3
                        className="text-base uppercase font-extrabold text-[#4f515e] leading-tight hover:text-[#c28b8b] transition-colors"
                        style={{ fontFamily: "var(--title-font)" }}
                      >
                        {product.title}
                      </h3>
                    </TransitionLink>
                    <div className="text-xs text-[#4f515e]/75 mt-0.5">
                      {variantLabel || product.format}
                    </div>
                    <div className="text-sm font-bold text-[#c28b8b] mt-1">
                      ${(unitPrice * quantity).toFixed(2)}
                    </div>

                    <div className="flex items-center justify-between mt-2.5">
                      <div className="Quantity_Selector">
                        <button
                          type="button"
                          className="Minus_Button Quantity_Selector_Button"
                          style={{ width: "2rem", height: "2rem", fontSize: "1.25rem" }}
                          onClick={(e) => {
                            triggerCrumbsFromElement(e.currentTarget);
                            updateQuantity(cartKey, quantity - 1);
                          }}
                          aria-label="Decrease quantity"
                        >
                          <span>−</span>
                        </button>
                        <span className="Quantity_Value" style={{ fontSize: "1.1rem" }}>
                          {quantity}
                        </span>
                        <button
                          type="button"
                          className="Plus_Button Quantity_Selector_Button"
                          style={{ width: "2rem", height: "2rem", fontSize: "1.25rem" }}
                          onClick={(e) => {
                            triggerCrumbsFromElement(e.currentTarget);
                            updateQuantity(cartKey, quantity + 1);
                          }}
                          aria-label="Increase quantity"
                        >
                          <span>+</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(cartKey)}
                        className="text-xs uppercase font-bold underline cursor-pointer text-[#4f515e]"
                      >
                        <GrowText text="Remove" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pt-4 border-t-2 border-[#c28b8b]/25 space-y-3">
            {fulfillment === "pickup" && items.length > 0 && (
              <label className="block">
                <span
                  className="flex items-center gap-1.5 text-xs uppercase font-bold text-[#4f515e] mb-1.5"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  <Calendar size={13} /> Preferred Pickup Date (Tue–Sat)
                </span>
                <input
                  type="date"
                  value={pickupDate}
                  min={minPickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full rounded-2xl border-2 border-[#c28b8b] bg-white px-3.5 py-2.5 text-sm text-[#4f515e]"
                />
              </label>
            )}

            <MagneticRippleWrapper className="Cart_Checkout_Button_Container">
              <button
                type="submit"
                disabled={items.length === 0 || orderPlaced}
                className="Cart_Checkout_Button disabled:opacity-50"
              >
                <span>{fulfillment === "pickup" ? "Reserve Pickup" : "Checkout Shipping"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fcebd6]" />
                <span>${subtotal.toFixed(2)}</span>
              </button>
            </MagneticRippleWrapper>

            <div className="text-center text-xs text-[#4f515e]/75">
              Or order directly on{" "}
              <a
                href={AWAKEN_BUSINESS.links.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-[#c28b8b]"
              >
                shop.awakenbg.com
              </a>{" "}
              • {AWAKEN_BUSINESS.phone}
            </div>
          </div>
        </form>
      </aside>
    </>
  );
}

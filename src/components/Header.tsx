"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { AWAKEN_BUSINESS, PRODUCTS } from "@/data/awakenData";
import { useStore } from "@/context/StoreContext";
import { GrowText, MagneticRippleWrapper, TransitionLink } from "./MotionPrimitives";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Cakes", href: "/cakes" },
  { label: "Our Story", href: "/our-story" },
  { label: "Take & Bake", href: "/take-and-bake" },
  { label: "Holiday", href: "/holiday" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const {
    totalItems,
    isOverDarkHero,
    isSearchOpen,
    isMobileMenuOpen,
    openCart,
    toggleSearch,
    closeSearch,
    openMobileMenu,
    closeMobileMenu,
    addToCart,
    toastMessage,
  } = useStore();

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isSearchOpen && !isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isSearchOpen) closeSearch();
        if (isMobileMenuOpen) closeMobileMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isSearchOpen, isMobileMenuOpen, closeSearch, closeMobileMenu]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS.slice(0, 4);
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.dietaryTags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [query]);

  const filled = !isOverDarkHero;

  return (
    <>
      <header
        id="section-header"
        className={`Site_Header ${filled ? "Filled" : ""} ${isSearchOpen ? "FilledSearch" : ""}`}
        style={{ top: toastMessage ? "44px" : "0px" }}
      >
        <TransitionLink href="/" className="site_logo" ariaLabel="Awaken Bakery Home">
          <span className={`Logo_Dark ${filled || isSearchOpen ? "Shown" : ""}`} aria-hidden="true">
            <img src="/awaken/images/logo-awaken.png" alt="" />
          </span>
          <span className={`Logo_Light ${!filled && !isSearchOpen ? "Shown" : ""}`} aria-hidden="true">
            <img src="/awaken/images/logo-awaken.png" alt="" />
          </span>
        </TransitionLink>

        <nav aria-label="Main navigation">
          <ul className="main-menu">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <TransitionLink href={link.href}>
                  <GrowText text={link.label} />
                </TransitionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-menu_right">
          <button
            type="button"
            className="menu_icon"
            onClick={openCart}
            aria-label={`Open shopping bag (${totalItems} items)`}
          >
            <ShoppingBag className="Icon" strokeWidth={1.8} />
            <span className={`Header_CartDot ${totalItems > 0 ? "is-visible" : ""}`}>
              {totalItems}
            </span>
          </button>

          <button
            type="button"
            className="menu_icon"
            onClick={toggleSearch}
            aria-label="Search gluten-free menu"
            aria-expanded={isSearchOpen}
            aria-controls="site-search-popup"
          >
            {isSearchOpen ? (
              <X className="Icon" strokeWidth={1.8} />
            ) : (
              <Search className="Icon" strokeWidth={1.8} />
            )}
          </button>

          <button
            type="button"
            className="menu_icon burger"
            onClick={openMobileMenu}
            aria-label="Open menu drawer"
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-mobile-menu"
          >
            <Menu className="Icon" strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Search Overlay & Popup */}
      <div
        className={`overlay-menu ${isSearchOpen ? "open" : ""}`}
        onClick={closeSearch}
        aria-hidden="true"
      />
      <div
        id="site-search-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Search gluten-free treats"
        className={`Search_Popup ${isSearchOpen ? "open" : ""}`}
        aria-hidden={!isSearchOpen}
        inert={!isSearchOpen}
      >
        <div className="Search_Popup_Inner">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2
              style={{
                fontFamily: "var(--title-font)",
                textTransform: "uppercase",
                fontWeight: 800,
                fontSize: "1.5rem",
                margin: 0,
              }}
            >
              Search 100% Gluten-Free Treats
            </h2>

            <form
              className="Search flex-1 max-w-xl flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try cinnamon rolls, vegan, cake, bagels..."
                className="Form__Input"
                aria-label="Search bakery products"
              />
              <MagneticRippleWrapper className="Form__Submit">
                <button type="submit">Search</button>
              </MagneticRippleWrapper>
            </form>

            <button
              type="button"
              onClick={closeSearch}
              className="Drawer_Close"
              aria-label="Close search"
            >
              <X size={24} />
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="py-6 text-center text-sm text-[#4f515e]/80">
              No gluten-free treats matched &ldquo;{query}&rdquo;.{" "}
              <button
                type="button"
                onClick={() => setQuery("")}
                className="underline font-bold text-[#c28b8b] cursor-pointer"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-2xl border border-[#c28b8b]/30 bg-[#fcebd6]"
                >
                  <TransitionLink
                    href={`/products/${item.slug}`}
                    onClick={closeSearch}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </TransitionLink>
                  <div className="min-w-0 flex-1">
                    <TransitionLink
                      href={`/products/${item.slug}`}
                      onClick={closeSearch}
                      className="block truncate uppercase font-extrabold text-sm text-[#4f515e] hover:text-[#c28b8b] transition-colors"
                    >
                      <span style={{ fontFamily: "var(--title-font)" }}>{item.title}</span>
                    </TransitionLink>
                    <div className="text-xs opacity-70 mt-1">${item.price.toFixed(2)}</div>
                    <button
                      type="button"
                      onClick={() => {
                        closeSearch();
                        addToCart(item, 1);
                      }}
                      className="mt-1.5 text-xs font-bold uppercase tracking-wide text-[#c28b8b] hover:text-[#4f515e] cursor-pointer"
                      style={{ fontFamily: "var(--title-font)" }}
                    >
                      + Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Radial Menu Drawer */}
      <div
        id="site-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`Menu_Drawer ${isMobileMenuOpen ? "open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <img
            src="/awaken/images/logo-awaken.png"
            alt="Awaken Bakery — Always Gluten Free"
            loading="lazy"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <button
            type="button"
            onClick={closeMobileMenu}
            className="Drawer_Close"
            style={{ color: "var(--beige)" }}
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
        </div>

        <div className="Menu_Drawer_Links">
          {NAV_LINKS.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="Menu_Drawer_Link"
              onClick={closeMobileMenu}
            >
              <GrowText text={link.label} />
            </TransitionLink>
          ))}
          <TransitionLink
            href="/faq"
            className="Menu_Drawer_Link"
            onClick={closeMobileMenu}
          >
            <GrowText text="FAQ & Care" />
          </TransitionLink>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm uppercase font-bold" style={{ fontFamily: "var(--title-font)" }}>
            <a href={AWAKEN_BUSINESS.links.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--pink)" }}>
              Instagram
            </a>
            <a href={AWAKEN_BUSINESS.links.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "var(--beige)" }}>
              Facebook
            </a>
            <a href={AWAKEN_BUSINESS.links.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: "var(--beige)" }}>
              TikTok
            </a>
            <a href={AWAKEN_BUSINESS.phoneHref} style={{ color: "var(--beige)" }}>
              {AWAKEN_BUSINESS.phone}
            </a>
          </div>

          <div className="Drawer_Changing_Images">
            <div className="Fluid">
              <img src="/awaken/images/funfetti-cake.webp" alt="Awaken Funfetti Cake" loading="lazy" />
            </div>
            <div className="Fluid">
              <img src="/awaken/images/bagel-scene.webp" alt="Awaken Gluten-Free Bagel" loading="lazy" />
            </div>
            <div className="Fluid">
              <img src="/awaken/images/artisan-bread.webp" alt="Awaken Artisan Bread" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type Lenis from "lenis";
import { PRODUCTS, type ProductItem } from "@/data/awakenData";

export interface CartItem {
  cartKey: string;
  product: ProductItem;
  quantity: number;
  variantLabel?: string;
  unitPrice: number;
}

type CrumbEmitter = (x: number, y: number, size: number, color: string) => void;

interface StoreContextValue {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  isOverDarkHero: boolean;
  toastMessage: string | null;
  openCart: () => void;
  closeCart: () => void;
  toggleSearch: () => void;
  closeSearch: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  addToCart: (product: ProductItem, quantity?: number, variantLabel?: string, unitPrice?: number) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  removeItem: (cartKey: string) => void;
  clearCart: () => void;
  showToast: (msg: string) => void;
  setIsOverDarkHero: (val: boolean) => void;
  registerCrumbEmitter: (fn: CrumbEmitter | null) => void;
  triggerCrumbsFromElement: (el: HTMLElement | null) => void;
  registerLenis: (lenis: Lenis | null) => void;
  scrollToHash: (hash: string) => void;
  navigateWithTransition: (href: string) => void;
  isPageHiding: boolean;
}

const StoreContext = createContext<StoreContextValue | null>(null);

const SKIP_LABELS = new Set(["None", "No", "No Sprinkles", "No Color"]);

function roundCents(v: number): number {
  return Math.round(v * 100) / 100;
}

export function getDefaultVariant(product: ProductItem): {
  variantLabel?: string;
  unitPrice: number;
} {
  if (!product.options || product.options.length === 0) {
    return { variantLabel: undefined, unitPrice: roundCents(product.price) };
  }
  let price = product.price;
  const parts: string[] = [];
  for (const opt of product.options) {
    const first = opt.choices[0];
    if (!first) continue;
    if (first.priceDelta) price += first.priceDelta;
    if (!SKIP_LABELS.has(first.label)) parts.push(first.label);
  }
  return {
    variantLabel: parts.length > 0 ? parts.join(" • ") : undefined,
    unitPrice: roundCents(price),
  };
}

function parseSavedCart(raw: string): CartItem[] {
  const parsed: unknown = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
  const valid: CartItem[] = [];
  for (const entry of parsed) {
    if (!entry || typeof entry !== "object") continue;
    const obj = entry as Record<string, unknown>;
    const prodId =
      typeof obj.productId === "string"
        ? obj.productId
        : obj.product && typeof (obj.product as Record<string, unknown>).id === "string"
          ? ((obj.product as Record<string, unknown>).id as string)
          : null;
    if (!prodId) continue;
    const product = byId.get(prodId);
    if (!product) continue;
    const quantity = typeof obj.quantity === "number" && Number.isFinite(obj.quantity) && obj.quantity > 0
      ? Math.min(99, Math.floor(obj.quantity))
      : 1;
    const variantLabel = typeof obj.variantLabel === "string" && obj.variantLabel.trim()
      ? obj.variantLabel.trim()
      : undefined;
    const unitPrice =
      typeof obj.unitPrice === "number" && Number.isFinite(obj.unitPrice) && obj.unitPrice >= 0
        ? roundCents(obj.unitPrice)
        : roundCents(product.price);
    const cartKey =
      typeof obj.cartKey === "string" && obj.cartKey.trim()
        ? obj.cartKey
        : variantLabel
          ? `${product.id}::${variantLabel}`
          : product.id;
    valid.push({ cartKey, product, quantity, variantLabel, unitPrice });
  }
  return valid;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkHero, setIsOverDarkHero] = useState(pathname === "/");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPageHiding, setIsPageHiding] = useState(false);

  const crumbEmitterRef = useRef<CrumbEmitter | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navSafetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasHydratedCartRef = useRef(false);

  // Hydrate cart once from sessionStorage with schema validation
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("awaken_cart_v2");
      if (saved) {
        setItems(parseSavedCart(saved));
      }
    } catch {
      try {
        sessionStorage.removeItem("awaken_cart_v2");
      } catch {
        // ignore
      }
    } finally {
      hasHydratedCartRef.current = true;
    }
  }, []);

  // Persist compact cart entries only after initial hydration completes
  useEffect(() => {
    if (!hasHydratedCartRef.current) return;
    try {
      const compact = items.map(({ cartKey, product, quantity, variantLabel, unitPrice }) => ({
        cartKey,
        productId: product.id,
        quantity,
        variantLabel,
        unitPrice,
      }));
      sessionStorage.setItem("awaken_cart_v2", JSON.stringify(compact));
    } catch {
      // ignore
    }
  }, [items]);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
      if (navSafetyTimerRef.current) clearTimeout(navSafetyTimerRef.current);
    };
  }, []);

  const scrollToHash = useCallback((hash: string) => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -110 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Reset UI drawers, hero state, and scroll (respecting cross-page #hash targets)
  useEffect(() => {
    setIsPageHiding(false);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setIsOverDarkHero(pathname === "/");
    if (navSafetyTimerRef.current) {
      clearTimeout(navSafetyTimerRef.current);
      navSafetyTimerRef.current = null;
    }

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      const t = setTimeout(() => scrollToHash(hash), 80);
      return () => clearTimeout(t);
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, scrollToHash]);

  // Manage body / Lenis scroll lock when drawers open
  useEffect(() => {
    const locked = isCartOpen || isMobileMenuOpen;
    if (locked) {
      lenisRef.current?.stop();
      document.body.style.overflowY = "hidden";
    } else {
      lenisRef.current?.start();
      document.body.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isCartOpen, isMobileMenuOpen]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 4200);
  }, []);

  const openCart = useCallback(() => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const toggleSearch = useCallback(() => {
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
    setIsSearchOpen((prev) => !prev);
  }, []);

  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const openMobileMenu = useCallback(() => {
    setIsSearchOpen(false);
    setIsCartOpen(false);
    setIsMobileMenuOpen(true);
  }, []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const addToCart = useCallback(
    (product: ProductItem, quantity = 1, variantLabel?: string, unitPrice?: number) => {
      const defaults = getDefaultVariant(product);
      const resolvedLabel = variantLabel !== undefined ? variantLabel : defaults.variantLabel;
      const resolvedPrice =
        typeof unitPrice === "number" && Number.isFinite(unitPrice)
          ? roundCents(unitPrice)
          : defaults.unitPrice;
      const cartKey = resolvedLabel ? `${product.id}::${resolvedLabel}` : product.id;

      setItems((prev) => {
        const existing = prev.find((i) => i.cartKey === cartKey);
        if (existing) {
          return prev.map((i) =>
            i.cartKey === cartKey
              ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
              : i
          );
        }
        return [
          ...prev,
          { cartKey, product, quantity, variantLabel: resolvedLabel, unitPrice: resolvedPrice },
        ];
      });
      setIsCartOpen(true);
    },
    []
  );

  const updateQuantity = useCallback((cartKey: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.cartKey !== cartKey));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.cartKey === cartKey ? { ...i, quantity: Math.min(99, quantity) } : i))
    );
  }, []);

  const removeItem = useCallback((cartKey: string) => {
    setItems((prev) => prev.filter((i) => i.cartKey !== cartKey));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const registerCrumbEmitter = useCallback((fn: CrumbEmitter | null) => {
    crumbEmitterRef.current = fn;
  }, []);

  const triggerCrumbsFromElement = useCallback((el: HTMLElement | null) => {
    if (!el || !crumbEmitterRef.current) return;
    const bound = el.getBoundingClientRect();
    const bg = window.getComputedStyle(el).backgroundColor || "#c28b8b";
    const x = bound.left + bound.width * 0.65;
    const y = bound.top + bound.height * 0.35;
    crumbEmitterRef.current(x, y, Math.max(bound.width, 44), bg);
  }, []);

  const registerLenis = useCallback((lenis: Lenis | null) => {
    lenisRef.current = lenis;
  }, []);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }
      if (href.startsWith("#")) {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
        scrollToHash(href);
        return;
      }

      // Parse target pathname & hash to avoid locking curtain on same-route hash/query links
      const [rawPath, rawHash] = href.split("#");
      const targetPath = (rawPath.split("?")[0] || "/").replace(/\/+$/, "") || "/";
      const currentPath = (pathname || "/").replace(/\/+$/, "") || "/";

      setIsMobileMenuOpen(false);
      setIsSearchOpen(false);

      if (targetPath === currentPath) {
        if (rawHash) {
          window.history.replaceState(null, "", `${window.location.pathname}#${rawHash}`);
          scrollToHash(`#${rawHash}`);
        } else if (lenisRef.current) {
          lenisRef.current.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        router.push(href);
        return;
      }

      if (navTimerRef.current) clearTimeout(navTimerRef.current);
      if (navSafetyTimerRef.current) clearTimeout(navSafetyTimerRef.current);

      setIsPageHiding(true);
      navTimerRef.current = setTimeout(() => {
        router.push(href);
      }, 420);
      // Safety reset in case navigation is cancelled or identical
      navSafetyTimerRef.current = setTimeout(() => {
        setIsPageHiding(false);
      }, 2500);
    },
    [pathname, router, scrollToHash]
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => roundCents(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)),
    [items]
  );

  const value = useMemo<StoreContextValue>(
    () => ({
      items,
      totalItems,
      subtotal,
      isCartOpen,
      isSearchOpen,
      isMobileMenuOpen,
      isOverDarkHero,
      toastMessage,
      openCart,
      closeCart,
      toggleSearch,
      closeSearch,
      openMobileMenu,
      closeMobileMenu,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      showToast,
      setIsOverDarkHero,
      registerCrumbEmitter,
      triggerCrumbsFromElement,
      registerLenis,
      scrollToHash,
      navigateWithTransition,
      isPageHiding,
    }),
    [
      items,
      totalItems,
      subtotal,
      isCartOpen,
      isSearchOpen,
      isMobileMenuOpen,
      isOverDarkHero,
      toastMessage,
      openCart,
      closeCart,
      toggleSearch,
      closeSearch,
      openMobileMenu,
      closeMobileMenu,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      showToast,
      registerCrumbEmitter,
      triggerCrumbsFromElement,
      registerLenis,
      scrollToHash,
      navigateWithTransition,
      isPageHiding,
    ]
  );

  return (
    <StoreContext.Provider value={value}>
      {children}
      <div className={`Popup ${toastMessage ? "Active" : ""}`} role="status" aria-live="polite">
        <span>{toastMessage}</span>
      </div>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

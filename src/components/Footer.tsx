"use client";

import React, { useState } from "react";
import { AWAKEN_BUSINESS } from "@/data/awakenData";
import { useStore } from "@/context/StoreContext";
import { BakeryDoodle, MagneticRippleWrapper } from "./MotionPrimitives";
import StickerSlapFooter from "@/components/ui/sticker-slap-footer";

export function Footer() {
  const { showToast } = useStore();
  const [emailTop, setEmailTop] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailTop.trim() || !emailTop.includes("@")) {
      showToast("Please enter a valid email address.");
      return;
    }
    showToast("Welcome to the Awaken Bakery family! Watch your inbox for weekly GF specials.");
    setEmailTop("");
  };

  return (
    <div className="relative z-[3]">
      {/* Awaken Bakery Signature Rounded Newsletter Card */}
      <section className="Section Newsletter_Section SectionPadded">
        <div className="Newsletter_Container">
          <div className="hidden md:block absolute -left-14 -top-12 w-32 h-32 pointer-events-none">
            <BakeryDoodle variant="cake-slice" className="w-full h-full" />
          </div>
          <div className="hidden md:block absolute -right-14 -bottom-10 w-36 h-36 pointer-events-none">
            <BakeryDoodle variant="cookies" className="w-full h-full" />
          </div>

          <h2>Be The First To Know</h2>
          <p className="text-center text-[#fcebd6]/95 max-w-md mb-6 text-base">
            New gluten-free flavors, weekly Bowling Green specials, holiday pre-order drops, and the occasional sweet surprise.
          </p>

          <form className="w-full max-w-md" onSubmit={handleSubscribe}>
            <div className="Newsletter__Inner">
              <input
                type="email"
                value={emailTop}
                onChange={(e) => setEmailTop(e.target.value)}
                placeholder="Email address"
                className="Form__Input"
                aria-label="Email address for newsletter"
                required
              />
              <MagneticRippleWrapper className="Form__Submit">
                <button type="submit">Join</button>
              </MagneticRippleWrapper>
            </div>
          </form>
        </div>
      </section>

      {/* Interactive Sticker Slap Footer — Adapted 100% for Awaken Bakery */}
      <StickerSlapFooter
        wordmark="AWAKEN"
        chatHref={AWAKEN_BUSINESS.phoneHref}
        chatLabel={AWAKEN_BUSINESS.phone}
        jobsLabel="explore & order"
        jobs={[
          { title: "full gf menu", href: "/menu" },
          { title: "cakes & custom", href: "/cakes" },
          { title: "take & bake + care", href: "/take-and-bake" },
          { title: "holiday & app", href: "/holiday" },
          { title: "our story", href: "/our-story" },
          { title: "faq & refunds", href: "/faq" },
        ]}
        officeLabel="visit downtown"
        address={[
          AWAKEN_BUSINESS.street,
          AWAKEN_BUSINESS.cityStateZip,
          "Tue–Thu 8–3 · Fri 8–4 · Sat 9–3",
        ]}
        mapLabel="Google Maps · Free Parking"
        mapHref={AWAKEN_BUSINESS.links.googleMaps}
        contactLabel="say hello"
        email={AWAKEN_BUSINESS.email}
        copiedLabel="copied, sweet!"
        note="*100% dedicated gluten-free kitchen · safe for celiac. A portion of every order supports high-risk & exploited youth across Kentucky."
        socials={[
          { kind: "instagram", href: AWAKEN_BUSINESS.links.instagram, label: "Awaken Bakery on Instagram" },
          { kind: "tiktok", href: AWAKEN_BUSINESS.links.tiktok, label: "Awaken Bakery on TikTok" },
        ]}
        stickers={[
          { kind: "burst", text: "gf!", label: "100% Gluten Free burst sticker" },
          { kind: "smiley", label: "Happy bakery smiley sticker" },
          { kind: "heart", label: "Celiac-safe heart sticker" },
          { kind: "daisy", label: "Sunny daisy sticker" },
          { kind: "bubble", text: "yum!", label: "Yum speech bubble sticker" },
          { kind: "bolt", label: "Fresh daily lightning sticker" },
        ]}
        credits={[
          { role: "bakery", name: "Awaken Bakery · Bowling Green, KY" },
          { role: "kitchen", name: "100% Dedicated Gluten-Free · Celiac Safe" },
          { role: "award", name: "Best of Bowling Green 2024 · 4.9★ Google" },
          { role: "founded by", name: "Tiana Post & Family (Est. 2020)" },
        ]}
        paper="#fcebd6"
        panel="#c28b8b"
        ink="#4f515e"
        cream="#fcebd6"
        accent="#c28b8b"
        fontSans="var(--text-font)"
        showTopBar={false}
        height="min(74svh, 660px)"
        wordmarkMaxHeight="48svh"
        className="pt-2"
      />
    </div>
  );
}

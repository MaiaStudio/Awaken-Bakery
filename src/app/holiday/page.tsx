"use client";

import React from "react";
import { Gift, Smartphone, Sparkles, Star } from "lucide-react";
import { AWAKEN_BUSINESS } from "@/data/awakenData";
import {
  MagneticRippleWrapper,
  RevealFade,
  RevealWords,
} from "@/components/MotionPrimitives";

export default function HolidayPage() {
  return (
    <div className="Page_Section SectionPadded">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Holiday Hero */}
        <div>
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-5"
            style={{ fontFamily: "var(--title-font)" }}
          >
            Seasonal Celebrations · 100% Celiac Safe
          </span>

          <RevealWords
            text="FROM A SEASONAL CRAVING TO FAMILY TRADITIONS"
            as="h1"
            className="SectionTitle mb-6 max-w-5xl"
          />

          <p className="text-lg text-[#4f515e] max-w-3xl leading-relaxed">
            We mix, roll, and bake every Halloween treat, Thanksgiving pie, stuffing pan, and Christmas confection in our dedicated gluten-free kitchen so nobody at your holiday table ever feels left out.
          </p>
        </div>

        {/* Thanksgiving & Christmas Arch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevealFade className="p-8 rounded-[500px_500px_3rem_3rem] border-4 border-[#c28b8b] bg-[#fcebd6] flex flex-col justify-between gap-6">
            <div>
              <div className="aspect-square rounded-[50%_50%_1.5rem_1.5rem] overflow-hidden mb-6 bg-[#f2dec4]">
                <img
                  src="/images/holiday-christmas.webp"
                  alt="Awaken Bakery Gluten-Free Christmas Pre-Orders"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-3"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Up Next · Christmas Pre-Orders
              </span>
              <h2
                className="text-4xl uppercase font-extrabold text-[#4f515e] mb-3"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Christmas Collection
              </h2>
              <p className="text-base text-[#4f515e]/85 leading-relaxed mb-4">
                Celebrate the season with festive treats, cinnamon roll breakfast pans, cookie platters, and gift-worthy gluten-free baking mixes for your table and gift list.
              </p>
              <ul className="space-y-2 text-sm font-semibold text-[#4f515e]">
                <li>• Launch: November 27 (Black Friday)</li>
                <li>• Order Deadline: Mid-December</li>
                <li>• Bakery Pickup: December 22–24</li>
              </ul>
            </div>

            <MagneticRippleWrapper className="bg-[#c28b8b] border-2 border-[#c28b8b] before:bg-[#4f515e] w-full">
              <a
                href={AWAKEN_BUSINESS.links.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 text-base font-extrabold uppercase tracking-wide text-[#fcebd6] text-center"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Preview Holiday Shop →
              </a>
            </MagneticRippleWrapper>
          </RevealFade>

          <RevealFade
            delay={0.18}
            className="p-8 rounded-[500px_500px_3rem_3rem] border-4 border-[#4f515e] bg-[#fcebd6] flex flex-col justify-between gap-6"
          >
            <div>
              <div className="aspect-square rounded-[50%_50%_1.5rem_1.5rem] overflow-hidden mb-6 bg-[#f2dec4]">
                <img
                  src="/images/holiday-thanksgiving.webp"
                  alt="Awaken Bakery Gluten-Free Thanksgiving Pies & Stuffing"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-[#4f515e] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-3"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Thanksgiving Favorites
              </span>
              <h2
                className="text-4xl uppercase font-extrabold text-[#4f515e] mb-3"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Thanksgiving Table
              </h2>
              <p className="text-base text-[#4f515e]/85 leading-relaxed mb-4">
                From flaky 9&quot; gluten-free pumpkin pies and dinner rolls to our 9×9 homemade stuffing pan. Missed the pre-order deadline? Give our bakery counter a call — we may still have a few holiday favorites available!
              </p>
              <p className="text-sm font-bold text-[#c28b8b]">
                Call {AWAKEN_BUSINESS.phone} to check walk-in availability.
              </p>
            </div>

            <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#c28b8b] w-full">
              <a
                href={AWAKEN_BUSINESS.phoneHref}
                className="py-4 text-base font-extrabold uppercase tracking-wide text-[#fcebd6] text-center"
                style={{ fontFamily: "var(--title-font)" }}
              >
                Call {AWAKEN_BUSINESS.phone}
              </a>
            </MagneticRippleWrapper>
          </RevealFade>
        </div>

        {/* The Awaken Bakery App Showcase */}
        <section
          id="awaken-app"
          className="rounded-[2.8rem] bg-[#c28b8b] text-[#fcebd6] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcebd6] text-[#4f515e] text-xs font-extrabold uppercase tracking-wider"
              style={{ fontFamily: "var(--title-font)" }}
            >
              <Smartphone size={14} /> The Awaken Bakery App
            </span>

            <h2
              className="text-4xl md:text-6xl uppercase font-extrabold leading-[0.9]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              ORDER FASTER. EARN REWARDS. GET 10% OFF.
            </h2>

            <p className="text-base md:text-lg text-[#fcebd6]/95 leading-relaxed">
              The easiest way to order ahead for pickup or DoorDash delivery, claim <strong>10% off your first purchase</strong>, earn 1 point per dollar, and unlock <strong>Double Points Wednesdays</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: Sparkles, text: "Order ahead & skip the Saturday line" },
                { icon: Gift, text: "10% off your 1st app order + birthday treat" },
                { icon: Star, text: "Double Points Wednesdays every week" },
                { icon: Smartphone, text: "First dibs on fresh bakes before sell-out" },
              ].map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.text}
                    className="flex items-center gap-3 bg-[#4f515e]/35 rounded-2xl p-4 text-sm font-medium"
                  >
                    <Icon size={20} className="text-[#fcebd6] flex-shrink-0" />
                    <span>{perk.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <MagneticRippleWrapper className="bg-[#fcebd6] border-2 border-[#fcebd6] before:bg-[#4f515e]">
                <a
                  href={AWAKEN_BUSINESS.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#4f515e] hover:text-[#fcebd6]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Download on App Store
                </a>
              </MagneticRippleWrapper>
              <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#fcebd6]">
                <a
                  href={AWAKEN_BUSINESS.links.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fcebd6] hover:text-[#4f515e]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Get it on Google Play
                </a>
              </MagneticRippleWrapper>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 rounded-[2.6rem] overflow-hidden border-8 border-[#4f515e] shadow-2xl">
              <img
                src="/images/app-mockup.jpg"
                alt="Awaken Bakery mobile ordering & rewards app"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

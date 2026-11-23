"use client";

import React, { useState } from "react";
import { Clock, Coffee, MapPin, ParkingCircle, Phone, ShieldCheck } from "lucide-react";
import { AWAKEN_BUSINESS } from "@/data/awakenData";
import { useStore } from "@/context/StoreContext";
import {
  MagneticRippleWrapper,
  RevealFade,
  RevealWords,
  TransitionLink,
} from "@/components/MotionPrimitives";

export default function ContactPage() {
  const { showToast } = useStore();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    topic: "General question",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message received! Our Bowling Green team will reply within 1–2 business days.");
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      topic: "General question",
      message: "",
    });
  };

  return (
    <div className="SectionPadded">
      {/* 60/40 Contact Form + Parallax Image Split */}
      <section className="Contact_Form_Section max-w-7xl mx-auto">
        <div className="Contact_Form_Container">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#c28b8b] text-[#fcebd6] text-xs font-extrabold uppercase tracking-wider mb-4"
            style={{ fontFamily: "var(--title-font)" }}
          >
            300 E Main Ave · Bowling Green, KY
          </span>

          <RevealWords text="WE'D LOVE TO HEAR FROM YOU" as="h1" className="SectionTitle mb-4" />

          <p className="text-base text-[#4f515e] max-w-xl leading-relaxed">
            Questions about celiac safety, custom celebration cakes, catering, or wholesale? Drop us a line below — or check our{" "}
            <TransitionLink href="/faq" className="underline font-bold text-[#c28b8b]">
              FAQ page
            </TransitionLink>{" "}
            for instant answers.
          </p>

          <form onSubmit={handleSubmit} className="Contact_Form">
            <input
              type="text"
              placeholder="FIRST NAME"
              aria-label="First name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="LAST NAME"
              aria-label="Last name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              aria-label="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              aria-label="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <div className="min-[901px]:col-span-2">
              <select
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                aria-label="What is this about?"
              >
                <option>General question</option>
                <option>Cake or custom order inquiry</option>
                <option>Catering / Corporate dessert order</option>
                <option>Press / media</option>
                <option>Employment</option>
                <option>Feedback</option>
              </select>
            </div>
            <div className="min-[901px]:col-span-2">
              <textarea
                placeholder="Tell us what you need..."
                aria-label="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <div className="min-[901px]:col-span-2 flex flex-wrap items-center gap-4">
              <MagneticRippleWrapper className="bg-[#4f515e] border-2 border-[#4f515e] before:bg-[#c28b8b]">
                <button
                  type="submit"
                  className="px-10 py-4 text-base font-extrabold uppercase tracking-wide text-[#fcebd6]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  Send Message
                </button>
              </MagneticRippleWrapper>
              <span className="text-xs text-[#4f515e]/75">
                Typical response time: 1–2 business days (Tue–Sat).
              </span>
            </div>
          </form>
        </div>

        <div className="Contact_Form_Image_Container">
          <img
            src="/awaken/images/storefront.webp"
            alt="Awaken Bakery storefront in downtown Bowling Green, KY"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Hours, Free Parking & First-Time Visitor Guide */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RevealFade className="p-7 rounded-[2.2rem] bg-[#c28b8b] text-[#fcebd6] space-y-3">
            <Clock size={26} className="text-[#fcebd6]" />
            <h2
              className="text-2xl uppercase font-extrabold"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Bakery Hours
            </h2>
            <ul className="space-y-1.5 text-sm">
              {AWAKEN_BUSINESS.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-2">
                  <span className="opacity-85">{h.days}</span>
                  <strong>{h.time}</strong>
                </li>
              ))}
            </ul>
          </RevealFade>

          <RevealFade delay={0.1} className="p-7 rounded-[2.2rem] bg-[#4f515e] text-[#fcebd6] space-y-3">
            <ParkingCircle size={26} className="text-[#c28b8b]" />
            <h2
              className="text-2xl uppercase font-extrabold"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Free Parking
            </h2>
            <p className="text-sm leading-relaxed opacity-90">
              Park free right in front of our Awaken Bakery signs in our downtown lot during business hours — just ask at the counter!
            </p>
            <a
              href={AWAKEN_BUSINESS.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold text-[#fcebd6] underline"
              style={{ fontFamily: "var(--title-font)" }}
            >
              <MapPin size={13} /> Open Directions →
            </a>
          </RevealFade>

          <RevealFade delay={0.18} className="p-7 rounded-[2.2rem] border-4 border-[#c28b8b] bg-[#fcebd6] space-y-3">
            <Coffee size={26} className="text-[#c28b8b]" />
            <h2
              className="text-2xl uppercase font-extrabold text-[#4f515e]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              Coffee &amp; Seating
            </h2>
            <p className="text-sm leading-relaxed text-[#4f515e]/85">
              Cozy café with espresso, breakfast until 10:30am, lunch until 30 min before close, free WiFi, and step-free wheelchair accessibility.
            </p>
          </RevealFade>

          <RevealFade delay={0.26} className="p-7 rounded-[2.2rem] bg-[#fff7ec] border-4 border-[#4f515e] text-[#4f515e] space-y-3">
            <ShieldCheck size={26} className="text-[#c28b8b]" />
            <h2
              className="text-2xl uppercase font-extrabold"
              style={{ fontFamily: "var(--title-font)" }}
            >
              No Need to Ask
            </h2>
            <p className="text-sm leading-relaxed">
              Everything inside our building is 100% gluten free and celiac safe. Order anything in the case with total peace of mind.
            </p>
            <a
              href={AWAKEN_BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-extrabold underline text-[#c28b8b]"
              style={{ fontFamily: "var(--title-font)" }}
            >
              <Phone size={14} /> {AWAKEN_BUSINESS.phone}
            </a>
          </RevealFade>
        </div>
      </section>
    </div>
  );
}

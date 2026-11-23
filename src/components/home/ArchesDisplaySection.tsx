import React from "react";
import { ARCH_GALLERY } from "@/data/awakenData";
import { BakeryDoodle, RevealWords } from "../MotionPrimitives";

const DOODLE_VARIANTS = ["cookies", "cake-slice", "cupcake", "bread"] as const;

export function ArchesDisplaySection() {
  const repeatedGallery = [...ARCH_GALLERY, ...ARCH_GALLERY];
  const half = ARCH_GALLERY.length;

  return (
    <section className="Section Arches_Display_Section Parallax_Wrapper">
      <div className="px-[4vw] text-center">
        <RevealWords
          text="EVERY MOMENT DESERVES REAL FOOD"
          as="h2"
          className="SectionTitle Centered"
        />
      </div>

      <div className="Arches_Display_Container">
        <div className="Arches_Display_Inner">
          {repeatedGallery.map((item, idx) => {
            const isDuplicate = idx >= half;
            return (
              <React.Fragment key={`${item.src}-${idx}`}>
                <div
                  className={`Arch_Card ${item.tall ? "Tall" : "Short"}`}
                  aria-hidden={isDuplicate || undefined}
                >
                  <img
                    src={item.src}
                    alt={isDuplicate ? "" : item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {idx % 2 === 1 && (
                  <div className="Arches_Display_Icon" aria-hidden="true">
                    <BakeryDoodle
                      variant={DOODLE_VARIANTS[Math.floor(idx / 2) % DOODLE_VARIANTS.length]}
                      className="w-full h-full"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

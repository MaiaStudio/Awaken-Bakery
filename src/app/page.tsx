import { HeroSection } from "@/components/home/HeroSection";
import { TitleTextSection } from "@/components/home/TitleTextSection";
import { CollectionDisplaySection } from "@/components/home/CollectionDisplaySection";
import { ArchesDisplaySection } from "@/components/home/ArchesDisplaySection";
import { CollectionsBrowserSection } from "@/components/home/CollectionsBrowserSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CollectionsCtaSection } from "@/components/home/CollectionsCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TitleTextSection />
      <CollectionDisplaySection />
      <ArchesDisplaySection />
      <CollectionsBrowserSection />
      <TestimonialsSection />
      <CollectionsCtaSection />
    </>
  );
}

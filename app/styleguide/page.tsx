import type { Metadata } from "next";
import ColorsSection from "./sections/ColorsSection";
import TypographySection from "./sections/TypographySection";
import ButtonsSection from "./sections/ButtonsSection";
import InputsSection from "./sections/InputsSection";
import CardsSection from "./sections/CardsSection";
import BadgesSection from "./sections/BadgesSection";

export const metadata: Metadata = {
  title: "Styleguide — ShopaShop",
  description: "Design tokens and UI component reference for ShopaShop.",
};

export default function StyleguidePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
      <header className="space-y-2 border-b border-[--border] pb-10">
        <p className="text-sm font-medium tracking-widest uppercase text-[--accent]">
          ShopaShop
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Styleguide</h1>
        <p className="text-[--foreground-muted] max-w-xl">
          A living reference of design tokens, base element styles, and reusable
          UI component classes used across the project.
        </p>
      </header>

      <ColorsSection />
      <TypographySection />
      <ButtonsSection />
      <InputsSection />
      <CardsSection />
      <BadgesSection />
    </main>
  );
}

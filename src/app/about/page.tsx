"use client";

import IntroSection from "@/app/intro/page";
import PaintingsSection from "@/app/painting/page";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-24">

      <div className="container mx-auto px-6 lg:px-12">
        <IntroSection />
      </div>

      <PaintingsSection />

    </main>
  );
}

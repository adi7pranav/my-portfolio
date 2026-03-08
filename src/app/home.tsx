"use client";

import Intro from "@/app/intro/page";

export default function HomePage() {
  return (
    <main className="relative min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-6xl">
        <Intro />
      </div>
    </main>
  );
}

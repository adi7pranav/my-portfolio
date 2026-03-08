"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";

export default function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="relative w-full sm:w-[90%] lg:w-[75%] mx-auto">

      {/* progress line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-[30px] top-0 w-[4px] h-full origin-top bg-blue-950 dark:bg-white"
      />

      <ul className="flex flex-col gap-10">
        {children}
      </ul>

    </div>
  );
}

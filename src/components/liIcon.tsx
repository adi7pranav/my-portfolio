"use client";
import React, { useEffect, useState, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface LiIconProps {
  reference: RefObject<HTMLLIElement | null>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });

  const scaledProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Force re-render after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {/* Vertical Line */}
      <motion.div
        style={{ scaleY: mounted ? scaledProgress : 0 }}
        className="absolute left-[25px] md:left-[75px] lg:left-[95px] top-0 w-[4px] h-full bg-blue-950 origin-top dark:bg-white"
      />

      {/* Icon */}
      <figure className="absolute left-[-10px] md:left-[40px] lg:left-[60px] stroke-dark z-10">
        <svg width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" className="stroke-blue-950 stroke-1 fill-none" />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            className="stroke-[5px] fill-white"
            style={{ pathLength: mounted ? scrollYProgress : 0 }}
          />
          <circle cx="50" cy="50" r="10" className="stroke-1 animate-pulse fill-blue-950" />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcon;

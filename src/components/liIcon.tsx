"use client";
import React, { RefObject } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Define Props for LiIcon
interface LiIconProps {
  reference: RefObject<HTMLLIElement | null>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });

  const scaledProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      {/* Vertical Line */}
      <motion.div
        style={{ scaleY: scaledProgress }}
        className="absolute left-[30px]  md:left-[80px] lg:left-[110px] top-0 w-[4px] h-full bg-blue-950 origin-top dark:bg-white"
      />

      {/* Icon */}
      <figure className="absolute left-[-5px] md:left-[45] lg:left-[75px] stroke-dark z-10">
        <svg width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" className="stroke-blue-950 stroke-1 fill-none" />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            className="stroke-[5px] fill-white"
            style={{ pathLength: scrollYProgress }}
          />
          <circle cx="50" cy="50" r="10" className="stroke-1 animate-pulse fill-blue-950" />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcon;

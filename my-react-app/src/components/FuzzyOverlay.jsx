import { motion } from "framer-motion";
import React, { useState } from 'react';

const FuzzyOverlay = ({isEnabled = true }) => {
  
  return (
    <div>
    {isEnabled && (<motion.div
      initial={{ transform: "translateX(-9%) translateY(-5%)" }}
      animate={{
        transform: "translateX(9%) translateY(5%)",
      }}
      transition={{
        repeat: Infinity,
        duration: .1,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[200%] opacity-[15%]"
    />)}
    </div>
  );
};
export default FuzzyOverlay
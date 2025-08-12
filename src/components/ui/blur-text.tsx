"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
}

const defaultVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

export function BlurText({
  text,
  className,
  variant = defaultVariants,
  duration = 1,
  delay = 0,
}: BlurTextProps) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      variants={variant}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {text}
    </motion.h1>
  );
}

export function BlurWords({
  text,
  className,
  variant = defaultVariants,
  duration = 1,
  delay = 0,
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <div className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          transition={{
            duration,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
          variants={variant}
          className="mr-2 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function BlurLetters({
  text,
  className,
  variant = defaultVariants,
  duration = 0.8,
  delay = 0,
}: BlurTextProps) {
  const letters = text.split("");

  return (
    <div className={cn("flex justify-center", className)}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          transition={{
            duration,
            delay: delay + index * 0.05,
            ease: "easeOut",
          }}
          variants={variant}
          className={letter === " " ? "mr-2" : ""}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}

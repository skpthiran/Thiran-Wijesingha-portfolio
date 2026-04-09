import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface MarqueeProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
  speed?: number;
}

export function Marquee({ text, direction = "left", className, speed = 20 }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap w-full", className)}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
      </motion.div>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 2,
      },
      {
        duration: 5,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  return (
    <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="text-white opacity-0"
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
}; 
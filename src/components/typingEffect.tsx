import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export function TypingEffect({
  text = "Typing Effect",
  className,
  delay = 0,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end 0.8"],
  });

  const words = text.split(" ");
  const numWords = words.length;

  const [visibleWordCount, setVisibleWordCount] = useState(0);

  useEffect(() => {
    const updateVisibleWordCount = () => {
      const progress = scrollYProgress.get();
      const count = Math.min(
        Math.max(0, Math.ceil(progress * numWords)),
        numWords
      );
      setVisibleWordCount(count);
    };

    const unsubscribe = scrollYProgress.on("change", updateVisibleWordCount);

    updateVisibleWordCount();

    return () => unsubscribe();
  }, [scrollYProgress, numWords, words]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleWordCount ? 1 : 0,
            transition: "opacity 0.15s linear",
            transitionDelay: `${delay}s`,
          }}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
}

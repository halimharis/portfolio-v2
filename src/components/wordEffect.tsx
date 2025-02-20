import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  UseScrollOptions,
} from "framer-motion";
import { useRef } from "react";

interface IParagraph {
  paragraph: string;
  className?: string;
  scrollOptions?: UseScrollOptions;
}

export default function Paragraph({
  paragraph,
  className,
  scrollOptions = {
    offset: ["0.6 end", "1.7 end"],
  },
}: IParagraph) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    ...scrollOptions,
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={`flex flex-wrap text-black leading-none  max-w-7xl  ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface IWord {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}

const Word = ({ children, progress, range }: IWord) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-3 mt-3 ">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface IChar {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}

const Char = ({ children, progress, range }: IChar) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        className="transition-all duration-100 ease-linear"
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};

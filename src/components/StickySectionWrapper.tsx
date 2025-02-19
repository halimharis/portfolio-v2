import { useInView } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function StickySectionWrapper({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    if (isInView && ref.current !== null) {
      lenis?.scrollTo(ref.current);
    }
  }, [isInView, lenis]);

  return (
    <section
      id="section"
      ref={ref}
      className={`h-fullHeight sticky top-0 ${className}`}
    >
      {children}
    </section>
  );
}

export default StickySectionWrapper;

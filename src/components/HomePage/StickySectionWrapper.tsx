import { useInView } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  children: React.ReactNode;
  className?: string;
  snapScrollId?: string;
}

function StickySectionWrapper({ children, className, snapScrollId }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  const isInView = useInView(ref, { amount: 0.8 });

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (isInView && ref.current !== null && !isSmallScreen && snapScrollId) {
      lenis?.scrollTo(`#${snapScrollId}`);
    }
  }, [isInView, lenis, isSmallScreen, ref, snapScrollId]);

  return (
    <section
      id={snapScrollId}
      ref={ref}
      className={`h-fullHeight sticky top-0 ${className}`}
    >
      {children}
    </section>
  );
}

export default StickySectionWrapper;

interface Props {
  children: React.ReactNode;
  className?: string;
  snapScrollId?: string;
}

function StickySectionWrapper({ children, className }: Props) {
  return (
    <section className={`h-fullHeight sticky top-0 ${className}`}>
      {children}
    </section>
  );
}

export default StickySectionWrapper;

interface Props {
  children: React.ReactNode;
  className?: string;
  snapScrollId?: string;
}

function StickySectionWrapper({ children, className }: Props) {
  return <section className={`h-fullHeight ${className}`}>{children}</section>;
}

export default StickySectionWrapper;

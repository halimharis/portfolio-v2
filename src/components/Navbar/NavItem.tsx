import { useLenis } from "lenis/react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  href: string;
  label: string;
  isWhite?: boolean;
}

function NavItem({ href, label, isWhite }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate(); // Gunakan useNavigate
  const lenis = useLenis();

  const isActive = (path: string) => pathname === path;

  function getClassNames() {
    const baseClasses = "block px-5 py-6 transition-colors duration-300";
    const activeClasses = isWhite
      ? "bg-black text-white"
      : "bg-white text-black";
    const inactiveClasses = isWhite
      ? "hover:bg-neutral-200 text-black"
      : "hover:bg-neutral-600 text-white";

    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (lenis) {
      lenis.scrollTo("top", {
        duration: 0.5,
        onComplete: () => {
          navigate(href, {
            viewTransition: true,
          });
        },
      });
    }
  };

  return (
    <li>
      <a href={href} onClick={handleClick} className={getClassNames()}>
        {label}
      </a>
    </li>
  );
}

export default NavItem;

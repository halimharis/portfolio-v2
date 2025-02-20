import { useLocation } from "react-router-dom";

interface Props {
  href: string;
  label: string;
  isWhite?: boolean;
}

function NavItem({ href, label, isWhite }: Props) {
  const { pathname } = useLocation();

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

  return (
    <li>
      <a href={href} className={getClassNames()}>
        {label}
      </a>
    </li>
  );
}

export default NavItem;

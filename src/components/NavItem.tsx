import { useLocation } from "react-router-dom";

interface Props {
  href: string;
  label: string;
}

function NavItem({ href, label }: Props) {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <li>
      <a
        href={href}
        className={`block px-5 py-6 transition-colors duration-300   ${
          isActive(href)
            ? "bg-white text-black"
            : "hover:bg-neutral-600 text-white"
        }`}
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;

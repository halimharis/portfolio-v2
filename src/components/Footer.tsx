import { useLocation } from "react-router-dom";
import { PATH } from "../constants";

export default function Footer() {
  const { pathname } = useLocation();

  const isWhite = pathname === PATH.WORKS;

  return (
    <div
      className={`relative h-[400px] ${isWhite ? "bg-black" : ""}`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[400px] w-full flex items-center justify-center ">
        <div className="flex flex-col gap-2 max-md:px-6 font-oswald">
          <span
            className={`font-oswald text-6xl max-md:text-3xl text-center ${isWhite ? "text-white" : "text-black"}`}
          >
            KNOW MORE ABOUT ME
          </span>
          <div
            className={`w-full h-1 ${isWhite ? "bg-white" : "bg-black"}`}
          ></div>
          <div className="flex justify-between max-md:flex-wrap max-sm:text-sm">
            {Object.entries(PATH).map(([key, value]) => (
              <FooterLinks
                key={key}
                label={key}
                href={value}
                isWhite={isWhite}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface IFooterLinks {
  label: string;
  href: string;
  isWhite: boolean;
}

const FooterLinks = ({ label, href, isWhite }: IFooterLinks) => {
  return (
    <a
      className={`${isWhite ? "hover:text-black hover:bg-white text-white" : "hover:text-white hover:bg-black text-black"} transition-all duration-300 ease-linear px-2`}
      href={href}
    >
      {label}
    </a>
  );
};

import { PATH } from "../constants";

export default function Footer() {
  return (
    <div
      className="relative h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[400px] w-full flex items-center justify-center ">
        <div className="flex flex-col gap-2 max-md:px-6 font-oswald">
          <span className="font-oswald text-6xl max-md:text-3xl text-center">
            KNOW MORE ABOUT ME
          </span>
          <div className="w-full h-1 bg-black"></div>
          <div className="flex justify-between max-md:flex-wrap max-sm:text-sm">
            <a
              className="hover:text-white hover:bg-black transition-all duration-300 ease-linear px-2"
              href={PATH.PROFILE}
            >
              PROFILE
            </a>
            <a
              className="hover:text-white hover:bg-black transition-all duration-300 ease-linear px-2"
              href={PATH.JOURNEY}
            >
              MY JOURNEY
            </a>
            <a
              className="hover:text-white hover:bg-black transition-all duration-300 ease-linear px-2"
              href={PATH.PROJECT}
            >
              MY PROJECT
            </a>
            <a
              className="hover:text-white hover:bg-black transition-all duration-300 ease-linear px-2"
              href={PATH.CONTACT}
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

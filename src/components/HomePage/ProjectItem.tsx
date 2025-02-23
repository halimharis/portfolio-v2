interface Props {
  src: string;
}

function ProjectItem({ src }: Props) {
  return (
    <div className="basis-full overflow-hidden hover:scale-110 hover:z-10 transition-all duration-300 ">
      <div className="relative group group-hover/items:hover:blur-none group-hover/items:blur-xs overflow-hidden duration-700 transition-all">
        <div className="font-onest absolute w-full h-full z-10 lg:bg-leftToRight backdrop-blur-sm  lg:backdrop-blur-none duration-300 delay-300 ease-linear">
          <div className="flex md:p-12 sm:p-8 p-6 gap-2 text-black flex-col w-full h-full group-hover:opacity-100 lg:opacity-0 opacity-100 transition-all delay-75 group-hover:delay-700 duration-100">
            <span className="font-oswald font-bold md:text-3xl text-2xl">
              RAIZ-APP
            </span>
            <span className="sm:text-sm text-xs">
              Australia’s #1 investment app. Invest spare change automatically
              from everyday purchases into a diversified portfolio.
            </span>
            <button className="mt-auto self-end cursor-pointer font-bold bg-black text-white px-4 py-1.5 text-sm hover:scale-105 transition-all duration-300">
              Open Site &nbsp; &#8250;
            </button>
          </div>
        </div>
        <img
          className="h-80 lg:grayscale-100 w-full object-cover group-hover:grayscale-0 grayscale-75  transition-all duration-300"
          src={src}
        ></img>
      </div>
    </div>
  );
}

export default ProjectItem;

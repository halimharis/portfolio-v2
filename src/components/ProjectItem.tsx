interface Props {
  src: string;
}

function ProjectItem({ src }: Props) {
  return (
    <div className="basis-full overflow-hidden hover:scale-110 hover:z-10 transition-all duration-300 hover:rounded-sm">
      <div className="relative group group-hover/items:hover:blur-none group-hover/items:blur-xs overflow-hidden duration-700 transition-all">
        <div className="absolute w-full h-full bg-transparent z-10 bg-leftToRight duration-300 delay-300 ease-linear">
          <div className="flex p-12 gap-2 text-black flex-col w-full h-full group-hover:opacity-100 opacity-0 transition-all delay-75 group-hover:delay-700 duration-100">
            <span className="font-oswald font-bold text-3xl">RAIZ-APP</span>
            <span className="font-onest">
              Australia’s #1 investment app. Invest spare change automatically
              from everyday purchases into a diversified portfolio.
            </span>
            <button className="mt-auto self-end cursor-pointer">
              Open Site
            </button>
          </div>
        </div>
        <img
          className="h-80 grayscale w-full object-cover group-hover:grayscale-0 transition-all duration-300"
          src={src}
        ></img>
      </div>
    </div>
  );
}

export default ProjectItem;

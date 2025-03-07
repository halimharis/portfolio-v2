export interface IWorkItem {
  project: string;
  field: string;
  year: string | number;
}

function WorkItem({ project, field, year }: IWorkItem) {
  return (
    <div className="cursor-pointer grid grid-cols-12 w-full font-onest py-8 border-b border-neutral-300 group text-xl lg:bg-leftToRight-black transition-all duration-300 ease-out hover:text-white max-md:text-base">
      <span className="group-hover:-translate-x-4 transition-transform duration-500 col-span-6 col-start-2 line-clamp-1">
        {project}
      </span>
      <span className="group-hover:-translate-x-4 transition-transform duration-500 col-span-3 max-md:hidden">
        {field}
      </span>
      <span className="group-hover:-translate-x-4 transition-transform duration-500 col-span-1 max-md:col-start-9">
        {year}
      </span>
    </div>
  );
}

export default WorkItem;

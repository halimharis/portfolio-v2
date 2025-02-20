export interface IWorkItem {
  client: string;
  field: string;
  year: string | number;
}

function WorkItem({ client, field, year }: IWorkItem) {
  return (
    <div className="grid grid-cols-12 w-full font-onest py-8 border-b group border-black text-xl bg-leftToRight-black transition-all duration-300 ease-out hover:text-white">
      <span className="group-hover:-translate-x-4 transition-transform duration-500 col-span-6 col-start-2">
        {client}
      </span>
      <span className="group-hover:-translate-x-4 transition-transform duration-500 col-span-3">
        {field}
      </span>
      <span className="group-hover:-translate-x-4 transition-transform duration-500 col-span-1">
        {year}
      </span>
    </div>
  );
}

export default WorkItem;

import { WORKS } from "../constants";
import WorkItem from "./WorkItem";

function WorkList() {
  return (
    <div className="flex text-black w-full lg:pt-32 pt-16 flex-col ">
      <div className="grid grid-cols-12 w-full font-onest py-8 border-b text-sm font-bold border-black ">
        <span className="col-span-6 col-start-2 ">PROJECT</span>
        <span className="col-span-3 max-md:hidden">FIELD</span>
        <span className="col-span-1 max-md:col-start-9">YEAR</span>
      </div>
      {WORKS.map((work, index) => (
        <WorkItem {...work} key={index} />
      ))}
    </div>
  );
}

export default WorkList;

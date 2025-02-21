import WorkList from "./WorkList";

function Journey() {
  return (
    <div className="bg-white  flex">
      <section className="flex px-48 py-52 max-xl:px-0 max-xl:py-24 flex-col w-full">
        <h1 className="font-onest text-7xl/tight max-xl:text-4xl px-6">
          Driven by Passion, <br />
          Defined by Results
        </h1>
        <WorkList />
      </section>
    </div>
  );
}

export default Journey;

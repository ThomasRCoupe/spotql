import QueryBuilder from "../query-builder/QueryBuilder";

const QueryPage = () => {
  return (
    <div className="w-full h-full">
      <section className="mb-2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">SpotQL</h1>
        <h2 className="text-light-grey">Query Editor</h2>
      </section>

      <section className="">
        <QueryBuilder />
      </section>
    </div>
  );
};

export default QueryPage;

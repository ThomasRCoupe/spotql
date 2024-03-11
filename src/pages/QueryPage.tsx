import { Button } from "../design-system/Button";
import QueryBuilder from "../query-builder/QueryBuilder";
import { useQueryReducer } from "../query-builder/useQueryReducer";
import { isQueryValid } from "../query-builder/validation";

const QueryPage = () => {
  const [query, dispatch] = useQueryReducer({ sources: [] });
  const isValid = isQueryValid(query);

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">SpotQL</h1>
        <h2 className="text-light-grey">Query Editor</h2>
      </section>
      <section className="flex justify-between">
        <QueryBuilder query={query} dispatch={dispatch} />
        <Button variant="primary" disabled={!isValid} onClick={() => {}}>
          Run
        </Button>
      </section>
      <section></section>
    </div>
  );
};

export default QueryPage;

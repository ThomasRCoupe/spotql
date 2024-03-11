import { Button } from "../../design-system/Button";
import Panel from "../../design-system/Panel";
import QueryBuilder from "./QueryBuilder";
import { useQueryReducer } from "./useQueryReducer";
import { isQueryValid } from "./validation";

const QueryPage = () => {
  const [query, dispatch] = useQueryReducer({ sources: [] });
  const isValid = isQueryValid(query);

  return (
    <>
      <Panel>
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
        </div>
      </Panel>
      <Panel>
        <div className="w-full h-96 flex flex-col gap-2"></div>
      </Panel>
    </>
  );
};

export default QueryPage;

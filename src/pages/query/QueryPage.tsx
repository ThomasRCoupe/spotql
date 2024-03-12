import { useState } from "react";
import { Button } from "../../design-system/Button";
import Panel from "../../design-system/Panel";
import QueryBuilder from "./QueryBuilder";
import { Query } from "./types";
import { useQueryDraftReducer } from "./useQueryReducer";
import { convertDraftToQuery, isQueryDraftValid } from "./validation";
import QueryResults from "./QueryResults";

const QueryPage = () => {
  const [draftQuery, dispatch] = useQueryDraftReducer();
  const [query, setQuery] = useState<Query>();
  const isDraftValid = isQueryDraftValid(draftQuery);

  return (
    <>
      <Panel>
        <div className="w-full h-full flex flex-col gap-2">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">SpotQL</h1>
            <h2 className="text-light-grey">Query Editor</h2>
          </section>
          <section className="flex justify-between">
            <QueryBuilder query={draftQuery} dispatch={dispatch} />
            <Button
              variant="primary"
              disabled={!isDraftValid}
              onClick={() => {
                setQuery(convertDraftToQuery(draftQuery));
              }}
            >
              Run
            </Button>
          </section>
        </div>
      </Panel>
      {query && (
        <Panel>
          <QueryResults query={query} />
        </Panel>
      )}
    </>
  );
};

export default QueryPage;

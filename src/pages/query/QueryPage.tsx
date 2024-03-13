import { useState } from "react";
import Button from "../../design-system/Button";
import Panel from "../../design-system/Panel";
import QueryBuilder from "./QueryBuilder";
import { Query } from "./types";
import { useQueryDraftReducer } from "./hooks/useQueryReducer";
import { convertDraftToQuery, isQueryDraftValid } from "./utils/validation";
import QueryResults from "./QueryResults";

const QueryPage = () => {
  const [draftQuery, dispatch] = useQueryDraftReducer();
  const [queryToExecute, setQueryToExecute] = useState<Query>();
  const isDraftValid = isQueryDraftValid(draftQuery);

  return (
    <>
      <Panel>
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">SpotQL</h1>
          <h2 className="text-light-grey">Query Builder</h2>
          <QueryBuilder query={draftQuery} dispatch={dispatch} />
        </div>
      </Panel>
      <Button
        variant="primary"
        disabled={!isDraftValid}
        onClick={() => {
          setQueryToExecute(convertDraftToQuery(draftQuery));
        }}
      >
        Run
      </Button>
      {queryToExecute && <QueryResults query={queryToExecute} />}
    </>
  );
};

export default QueryPage;

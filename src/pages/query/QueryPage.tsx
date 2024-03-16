import Button from "../../design-system/Button";
import Panel from "../../design-system/Panel";
import QueryBuilder from "./QueryBuilder";
import { useQueryDraftReducer } from "./hooks/useQueryReducer";
import { convertDraftToQuery, isQueryDraftValid } from "./utils/validation";
import QueryResults from "./QueryResults";
import useQueryResults from "./hooks/useQueryResults";

const QueryPage = () => {
  const [draftQuery, dispatch] = useQueryDraftReducer();
  const isDraftValid = isQueryDraftValid(draftQuery);

  const { tracks, isLoading, runQuery } = useQueryResults();

  const handleRunQuery = () => {
    const validQuery = convertDraftToQuery(draftQuery);
    if (!validQuery) {
      console.error("Query is not valid");
      return;
    }
    runQuery(validQuery);
  };

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
        onClick={handleRunQuery}
      >
        Run
      </Button>
      {tracks && !isLoading && <QueryResults tracks={tracks} />}
    </>
  );
};

export default QueryPage;

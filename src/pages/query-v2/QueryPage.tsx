import Panel from "../../design-system/Panel";
import QueryClause from "./builder/QueryClause";
import { useClauseReducer } from "./builder/hooks/useClauseReducer";

const QueryPageV2 = () => {
  const [clause, dispatch] = useClauseReducer();

  return (
    <>
      <Panel>
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">SpotQL</h1>
          <h2 className="text-light-grey">Query Builder</h2>
          <QueryClause
            clause={clause}
            onSelectorChange={(selector) =>
              dispatch({ type: "selector-change", selector })
            }
          />
        </div>
      </Panel>
    </>
  );
};

export default QueryPageV2;

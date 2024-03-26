import Panel from "../../design-system/Panel";
import QueryClause from "./builder/QueryClause";
import { useQueryReducer } from "./builder/hooks/useQueryReducer";

const QueryPageV2 = () => {
  const [query, dispatch] = useQueryReducer();

  return (
    <>
      <Panel>
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">SpotQL</h1>
          <h2 className="text-light-grey">Query Builder</h2>
          {query.clauses.map((clause, index) => (
            <QueryClause
              key={index}
              clause={clause}
              onSelectorChange={(selector) =>
                dispatch({ type: "selector-change", selector, index })
              }
              onSourceChange={(source) =>
                dispatch({ type: "source-change", source, index })
              }
            />
          ))}
        </div>
      </Panel>
    </>
  );
};

export default QueryPageV2;

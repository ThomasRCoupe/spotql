import Panel from "../../design-system/Panel";
import ClauseWords from "./ClauseWords";

const QueryPageV2 = () => {
  return (
    <>
      <Panel>
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">SpotQL</h1>
          <h2 className="text-light-grey">Query Builder</h2>
          <ClauseWords />
        </div>
      </Panel>
    </>
  );
};

export default QueryPageV2;

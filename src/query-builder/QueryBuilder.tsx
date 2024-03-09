import { Command } from "./components/Command";
import { CommandPlaceholder } from "./components/CommandPlaceholder";
import { CommandWithArgument } from "./components/CommandWithArgument";

export const QueryBuilder = () => (
  <>
    <div className="flex gap-2">
      <Command command="Get All" />
      <CommandWithArgument command="Get Top" argumentName="amount" />
      <CommandPlaceholder command="Source" />
    </div>
  </>
);

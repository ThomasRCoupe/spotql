import { CommandSuggestions } from "./CommandSuggestions";

export const QueryEditor = () => {
  return (
    <>
      <div className="p-4 rounded-full bg-black" />
      <CommandSuggestions commands={["GET ALL", "SHUFFLE"]} />
    </>
  );
};

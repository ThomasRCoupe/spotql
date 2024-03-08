export interface CommandSuggestionsProps {
  textBeforeCursor: string;
}

export const CommandSuggestions = ({
  textBeforeCursor,
}: CommandSuggestionsProps) => {
  return <div>{textBeforeCursor}</div>;
};

interface SuggestionListProps {
  children: React.ReactNode;
}

const SuggestionList = ({ children }: SuggestionListProps) => (
  <div className="flex flex-col rounded-2xl bg-medium-grey">{children}</div>
);

export default SuggestionList;

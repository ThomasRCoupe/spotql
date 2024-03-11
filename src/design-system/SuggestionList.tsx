interface SuggestionListProps {
  children: React.ReactNode;
}

const SuggestionList = ({ children }: SuggestionListProps) => (
  <div className="max-h-64 overflow-y-auto rounded-2xl bg-medium-grey text-white">
    <div className="flex flex-col">{children}</div>
  </div>
);

export default SuggestionList;

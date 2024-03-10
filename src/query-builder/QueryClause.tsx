import { useState } from "react";
import { Clause, ClauseType } from "./types";
import { useFloating } from "@floating-ui/react";
import ClauseSwitch from "./ClauseSwitch";
import { getVariants } from "./variants";

export interface ClauseSuggestionProps {
  type: ClauseType;
  clause?: Clause;
  onChange: (clause: Clause) => void;
}

const QueryClause = ({
  type,
  clause,
  onChange: handleChange,
}: ClauseSuggestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const handleClick = () => setIsOpen((current) => !current);

  const handleSuggestionClick = (newClause: Clause) => {
    setIsOpen(false);
    handleChange(newClause);
  };

  const suggestions = getVariants(type);

  return (
    <>
      <div ref={refs.setReference}>
        <ClauseSwitch
          type={type}
          clause={clause}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      <div
        className="w-32 p-4 flex flex-col gap-2 rounded-lg bg-medium-grey"
        ref={refs.setFloating}
        style={floatingStyles}
      >
        {suggestions.map((suggestion) => (
          <button
            className="hover:bg-white/10"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion.variant}
          </button>
        ))}
      </div>
    </>
  );
};

export default QueryClause;

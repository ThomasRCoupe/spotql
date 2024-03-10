import { useState } from "react";
import { Clause, ClauseType } from "./types";
import { useFloating, offset } from "@floating-ui/react";
import ClauseSwitch from "./ClauseSwitch";
import { getVariants } from "./variants";
import clsx from "clsx";

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
    placement: "bottom-start",
    middleware: [offset(8)],
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
      {isOpen && (
        <div
          className="w-32 rounded-2xl bg-medium-grey"
          ref={refs.setFloating}
          style={floatingStyles}
        >
          {suggestions.map((suggestion, index) => (
            <button
              className={clsx(
                "w-full px-4 hover:bg-white/10 text-left",
                index === 0 ? "pt-2 rounded-t-2xl" : "pt-1",
                index === suggestions.length - 1 ? "pb-2 rounded-b-2xl" : "pb-1"
              )}
              key={suggestion.variant}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.displayName}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default QueryClause;

import { useState } from "react";
import { Bubble, BubbleVariant } from "../design-system/Bubble";
import { Clause, ClauseType } from "./types";
import { useFloating, offset } from "@floating-ui/react";
import VariantSuggestions from "./VariantSuggestions";

interface VariantBubbleProps {
  type: ClauseType;
  variant: BubbleVariant;
  onChange: (clause: Clause) => void;
  children: React.ReactNode;
}

const VariantBubble = ({
  type,
  variant,
  onChange: handleChange,
  children,
}: VariantBubbleProps) => {
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isSuggestionsOpen,
    onOpenChange: setIsSuggestionsOpen,
    placement: "bottom-start",
    middleware: [offset(8)],
  });

  const handleClick = () => setIsSuggestionsOpen((current) => !current);

  const handleSelectSuggestion = (newClause: Clause) => {
    setIsSuggestionsOpen(false);
    handleChange(newClause);
  };

  return (
    <>
      <div ref={refs.setReference}>
        <Bubble variant={variant} onClick={handleClick}>
          {children}
        </Bubble>
      </div>
      {isSuggestionsOpen && (
        <div
          className="w-32 rounded-2xl bg-medium-grey"
          ref={refs.setFloating}
          style={floatingStyles}
        >
          <VariantSuggestions
            type={type}
            onSelectSuggestion={handleSelectSuggestion}
          />
        </div>
      )}
    </>
  );
};

export default VariantBubble;

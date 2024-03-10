import { Bubble, BubbleVariant } from "../design-system/Bubble";
import { Clause, ClauseType } from "./types";
import { useFloating, offset } from "@floating-ui/react";
import VariantSuggestions from "./VariantSuggestions";

interface VariantBubbleProps {
  type: ClauseType;
  variant: BubbleVariant;
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
  onChange: (clause: Clause) => void;
  children: React.ReactNode;
}

const VariantBubble = ({
  type,
  variant,
  selected,
  onSelectedChange: handleSelectedChange,
  onChange: handleChange,
  children,
}: VariantBubbleProps) => {
  const { refs, floatingStyles } = useFloating({
    open: selected,
    onOpenChange: handleSelectedChange,
    placement: "bottom-start",
    middleware: [offset(8)],
  });

  const handleClick = () => {
    handleSelectedChange(true);
  };

  const handleSelectSuggestion = (newClause: Clause) => {
    handleChange({ ...newClause, selected: true });
  };

  return (
    <>
      <div ref={refs.setReference}>
        <Bubble variant={variant} onClick={handleClick}>
          {children}
        </Bubble>
      </div>
      {selected && (
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

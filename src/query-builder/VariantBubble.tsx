import { Bubble, BubbleVariant } from "../design-system/Bubble";
import { Clause, ClauseType } from "./types";
import {
  useFloating,
  useDismiss,
  useInteractions,
  offset,
} from "@floating-ui/react";
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
  const { refs, floatingStyles, context } = useFloating({
    open: selected,
    onOpenChange: handleSelectedChange,
    placement: "bottom-start",
    middleware: [offset(8)],
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const handleSelectSuggestion = (newClause: Clause) => {
    handleChange({ ...newClause, selected: true });
  };

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps}>
        <Bubble variant={variant} onClick={() => handleSelectedChange(true)}>
          {children}
        </Bubble>
      </div>
      {selected && (
        <div
          className="w-32 rounded-2xl bg-medium-grey"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps}
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

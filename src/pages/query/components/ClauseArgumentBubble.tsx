import { useEffect } from "react";
import { Bubble } from "../../../design-system/Bubble";
import { ClauseDraft } from "../types";
import { ClauseArgument } from "./ClauseBubble";

interface ClauseArgumentBubbleProps<TClause extends ClauseDraft> {
  clause: TClause;
  arg: ClauseArgument<TClause>;
  selected: boolean;
  onChange: (clause: TClause) => void;
  onSelectedChange: (seleced: boolean) => void;
  onConfirm: () => void;
}

const ClauseArgumentBubble = <TClause extends ClauseDraft>({
  clause,
  arg,
  selected,
  onChange: handleChange,
  onSelectedChange: handleSelectedChange,
  onConfirm: handleConfirm,
}: ClauseArgumentBubbleProps<TClause>) => {
  useEffect(() => {
    if (selected) {
      arg.clear(clause, handleChange);
    }
  }, [selected]);

  if (!selected) {
    return (
      <Bubble
        variant="primary"
        onClick={() => {
          handleSelectedChange(true);
        }}
      >
        {arg.renderText(clause) ?? arg.name}
      </Bubble>
    );
  }

  return (
    <Bubble variant="primary">
      {arg.renderInput({
        clause,
        selected,
        onChange: handleChange,
        onSelectedChange: handleSelectedChange,
        onConfirm: handleConfirm,
      })}
    </Bubble>
  );
};

export default ClauseArgumentBubble;

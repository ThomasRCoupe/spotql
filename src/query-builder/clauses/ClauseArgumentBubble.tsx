import { Bubble } from "../../design-system/Bubble";
import { Clause } from "../types";
import { ClauseArgument } from "./types";

interface ClauseArgumentBubbleProps<TClause extends Clause> {
  clause: TClause;
  arg: ClauseArgument<TClause>;
  selected: boolean;
  onChange: (clause: TClause) => void;
  onSelectedChange: (seleced: boolean) => void;
  onConfirm: () => void;
}

const ClauseArgumentBubble = <TClause extends Clause>({
  clause,
  arg,
  selected,
  onChange: handleChange,
  onSelectedChange: handleSelectedChange,
  onConfirm: handleConfirm,
}: ClauseArgumentBubbleProps<TClause>) => {
  console.log("ClauseArgumentBubble", selected);

  if (!selected) {
    return (
      <Bubble
        variant="primary"
        onClick={() => {
          console.log("setting selected to true");
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

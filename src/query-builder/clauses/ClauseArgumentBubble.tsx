import { Bubble } from "../../design-system/Bubble";
import { Clause } from "../types";
import { ClauseArgument } from "./types";

interface ClauseArgumentBubbleProps<TClause extends Clause> {
  clause: TClause;
  arg: ClauseArgument<TClause>;
  selected: boolean;
  onChange: (clause: TClause) => void;
  onSelectedChange: (selected: boolean) => void;
}

const ClauseArgumentBubble = <TClause extends Clause>({
  clause,
  arg,
  selected,
  onChange: handleChange,
  onSelectedChange: handleSelectedChange,
}: ClauseArgumentBubbleProps<TClause>) => {
  if (!selected) {
    <Bubble
      variant="primary"
      onClick={() => {
        handleSelectedChange(true);
      }}
    >
      {arg.renderText(clause) ?? arg.name}
    </Bubble>;
  }

  return (
    <Bubble variant="primary">
      {arg.renderInput({
        clause,
        selected,
        onChange: handleChange,
        onSelectedChange: (newSelected) => handleSelectedChange(newSelected),
      })}
    </Bubble>
  );
};

export default ClauseArgumentBubble;

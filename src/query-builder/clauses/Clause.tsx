import { useState } from "react";
import { Bubble } from "../../design-system/Bubble";
import VariantBubble from "../VariantBubble";
import { Clause } from "../types";
import { ClauseArgument } from "./types";
import ClauseArgumentBubble from "./ClauseArgumentBubble";

interface ClauseProps<TClause extends Clause> {
  clause: TClause;
  onChange: (clause: TClause) => void;
  args?: ClauseArgument<TClause>[];
}

interface ClauseTypeFragment {
  type: "clause-type";
}

interface ClauseArgumentFragment {
  type: "clause-argument";
  index: number;
}

type ClauseFragment = ClauseTypeFragment | ClauseArgumentFragment;

const Clause = <TClause extends Clause>({
  clause,
  onChange: handleChange,
  args,
}: ClauseProps<TClause>) => {
  const [selectedFragment, setSelectedFragment] = useState<ClauseFragment>();

  if (!clause.selected) {
    return (
      <Bubble
        variant="inverted"
        onClick={() => handleChange({ ...clause, selected: true })}
      >
        {clause.displayName +
          args?.reduce(
            (argsText, arg) =>
              `${argsText} ${arg.renderText(clause) ?? arg.name}`,
            ""
          )}
      </Bubble>
    );
  }

  return (
    <div className="flex gap-2">
      <VariantBubble
        type="selector"
        variant="primary"
        selected={selectedFragment?.type === "clause-type"}
        onChange={(newClause) => handleChange(newClause as TClause)}
        onSelectedChange={(fragmentSelected) =>
          fragmentSelected
            ? setSelectedFragment({ type: "clause-type" })
            : handleChange({ ...clause, selected: false })
        }
      >
        {clause.displayName}
      </VariantBubble>
      {args?.map((arg, index) => (
        <ClauseArgumentBubble
          key={arg.name}
          clause={clause}
          arg={arg}
          selected={
            selectedFragment?.type === "clause-argument" &&
            selectedFragment.index === index
          }
          onChange={(newClause) => handleChange(newClause)}
          onSelectedChange={(fragmentSelected) =>
            fragmentSelected
              ? setSelectedFragment({ type: "clause-argument", index })
              : handleChange({ ...clause, selected: false })
          }
        />
      ))}
    </div>
  );
};

export default Clause;

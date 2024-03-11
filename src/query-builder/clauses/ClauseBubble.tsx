import { useState } from "react";
import { Bubble } from "../../design-system/Bubble";
import VariantBubble from "../VariantBubble";
import { Clause, Clause as ClauseBubble } from "../types";
import { ClauseArgument } from "./types";
import ClauseArgumentBubble from "./ClauseArgumentBubble";

interface ClauseBubbleProps<TClause extends ClauseBubble> {
  clause: TClause;
  onChange: (clause: TClause) => void;
  args?: ClauseArgument<TClause>[];
}

interface ClauseVariantFragment {
  type: "clause-variant";
}

interface ClauseArgumentFragment {
  type: "clause-argument";
  index: number;
}

type ClauseFragment = ClauseVariantFragment | ClauseArgumentFragment;

const renderArgsAsText = <TClause extends Clause>(
  args: ClauseArgument<TClause>[],
  clause: TClause
) =>
  args.reduce(
    (argsText, arg) =>
      `${argsText ? `${argsText}, ` : ""} ${
        arg.renderText(clause) ?? arg.name
      }`,
    ""
  );

const ClauseBubble = <TClause extends ClauseBubble>({
  clause,
  onChange: handleChange,
  args,
}: ClauseBubbleProps<TClause>) => {
  const [selectedFragment, setSelectedFragment] = useState<ClauseFragment>();

  if (!clause.selected) {
    return (
      <Bubble
        variant="inverted"
        onClick={() => handleChange({ ...clause, selected: true })}
      >
        {`${clause.displayName}${
          args ? `: ${renderArgsAsText(args, clause)}` : ""
        }`}
      </Bubble>
    );
  }

  return (
    <div className="flex gap-2">
      <VariantBubble
        type="selector"
        variant="primary"
        selected={selectedFragment?.type === "clause-variant"}
        onChange={(newClause) => handleChange(newClause as TClause)}
        onSelectedChange={(fragmentSelected) =>
          fragmentSelected
            ? setSelectedFragment({ type: "clause-variant" })
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

export default ClauseBubble;

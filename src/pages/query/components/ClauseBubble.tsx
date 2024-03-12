import { useState } from "react";
import { Bubble } from "../../../design-system/Bubble";
import VariantBubble from "./VariantBubble";
import { ClauseDraft, ClauseDraft as ClauseBubble } from "../types";
import ClauseArgumentBubble from "./ClauseArgumentBubble";

export interface RenderArgumentInputParams<TClause> {
  clause: TClause;
  selected: boolean;
  onChange: (clause: TClause) => void;
  onSelectedChange: (selected: boolean) => void;
  onConfirm: () => void;
}

export interface ClauseArgument<TClause extends ClauseDraft> {
  name: string;
  renderText: (clause: TClause) => string | undefined;
  renderInput: (params: RenderArgumentInputParams<TClause>) => JSX.Element;
}

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

const renderArgsAsText = <TClause extends ClauseDraft>(
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
        type={clause.type}
        variant="primary"
        selected={selectedFragment?.type === "clause-variant"}
        onChange={(newClause) => handleChange(newClause as TClause)}
        onSelectedChange={(fragmentSelected) =>
          fragmentSelected
            ? setSelectedFragment({ type: "clause-variant" })
            : setSelectedFragment(undefined)
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
              : setSelectedFragment(undefined)
          }
          onConfirm={() => handleChange({ ...clause, selected: false })}
        />
      ))}
    </div>
  );
};

export default ClauseBubble;

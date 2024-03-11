import { useState } from "react";
import { Bubble } from "../../design-system/Bubble";
import VariantBubble from "../VariantBubble";
import { Clause } from "../types";
import React from "react";

interface RenderArgumentInputParams<TClause> {
  clause: TClause;
  selected: boolean;
  onChange: (clause: TClause) => void;
  onSelectedChange: (selected: boolean) => void;
}

interface ClauseArgument<TClause extends Clause> {
  name: string;
  renderText: (clause: TClause) => string | undefined;
  renderInput: (params: RenderArgumentInputParams<TClause>) => JSX.Element;
}

interface ClauseProps<TClause extends Clause> {
  clause: TClause;
  onChange: (clause: TClause) => void;
  args: ClauseArgument<TClause>[];
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
          args.reduce(
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
        onSelectedChange={(fragmentSelected) =>
          fragmentSelected
            ? setSelectedFragment({ type: "clause-type" })
            : setSelectedFragment(undefined)
        }
        onChange={(newClause) => handleChange(newClause as TClause)}
      >
        {clause.displayName}
      </VariantBubble>
      {args.map((arg, index) => (
        <React.Fragment key={arg.name}>
          {arg.renderInput({
            clause,
            selected:
              selectedFragment?.type === "clause-argument" &&
              selectedFragment.index === index,
            onChange: handleChange,
            onSelectedChange: (fragmentSelected) =>
              fragmentSelected
                ? setSelectedFragment({ type: "clause-argument", index })
                : setSelectedFragment(undefined),
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Clause;

import { GetTopSelectorDraft } from "./types";
import { SelectorDraft } from "../../../types";
import ClauseBubble, { ClauseArgument } from "../../../components/ClauseBubble";
import { ClauseNumberInput } from "../../../../../design-system/ClauseNumberInput";

interface GetTopBubbleProps {
  clause: GetTopSelectorDraft;
  onChange: (selector: SelectorDraft) => void;
}

const amountArg: ClauseArgument<GetTopSelectorDraft> = {
  name: "Amount",
  renderText: (clause) =>
    clause.amount ? clause.amount.toString() : undefined,
  renderInput: ({
    clause,
    selected,
    onChange: handleChange,
    onConfirm: handleConfirm,
  }) => (
    <ClauseNumberInput
      selected={selected}
      value={clause.amount}
      placeholder={"Amount"}
      onChange={(amount) => handleChange({ ...clause, amount })}
      onConfirm={handleConfirm}
    />
  ),
  clear: (clause, handleChange) =>
    handleChange({ ...clause, amount: undefined }),
};

const GetTopBubble = ({
  clause,
  onChange: handleChange,
}: GetTopBubbleProps) => (
  <ClauseBubble<GetTopSelectorDraft>
    clause={clause}
    onChange={handleChange}
    args={[amountArg]}
  />
);

export default GetTopBubble;

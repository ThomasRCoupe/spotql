import { GetTopSelector } from "./types";
import { Selector } from "../../../types";
import ClauseBubble from "../../ClauseBubble";
import { ClauseArgument } from "../../types";
import { ClauseNumberInput } from "../../../../design-system/ClauseNumberInput";

interface GetTopBubbleProps {
  clause: GetTopSelector;
  onChange: (selector: Selector) => void;
}

const amountArg: ClauseArgument<GetTopSelector> = {
  name: "Amount",
  renderText: (clause) =>
    clause.amount ? clause.amount.toString() : undefined,
  renderInput: ({
    clause,
    selected,
    onChange: handleChange,
    onSelectedChange: handleSelectedChange,
  }) => (
    <ClauseNumberInput
      selected={selected}
      value={clause.amount}
      placeholder={"Amount"}
      onChange={(amount) => handleChange({ ...clause, amount })}
      onConfirm={() => handleSelectedChange(false)}
    />
  ),
};

const GetTopBubble = ({
  clause,
  onChange: handleChange,
}: GetTopBubbleProps) => (
  <ClauseBubble<GetTopSelector>
    clause={clause}
    onChange={handleChange}
    args={[amountArg]}
  />
);

export default GetTopBubble;

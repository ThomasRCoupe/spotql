import { GetTopSelector } from "./types";
import { Selector } from "../../../types";
import Clause from "../../Clause";
import { ClauseArgument } from "../../types";
import { ClauseNumberInput } from "../../../../design-system/ClauseNumberInput";

interface GetTopProps {
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

const GetTop = ({ clause, onChange: handleChange }: GetTopProps) => (
  <Clause<GetTopSelector>
    clause={clause}
    onChange={handleChange}
    args={[amountArg]}
  />
);

export default GetTop;

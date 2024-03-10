import { Clause } from "../../../design-system/Clause";
import { ClauseNumberInput } from "../../../design-system/ClauseNumberInput";

interface GetTopClauseProps {
  amount: number | undefined;
  onAmountChange: (amount: number | undefined) => void;
}

export const GetTopClause = ({
  amount,
  onAmountChange: handleAmountChange,
}: GetTopClauseProps) => {
  return (
    <Clause variant="standard">
      Get Top{" "}
      <ClauseNumberInput
        value={amount}
        onChange={(newAmout) => handleAmountChange(newAmout)}
      />
    </Clause>
  );
};

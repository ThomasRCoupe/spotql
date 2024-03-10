import { ClauseButton } from "../../../design-system/Clause";
import { ClauseNumberInput } from "../../../design-system/ClauseNumberInput";

interface GetTopClauseProps {
  amount: number | undefined;
  onAmountChange: (amount: number | undefined) => void;
  onClick: () => void;
}

export const GetTopClause = ({
  amount,
  onAmountChange: handleAmountChange,
  onClick: handleClick,
}: GetTopClauseProps) => {
  return (
    <ClauseButton variant="standard" onClick={handleClick}>
      Get Top{" "}
      <ClauseNumberInput
        value={amount}
        onChange={(newAmout) => handleAmountChange(newAmout)}
      />
    </ClauseButton>
  );
};

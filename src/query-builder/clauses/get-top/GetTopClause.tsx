import { useState } from "react";
import { ClauseButton } from "../../../design-system/ClauseButton";
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
  const [editing, setEditing] = useState(true);

  return (
    <ClauseButton
      variant="standard"
      onClick={() => {
        handleClick();
        setEditing(true);
      }}
    >
      Get Top
      <ClauseNumberInput
        editing={editing}
        value={amount}
        placeholder="Amount"
        onChange={(newAmout) => handleAmountChange(newAmout)}
        onConfirm={() => setEditing(false)}
      />
    </ClauseButton>
  );
};

import { useState } from "react";
import { Bubble } from "../../../../design-system/Bubble";
import { ClauseNumberInput } from "../../../../design-system/ClauseNumberInput";
import { PLACEHOLDER } from "./constants";

interface GetTopInputBubble {
  amount: number | undefined;
  onAmountChange: (amount: number | undefined) => void;
}

const GetTopInputBubble = ({
  amount,
  onAmountChange: handleAmountChange,
}: GetTopInputBubble) => {
  const [editing, setEditing] = useState(true);

  if (!editing) {
    return (
      <Bubble
        variant="primary"
        onClick={() => {
          setEditing(true);
        }}
      >
        {amount ?? PLACEHOLDER}
      </Bubble>
    );
  }

  return (
    <Bubble variant="primary">
      <ClauseNumberInput
        editing={editing}
        value={amount}
        placeholder={PLACEHOLDER}
        onChange={(newAmount) => handleAmountChange(newAmount)}
        onConfirm={() => setEditing(false)}
      />
    </Bubble>
  );
};

export default GetTopInputBubble;

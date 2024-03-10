import { Bubble } from "../../../../design-system/Bubble";
import { ClauseNumberInput } from "../../../../design-system/ClauseNumberInput";
import { PLACEHOLDER } from "./constants";

interface GetTopInputBubble {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
  amount: number | undefined;
  onAmountChange: (amount: number | undefined) => void;
  onConfrm: () => void;
}

const GetTopInputBubble = ({
  selected,
  onSelectedChange: handleSelectedChange,
  amount,
  onAmountChange: handleAmountChange,
  onConfrm: handleConfirm,
}: GetTopInputBubble) => {
  if (!selected) {
    return (
      <Bubble
        variant="primary"
        onClick={() => {
          handleSelectedChange(true);
        }}
      >
        {amount ?? PLACEHOLDER}
      </Bubble>
    );
  }

  return (
    <Bubble variant="primary">
      <ClauseNumberInput
        selected={selected}
        value={amount}
        placeholder={PLACEHOLDER}
        onChange={(newAmount) => handleAmountChange(newAmount)}
        onConfirm={handleConfirm}
      />
    </Bubble>
  );
};

export default GetTopInputBubble;

import { useState } from "react";
import { Clause } from "../../../design-system/Clause";
import { ClauseInput } from "../../../design-system/ClauseInput";

export const GetTopClause = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (newAmount: string) => {
    const newAmountInt = newAmount.replace(/[^0-9]/g, "");
    setAmount(newAmountInt);
  };

  return (
    <Clause type="standard">
      Get Top <ClauseInput value={amount} onChange={handleChange} />
    </Clause>
  );
};

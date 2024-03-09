import { useState } from "react";
import { SelectFunction } from "../types";

export interface GetTopCommandBuilderProps {
  onSelectChange: (select: SelectFunction) => void;
}

export const GetTopCommandBuilder = ({
  onSelectChange,
}: GetTopCommandBuilderProps) => {
  const [amount, setAmount] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(newAmount);
    onSelectChange((songs) =>
      Promise.resolve(songs.slice(0, parseInt(newAmount)))
    );
  };

  return (
    <button className="h-8 px-4 rounded-full bg-white hover:bg-white/90 text-black">
      <span>Get Top </span>
      <input
        type="text"
        className="h-full outline-none bg-transparent hover:bg-black/10 focus:bg-black/10"
        placeholder="amount"
        value={amount}
        onChange={handleChange}
      />
    </button>
  );
};

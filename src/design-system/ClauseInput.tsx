export interface ClauseInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ClauseInput = ({
  value,
  onChange: handleChange,
}: ClauseInputProps) => (
  <input
    type="text"
    className="h-full outline-none bg-transparent hover:bg-black/10 focus:bg-black/10"
    placeholder="amount"
    value={value}
    onChange={(e) => handleChange(e.target.value)}
  />
);

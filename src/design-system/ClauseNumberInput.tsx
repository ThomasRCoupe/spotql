import { ClauseInput } from "./ClauseInput";

export interface ClauseNumberInputProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}

export const ClauseNumberInput = ({
  value,
  onChange: handleChange,
}: ClauseNumberInputProps) => {
  const handleInputChange = (newValue: string) => {
    const numberValue = parseInt(newValue.replace(/[^0-9]/g, ""));
    handleChange(!Number.isNaN(numberValue) ? numberValue : undefined);
  };

  return (
    <ClauseInput value={value?.toString() ?? ""} onChange={handleInputChange} />
  );
};

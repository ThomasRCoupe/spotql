import { ClauseInput } from "./ClauseInput";

export interface ClauseNumberInputProps {
  selected: boolean;
  value: number | undefined;
  placeholder: string;
  onChange: (value: number | undefined) => void;
  onConfirm: () => void;
}

export const ClauseNumberInput = ({
  selected,
  value,
  placeholder,
  onChange: handleChange,
  onConfirm: handleConfirm,
}: ClauseNumberInputProps) => {
  const handleInputChange = (newValue: string) => {
    const numberValue = parseInt(newValue.replace(/[^0-9]/g, ""));
    handleChange(!Number.isNaN(numberValue) ? numberValue : undefined);
  };

  return (
    <ClauseInput
      selected={selected}
      value={value?.toString()}
      placeholder={placeholder}
      onChange={handleInputChange}
      onConfirm={handleConfirm}
      width="small"
    />
  );
};

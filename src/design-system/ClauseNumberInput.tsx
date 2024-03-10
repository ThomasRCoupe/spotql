import { ClauseInput } from "./ClauseInput";

export interface ClauseNumberInputProps {
  editing: boolean;
  value: number | undefined;
  placeholder: string;
  onChange: (value: number | undefined) => void;
  onConfirm: () => void;
}

export const ClauseNumberInput = ({
  editing,
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
      editing={editing}
      value={value?.toString()}
      placeholder={placeholder}
      onChange={handleInputChange}
      onConfirm={handleConfirm}
      width="small"
    />
  );
};

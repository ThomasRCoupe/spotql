import clsx from "clsx";
import { useEffect, useRef } from "react";

export type WidthVariant = "small" | "medium" | "large";

export interface ClauseInputProps {
  editing: boolean;
  value: string | undefined;
  placeholder: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  width: WidthVariant;
}

export const ClauseInput = ({
  value,
  placeholder,
  onChange: handleChange,
  onConfirm: handleConfirm,
  width,
}: ClauseInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className={clsx(
        "h-full outline-none bg-transparent",
        getTailwindWidth(width)
      )}
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={() => handleConfirm()}
      onKeyDown={handeKeyDown}
    />
  );
};

const getTailwindWidth = (width: WidthVariant) => {
  switch (width) {
    case "small":
      return "w-16";
    case "medium":
      return "w-32";
    case "large":
      return "w-48";
  }
};

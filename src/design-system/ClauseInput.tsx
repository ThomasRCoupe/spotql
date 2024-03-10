import clsx from "clsx";
export type WidthVariant = "small" | "medium";

export interface ClauseInputProps {
  editing: boolean;
  value: string | undefined;
  placeholder: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  width: WidthVariant;
}

export const ClauseInput = ({
  editing,
  value,
  placeholder,
  onChange: handleChange,
  onConfirm: handleConfirm,
  width,
}: ClauseInputProps) => {
  const handeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  return editing ? (
    <input
      type="text"
      className={clsx(
        "h-full px-1 outline-none bg-black/10",
        getTailwindWidth(width)
      )}
      value={value ?? ""}
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={handeKeyDown}
    />
  ) : value ? (
    <span className="h-full flex items-center text-black">{" " + value}</span>
  ) : (
    <span className="h-full flex items-center text-light-grey">
      {" " + placeholder}
    </span>
  );
};

const getTailwindWidth = (width: WidthVariant) => {
  switch (width) {
    case "small":
      return "w-12";
    case "medium":
      return "w-32";
  }
};

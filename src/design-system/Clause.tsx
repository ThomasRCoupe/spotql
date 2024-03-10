import clsx from "clsx";

export type ClauseVariant = "standard" | "placeholder";

export interface ClauseProps {
  variant: ClauseVariant;
  onClick: () => void;
  children: React.ReactNode;
}

export const ClauseButton = ({
  variant,
  onClick: handleClick,
  children,
}: ClauseProps) => (
  <button
    className={clsx(
      "h-8 px-4 rounded-full",
      variant === "standard"
        ? "bg-white hover:bg-white/90 text-black"
        : "bg-white/10 hover:bg-white/20 text-light-grey"
    )}
    onClick={handleClick}
  >
    {children}
  </button>
);

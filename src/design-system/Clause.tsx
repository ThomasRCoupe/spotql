import clsx from "clsx";

export type ClauseType = "standard" | "placeholder";

export interface ClauseProps {
  type: ClauseType;
  children: React.ReactNode;
}

export const Clause = ({ type, children }: ClauseProps) => (
  <button
    className={clsx(
      "h-8 px-4 rounded-full",
      type === "standard"
        ? "bg-white hover:bg-white/90 text-black"
        : "bg-white/10 hover:bg-white/20 text-light-grey"
    )}
  >
    {children}
  </button>
);

import clsx from "clsx";
import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  onClick: () => void;
  variant: ButtonVariant;
  children: ReactNode;
}

export const Button = ({
  children,
  variant,
  onClick: handleClick,
}: ButtonProps) => (
  <button
    onClick={handleClick}
    className={clsx(
      "w-auto py-1 px-3 rounded-full font-medium",
      variant === "primary" ? "bg-spotify-green text-black" : "bg-white/5"
    )}
  >
    {children}
  </button>
);

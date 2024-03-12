import clsx from "clsx";
import React from "react";
import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  variant: ButtonVariant;
  children: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, variant, onClick: handleClick, children }, ref) => (
    <button
      ref={ref}
      onClick={handleClick}
      className={clsx(
        "h-8 px-4 flex items-center rounded-full",
        variant === "primary" ? "bg-spotify-green text-black" : "bg-white/5",
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
);

export default Button;

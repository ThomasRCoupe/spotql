import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ children, onClick: handleClick }: ButtonProps) => (
  <button onClick={handleClick} className="py-1 px-3 rounded-full bg-white/5">
    {children}
  </button>
);

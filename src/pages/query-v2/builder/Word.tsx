import clsx from "clsx";
import React from "react";

interface WordProps {
  padding?: boolean;
  children: React.ReactNode;
}

const Word = ({ padding = true, children }: WordProps) => (
  <span className={clsx("h-8 flex items-center", padding && "px-1")}>
    {children}
  </span>
);

export default Word;

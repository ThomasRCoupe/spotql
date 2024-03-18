import React from "react";

interface WordProps {
  children: React.ReactNode;
}

const Word = ({ children }: WordProps) => (
  <span className="h-8 w-auto flex items-center px-4 rounded-full bg-transparent hover:bg-white/10">
    {children}
  </span>
);

export default Word;

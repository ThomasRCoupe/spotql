import React from "react";

interface WordProps {
  children: React.ReactNode;
}

const Word = ({ children }: WordProps) => (
  <span className="h-8 flex items-center">{children}</span>
);

export default Word;

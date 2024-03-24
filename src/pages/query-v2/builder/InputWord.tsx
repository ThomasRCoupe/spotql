import { useEffect, useRef, useState } from "react";
import Word from "./Word";
import clsx from "clsx";

interface InputWordProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputWord = ({
  value,
  onChange: handleChange,
  placeholder,
}: InputWordProps) => {
  const [focussed, setFocussed] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    adjustInputWidth(value);
  }, [inputRef]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    handleChange(newValue);
    adjustInputWidth(newValue);
  };

  const adjustInputWidth = (newValue: string) => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.style.width = getTextWidth(newValue);
  };

  const getTextWidth = (newValue: string) => {
    const text = newValue ? newValue : placeholder;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      return "0px";
    }

    context.font = getComputedStyle(inputRef.current as HTMLElement).font!;
    const width = context.measureText(text).width;
    return `${width + 16}px`;
  };

  return (
    <Word padding={false}>
      <input
        ref={inputRef}
        className={clsx(
          "h-8 px-2 rounded-full bg-transparent outline-none",
          focussed ? "bg-white/10" : "hover:bg-white/5"
        )}
        type="text"
        value={value}
        onInput={handleInput}
        onFocus={() => setFocussed(true)}
        onBlur={() => setFocussed(false)}
        placeholder={placeholder}
        style={{ width: "16px", minWidth: "16px" }}
      />
    </Word>
  );
};

export default InputWord;

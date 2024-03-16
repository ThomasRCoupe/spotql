import { useRef, useState } from "react";

const WidthAdjustingInput = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    adjustInputWidth(value);
  };

  const adjustInputWidth = (value: string) => {
    if (inputRef.current) {
      const inputWidth = getTextWidth(value);
      inputRef.current.style.width = `${inputWidth}px`;
    }
  };

  const getTextWidth = (text: string) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return 0;
    context.font = getComputedStyle(inputRef.current as HTMLElement).font!;
    const width = context.measureText(text).width;
    return width;
  };

  return (
    <input
      ref={inputRef}
      className="bg-transparent outline-none"
      type="text"
      value={inputValue}
      onInput={handleInput}
      style={{ width: "10px", minWidth: "10px" }}
    />
  );
};

export default WidthAdjustingInput;

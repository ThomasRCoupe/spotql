import { useEffect, useRef, useState } from "react";
import Word from "./Word";
import clsx from "clsx";
import React from "react";

interface InputWordProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputWord = React.forwardRef<HTMLInputElement, InputWordProps>(
  (
    {
      value,
      placeholder,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
    forwardedRef
  ) => {
    const [focussed, setFocussed] = useState(false);
    const localRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      adjustInputWidth(value);
    }, [localRef]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: newValue } = event.target;
      handleChange(newValue);
      adjustInputWidth(newValue);
    };

    const adjustInputWidth = (newValue: string) => {
      if (!localRef.current) {
        return;
      }

      localRef.current.style.width = getTextWidth(newValue);
    };

    const getTextWidth = (newValue: string) => {
      const text = newValue ? newValue : placeholder;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) {
        return "0px";
      }

      context.font = getComputedStyle(localRef.current as HTMLElement).font!;
      const width = context.measureText(text).width;
      return `${width + 16}px`;
    };

    const mergeRefs = (instance: HTMLInputElement | null) => {
      localRef.current = instance;

      if (typeof forwardedRef === "function") {
        forwardedRef(instance);
      } else if (forwardedRef && typeof forwardedRef === "object") {
        forwardedRef.current = instance;
      }
    };

    const handleInputFocus = () => {
      setFocussed(true);
      handleFocus?.();
    };

    const handleInputBlur = () => {
      setFocussed(false);
      handleBlur?.();
    };

    return (
      <Word padding={false}>
        <input
          ref={mergeRefs}
          className={clsx(
            "h-8 px-2 rounded-full bg-transparent outline-none",
            focussed ? "bg-white/10" : "hover:bg-white/5"
          )}
          type="text"
          value={value}
          onInput={handleInput}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          style={{ width: "16px", minWidth: "16px" }}
        />
      </Word>
    );
  }
);

export default InputWord;

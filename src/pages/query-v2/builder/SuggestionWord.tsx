import {
  useFloating,
  useDismiss,
  useInteractions,
  offset,
} from "@floating-ui/react";
import Word from "./Word";
import clsx from "clsx";
import { useState } from "react";

interface Suggestion {
  key: string;
}

interface SuggestionWordProps<TSuggestion extends Suggestion> {
  suggestions: TSuggestion[];
  renderSuggestion: (suggestion: TSuggestion) => React.ReactNode;
  onSuggestionSelect: (suggestion: TSuggestion) => void;
  children: React.ReactNode;
}

const SuggestionWord = <TSuggestion extends Suggestion>({
  suggestions,
  renderSuggestion,
  onSuggestionSelect: handleSuggestionSelect,
  children,
}: SuggestionWordProps<TSuggestion>) => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [offset(8)],
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const handleSuggestionClick = (suggestion: TSuggestion) => {
    handleSuggestionSelect(suggestion);
    setOpen(false);
  };

  return (
    <>
      <Word padding={false}>
        <button
          className={clsx(
            "h-8 px-1 rounded-lg bg-transparent",
            open ? "bg-white/10" : "hover:bg-white/5"
          )}
          ref={refs.setReference}
          {...getReferenceProps}
          onClick={() => setOpen((current) => !current)}
        >
          {children}
        </button>
      </Word>
      {open && (
        <div
          className="max-h-64 flex flex-col overflow-y-auto rounded-2xl bg-medium-grey text-white"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps}
        >
          {suggestions.map((suggestion, index) => (
            <button
              className={clsx(
                "px-4 py-2 hover:bg-white/10 text-left",
                index === 0 ? "pt-2 rounded-t-2xl" : "pt-1",
                index === suggestions.length - 1 ? "pb-2 rounded-b-2xl" : "pb-1"
              )}
              key={suggestion.key}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {renderSuggestion(suggestion)}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SuggestionWord;

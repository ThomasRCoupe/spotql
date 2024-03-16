import {
  FloatingContext,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";

interface DialogProps {
  isOpen: boolean;
  context: FloatingContext<HTMLButtonElement>;
  setFloating: (node: HTMLElement | null) => void;
  getFloatingProps: () => Record<string, unknown>;
  children: React.ReactNode;
}

const Dialog = ({
  isOpen,
  context,
  setFloating,
  getFloatingProps,
  children,
}: DialogProps) => {
  return (
    <FloatingPortal>
      {isOpen && (
        <FloatingOverlay
          className="grid place-items-center bg-black/80"
          lockScroll
        >
          <FloatingFocusManager context={context}>
            <div
              className="p-4 rounded-xl bg-dark-grey"
              ref={setFloating}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
};

export default Dialog;

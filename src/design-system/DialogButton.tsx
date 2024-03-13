import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useState } from "react";
import Button from "./Button";

interface DialogProps {
  buttonText: string;
  children: React.ReactNode;
}

const DialogButton = ({ buttonText, children }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss,
  ]);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setIsOpen(true)}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {buttonText}
      </Button>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay
            className="grid place-items-center bg-black/80"
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                className="p-4 rounded-xl bg-dark-grey"
                ref={refs.setFloating}
                {...getFloatingProps()}
              >
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};

export default DialogButton;

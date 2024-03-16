import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context } = useFloating<HTMLButtonElement>({
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

  return {
    isOpen,
    setIsOpen,
    refs,
    getReferenceProps,
    getFloatingProps,
    context,
  };
};

export default useDialog;

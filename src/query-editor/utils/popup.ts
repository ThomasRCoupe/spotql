import { Editor } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import tippy, { Placement } from "tippy.js";

export interface Popup<P> {
  update: (props: P) => void;
  close: () => void;
}

interface OpenPopupParams<P> {
  component: React.FunctionComponent<P>;
  props: P;
  editor: Editor;
  referenceRect: DOMRect;
  placement: Placement;
  offset?: {
    x: number;
    y: number;
  };
}

export const openPopup = <P>({
  component,
  props,
  editor,
  referenceRect,
  placement,
  offset = { x: 0, y: 0 },
}: OpenPopupParams<P>) => {
  const renderer = new ReactRenderer(component, {
    editor,
    props: props as Record<string, unknown>,
  });

  const popup = tippy("body", {
    getReferenceClientRect: () => referenceRect,
    appendTo: () => document.body,
    content: renderer.element,
    showOnCreate: true,
    interactive: true,
    trigger: "manual",
    placement,
    offset: [offset.x, offset.y],
  })[0];

  if (!popup) {
    return;
  }

  const update = (props: P) => {
    renderer.updateProps(props as Record<string, unknown>);
  };

  const close = () => {
    popup.destroy();
  };

  return { update, close };
};
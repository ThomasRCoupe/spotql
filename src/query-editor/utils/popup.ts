import { Editor } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import tippy, { Placement } from "tippy.js";

export interface Popup<P> {
  update: (props: P) => void;
  hide: () => void;
  show: () => void;
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
}: OpenPopupParams<P>): Popup<P> => {
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
  })[0]!;

  const update = (props: P) => {
    renderer.updateProps(props as Record<string, unknown>);
  };

  const hide = () => {
    popup.hide();
  };

  const show = () => {
    popup.show();
  };

  return { update, hide, show };
};

import { Node } from "@tiptap/core";
import { registerCommand } from "../extensions/suggestions/CommandSuggestor";

export const createCommandNode = (nodeName: string, displayName: string) =>
  Node.create({
    name: nodeName,
    content: "",
    group: "inline",
    inline: true,

    renderHTML() {
      return [
        "span",
        { class: "p-2 rounded-full bg-spotify-green text-black" },
        displayName,
      ];
    },

    onCreate() {
      registerCommand(this.editor, {
        name: displayName,
        addToQuery: (editor, range) => {
          // TODO
        },
      });
    },
  });

export const createCommandNodeWithArgument = (
  nodeName: string,
  displayName: string
) =>
  Node.create({
    name: nodeName,
    content: "text*",
    group: "inline",
    inline: true,

    renderHTML() {
      return [
        "span",
        { class: "p-2 rounded-full bg-spotify-green text-black" },
        `${displayName}`,
        0,
        ")",
      ];
    },

    onCreate() {
      registerCommand(this.editor, {
        name: displayName,
        addToQuery: (editor, range) => {
          // TODO
        },
      });
    },
  });

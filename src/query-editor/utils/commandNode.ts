import { Node } from "@tiptap/core";
import { Command } from "../types";
import { registerCommand } from "../extensions/suggestions/CommandSuggestor";

export const createCommandNode = (command: Command) =>
  Node.create({
    name: command.nodeName,
    content: "",

    renderHTML() {
      return [
        "span",
        { class: "p-2 rounded-full bg-spotify-green text-black" },
        command.displayName,
      ];
    },

    onCreate() {
      registerCommand(this.editor, {
        nodeName: this.name,
        displayName: command.displayName,
      });
    },
  });

export const createParameterisedCommandNode = (command: Command) =>
  Node.create({
    name: command.nodeName,
    content: "text*",

    renderHTML() {
      return [
        "span",
        { class: "p-2 rounded-full bg-spotify-green text-black" },
        `${command.displayName}`,
        0,
        ")",
      ];
    },

    onCreate() {
      registerCommand(this.editor, {
        nodeName: this.name,
        displayName: command.displayName,
      });
    },
  });

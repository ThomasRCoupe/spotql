import { Node } from "@tiptap/core";
import { registerCommand } from "../suggestions/CommandSuggestor";

export const GetRandom = Node.create({
  name: "getRandom",
  content: "text*",

  renderHTML() {
    return ["span", { class: "p-1 rounded-md bg-spotify-green text-white" }, 0];
  },

  onCreate() {
    registerCommand(this.editor, {
      nodeName: this.name,
      displayName: "GET RANDOM",
    });
  },
});

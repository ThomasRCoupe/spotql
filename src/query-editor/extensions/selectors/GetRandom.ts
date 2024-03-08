import { Node } from "@tiptap/core";

export const GetRandom = Node.create({
  name: "getRandom",
  content: "text*",

  renderHTML() {
    return ["span", { class: "p-1 rounded-md bg-spotify-green text-white" }, 0];
  },
});

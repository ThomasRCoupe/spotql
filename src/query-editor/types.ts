import { Editor, Range } from "@tiptap/core";

export interface Command {
  name: string;
  addToQuery: (editor: Editor, range: Range) => void;
}

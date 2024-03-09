import { useEditor, EditorContent } from "@tiptap/react";
import { Paragraph } from "./extensions/basic/Paragraph";
import { Document } from "./extensions/basic/Document";
import { Text } from "./extensions/basic/Text";
import { GetRandom } from "./extensions/selectors/GetRandom";
import { CommandSuggestor } from "./extensions/suggestions/CommandSuggestor";
import "./QueryEditor.css";

export const QueryEditor = () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, CommandSuggestor, GetRandom],
    content: "",
  });

  return (
    <EditorContent
      className="p-2 rounded-md bg-black font-mono text-light-grey query-editor"
      editor={editor}
    />
  );
};

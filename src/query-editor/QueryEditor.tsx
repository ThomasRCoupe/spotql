import { useEditor, EditorContent } from "@tiptap/react";
import { Paragraph } from "./extensions/Paragraph";
import { Document } from "./extensions/Document";
import { Text } from "./extensions/Text";

export const QueryEditor = () => {
  const editor = useEditor({
    extensions: [Text, Paragraph, Document],
    content: "<p>Hello World!</p>",
  });

  return (
    <EditorContent
      className="p-2 rounded-md bg-light-grey font-mono text-black"
      editor={editor}
    />
  );
};

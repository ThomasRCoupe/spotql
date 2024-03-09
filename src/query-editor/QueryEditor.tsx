import { useEditor, EditorContent } from "@tiptap/react";
import { Paragraph } from "./extensions/basic/Paragraph";
import { Document } from "./extensions/basic/Document";
import { Text } from "./extensions/basic/Text";
import { GetAll } from "./extensions/selectors/GetAll";
import { CommandSuggestor } from "./extensions/suggestions/CommandSuggestor";
import "./QueryEditor.css";
import { GetTop } from "./extensions/selectors/GetTop";
import { Shuffled } from "./extensions/sequencers/Shuffled";
import { FromMyPlaylist } from "./extensions/sources/FromMyPlaylist";

export const QueryEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      CommandSuggestor,
      GetAll,
      GetTop,
      Shuffled,
      FromMyPlaylist,
    ],
    content: "",
  });

  return (
    <EditorContent
      className="p-4 rounded-md bg-black font-mono text-light-grey query-editor"
      editor={editor}
    />
  );
};

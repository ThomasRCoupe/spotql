import { useState } from "react";
import { MyPlaylistSource } from "./types";
import MyPlaylistClauseBubble from "./MyPlaylistClauseBubble";
import MyPlaylistVariantBubble from "./MyPlaylistVariantBubble";
import MyPlaylistInputBubble from "./MyPlaylistInputBubble";
import { Source } from "../../../types";

interface MyPlaylistProps {
  source: MyPlaylistSource;
  onChange: (source: Source) => void;
}

export const MyPlaylist = ({
  source,
  onChange: handleChange,
}: MyPlaylistProps) => {
  const [editing, setEditing] = useState(false);

  if (!editing) {
    return (
      <MyPlaylistClauseBubble
        playlistName={source.playlistName}
        onClick={() => setEditing(true)}
      />
    );
  }

  return (
    <div className="flex gap-2">
      <MyPlaylistVariantBubble
        onChange={(newSource) => {
          handleChange(newSource);
          setEditing(false);
        }}
      />
      <MyPlaylistInputBubble
        playlistName={source.playlistName}
        onPlaylistNameChange={(name) =>
          handleChange({
            ...source,
            playlistName: name,
          })
        }
      />
    </div>
  );
};

export default MyPlaylist;

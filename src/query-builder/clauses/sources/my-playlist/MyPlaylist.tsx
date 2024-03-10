import { MyPlaylistSource } from "./types";
import MyPlaylistClauseBubble from "./MyPlaylistClauseBubble";
import MyPlaylistVariantBubble from "./MyPlaylistVariantBubble";
import MyPlaylistInputBubble from "./MyPlaylistInputBubble";
import { Source } from "../../../types";
import { useState } from "react";

interface MyPlaylistProps {
  source: MyPlaylistSource;
  onChange: (source: Source) => void;
}

export const MyPlaylist = ({
  source,
  onChange: handleChange,
}: MyPlaylistProps) => {
  const [inputSelected, setInputSelected] = useState(true);

  if (!source.selected) {
    return (
      <MyPlaylistClauseBubble
        playlistName={source.playlistName}
        onClick={() => handleChange({ ...source, selected: true })}
      />
    );
  }

  return (
    <div className="flex gap-2">
      <MyPlaylistVariantBubble
        selected={!inputSelected}
        onSelectedChange={(selected) => setInputSelected(!selected)}
        onChange={handleChange}
      />
      <MyPlaylistInputBubble
        selected={inputSelected}
        onSelectedChange={(selected) => setInputSelected(selected)}
        playlistName={source.playlistName}
        onPlaylistNameChange={(name) =>
          handleChange({
            ...source,
            playlistName: name,
          })
        }
        onConfrm={() => handleChange({ ...source, selected: true })}
      />
    </div>
  );
};

export default MyPlaylist;

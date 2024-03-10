import { Source } from "../../types";
import MyPlaylistClause from "./my-playlist/MyPlaylistClause";

interface SourceClauseProps {
  source: Source;
  onChange: (source: Source) => void;
  onClick: () => void;
}

export const SourceClause = ({
  source,
  onChange: handleChange,
  onClick: handleClick,
}: SourceClauseProps) => {
  switch (source.variant) {
    case "my-playlist":
      return (
        <MyPlaylistClause
          playlistName={source.playlistName}
          onPlaylistNameChange={(name) =>
            handleChange({ ...source, playlistName: name })
          }
          onClick={handleClick}
        />
      );
  }
};

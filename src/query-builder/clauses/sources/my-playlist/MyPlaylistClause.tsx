import { useState } from "react";
import { ClauseButton } from "../../../../design-system/ClauseButton";
import { ClauseInput } from "../../../../design-system/ClauseInput";

interface MyPlaylistClauseProps {
  playlistName: string | undefined;
  onPlaylistNameChange: (name: string | undefined) => void;
  onClick: () => void;
}

const MyPlaylistClause = ({
  playlistName,
  onPlaylistNameChange: handlePlaylistNameChange,
  onClick: handleClick,
}: MyPlaylistClauseProps) => {
  const [editing, setEditing] = useState(true);

  return (
    <ClauseButton
      variant="standard"
      onClick={() => {
        handleClick();
        setEditing(true);
      }}
    >
      My Playlist
      <ClauseInput
        editing={editing}
        value={playlistName}
        placeholder="Playlist Name"
        onChange={(newPlaylistName) =>
          handlePlaylistNameChange(newPlaylistName)
        }
        onConfirm={() => setEditing(false)}
        width="large"
      />
    </ClauseButton>
  );
};

export default MyPlaylistClause;

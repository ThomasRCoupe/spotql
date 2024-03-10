import { useState } from "react";
import { Bubble } from "../../../../design-system/Bubble";
import { ClauseInput } from "../../../../design-system/ClauseInput";
import { PLACEHOLDER } from "./constants";

interface MyPlaylistInputBubbleProps {
  playlistName: string | undefined;
  onPlaylistNameChange: (name: string | undefined) => void;
}

const MyPlaylistInputBubble = ({
  playlistName,
  onPlaylistNameChange: handlePlaylistNameChange,
}: MyPlaylistInputBubbleProps) => {
  const [editing, setEditing] = useState(true);

  if (!editing) {
    return (
      <Bubble
        variant="primary"
        onClick={() => {
          setEditing(true);
        }}
      >
        {playlistName ?? PLACEHOLDER}
      </Bubble>
    );
  }

  return (
    <Bubble variant="primary">
      <ClauseInput
        editing={editing}
        value={playlistName}
        placeholder={PLACEHOLDER}
        onChange={(newPlaylistName) =>
          handlePlaylistNameChange(newPlaylistName)
        }
        onConfirm={() => setEditing(false)}
        width="large"
      />
    </Bubble>
  );
};

export default MyPlaylistInputBubble;

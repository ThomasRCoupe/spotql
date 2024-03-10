import { Bubble } from "../../../../design-system/Bubble";
import { ClauseInput } from "../../../../design-system/ClauseInput";
import { PLACEHOLDER } from "./constants";

interface MyPlaylistInputBubbleProps {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
  playlistName: string | undefined;
  onPlaylistNameChange: (name: string | undefined) => void;
  onConfrm: () => void;
}

const MyPlaylistInputBubble = ({
  selected,
  onSelectedChange: handleSelectedChange,
  playlistName,
  onPlaylistNameChange: handlePlaylistNameChange,
  onConfrm: handleConfirm,
}: MyPlaylistInputBubbleProps) => {
  if (!selected) {
    return (
      <Bubble
        variant="primary"
        onClick={() => {
          handleSelectedChange(true);
        }}
      >
        {playlistName ?? PLACEHOLDER}
      </Bubble>
    );
  }

  return (
    <Bubble variant="primary">
      <ClauseInput
        selected={selected}
        value={playlistName}
        placeholder={PLACEHOLDER}
        onChange={(newPlaylistName) =>
          handlePlaylistNameChange(newPlaylistName)
        }
        onConfirm={handleConfirm}
        width="large"
      />
    </Bubble>
  );
};

export default MyPlaylistInputBubble;

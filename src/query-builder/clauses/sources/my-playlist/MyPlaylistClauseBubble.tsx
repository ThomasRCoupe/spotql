import { Bubble } from "../../../../design-system/Bubble";
import { PLACEHOLDER } from "./constants";

interface MyPlaylistClauseProps {
  selected: boolean;
  playlistName: string | undefined;
  onClick: () => void;
}

const MyPlaylistClauseBubble = ({
  selected,
  playlistName,
  onClick: handleClick,
}: MyPlaylistClauseProps) => {
  return (
    <Bubble variant={selected ? "primary" : "inverted"} onClick={handleClick}>
      My Playlist "
      {playlistName ?? <span className="text-light-grey">{PLACEHOLDER}</span>}"
    </Bubble>
  );
};

export default MyPlaylistClauseBubble;

import { Bubble } from "../../../../design-system/Bubble";
import { PLACEHOLDER } from "./constants";

interface MyPlaylistClauseProps {
  playlistName: string | undefined;
  onClick: () => void;
}

const MyPlaylistClauseBubble = ({
  playlistName,
  onClick: handleClick,
}: MyPlaylistClauseProps) => {
  return (
    <Bubble variant="primary" onClick={handleClick}>
      My Playlist{" "}
      {playlistName ?? <span className="text-light-grey">{PLACEHOLDER}</span>}
    </Bubble>
  );
};

export default MyPlaylistClauseBubble;

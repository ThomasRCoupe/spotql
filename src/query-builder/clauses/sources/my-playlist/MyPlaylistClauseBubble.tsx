import { Bubble } from "../../../../design-system/Bubble";

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
      From My Playlist{playlistName ? ` "${playlistName}"` : "..."}
    </Bubble>
  );
};

export default MyPlaylistClauseBubble;

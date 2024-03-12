import clsx from "clsx";
import { SimplifiedPlaylist } from "../../../../../spotify/types";
import SuggestionList from "../../../../../design-system/SuggestionList";
import { useMyPlaylists } from "../../../../../spotify/useMyPlaylists";

interface MyPlaylistSuggestionsProps {
  searchTerm: string | undefined;
  onSelectPlaylist: (playlist: SimplifiedPlaylist) => void;
}

const MyPlaylistSuggestions = ({
  searchTerm,
  onSelectPlaylist: handleSelectPlaylist,
}: MyPlaylistSuggestionsProps) => {
  const { playlists, status } = useMyPlaylists();

  if (status === "error") {
    return (
      <SuggestionList>
        <div className="px-4 py-2 rounded-2xl">Error Loading Playlists</div>
      </SuggestionList>
    );
  }
  const filteredPlaylists = searchTerm
    ? playlists?.filter((playlist) =>
        playlist?.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : playlists;

  return (
    <SuggestionList>
      {filteredPlaylists?.map((playlist, index) => (
        <button
          className={clsx(
            "px-4 py-2 hover:bg-white/10 text-left max-w-64 truncate",
            index === 0 && "rounded-t-2xl",
            index === filteredPlaylists.length - 1 && "pb-2 rounded-b-2xl"
          )}
          key={playlist.id}
          onClick={() => handleSelectPlaylist(playlist)}
        >
          {playlist.name}
        </button>
      ))}
      {status === "pending" && (
        <div className="px-4 py-2 rounded-2xl">Loading...</div>
      )}
    </SuggestionList>
  );
};

export default MyPlaylistSuggestions;

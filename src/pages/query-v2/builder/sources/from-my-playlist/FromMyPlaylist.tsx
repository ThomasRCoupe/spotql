import { useState } from "react";
import InputWord from "../../InputWord";
import {
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { useMyPlaylists } from "../../../../../spotify/hooks/useMyPlaylists";
import clsx from "clsx";
import LoadingSpinner from "../../../../../design-system/LoadingSpinner";
import Word from "../../Word";

interface FromMyPlaylistProps {
  onPlaylistIdChange: (quantity: string | undefined) => void;
}

const FromMyPlaylist = ({
  onPlaylistIdChange: handlePlaylistIdChange,
}: FromMyPlaylistProps) => {
  const [playlistName, setPlaylistName] = useState<string>("");

  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [offset(8)],
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const { playlists, status } = useMyPlaylists();

  if (status === "error") {
    console.error("Something fucked up with the playlist fetching?");
  }

  const filteredPlaylists = playlistName
    ? playlists?.filter((playlist) =>
        playlist.name.toLowerCase().includes(playlistName.toLowerCase())
      )
    : playlists;

  const handlePlaylistClick = (id: string) => {
    handlePlaylistIdChange(id);
    setOpen(false);
  };

  return (
    <>
      <Word>My</Word>
      <Word>Playlist</Word>
      <InputWord
        value={playlistName}
        onChange={setPlaylistName}
        placeholder="Playlist Name: string"
        ref={refs.setReference}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        {...getReferenceProps}
      />
      {open && (
        <div
          className="max-h-64 flex flex-col overflow-y-auto rounded-2xl bg-medium-grey text-white"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps}
        >
          {filteredPlaylists ? (
            filteredPlaylists.map((playlist, index) => (
              <button
                className={clsx(
                  "px-4 py-2 hover:bg-white/10 text-left",
                  index === 0 ? "pt-2 rounded-t-2xl" : "pt-1",
                  index === filteredPlaylists.length - 1
                    ? "pb-2 rounded-b-2xl"
                    : "pb-1"
                )}
                key={playlist.id}
                onClick={() => handlePlaylistClick(playlist.id)}
              >
                {playlist.name}
              </button>
            ))
          ) : (
            <div className="w-64 flex justify-center px-4 py-2 rounded-2xl">
              <LoadingSpinner size="small" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FromMyPlaylist;

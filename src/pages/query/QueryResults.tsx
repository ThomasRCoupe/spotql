import clsx from "clsx";
import Panel from "../../design-system/Panel";
import Dialog from "../../design-system/Dialog";
import SavePlaylistDialog from "./components/SavePlaylistDialog";
import useCreatePlaylist from "../../spotify/hooks/useCreatePlaylist";
import { Track } from "../../spotify/types";
import Button from "../../design-system/Button";
import useDialog from "../../design-system/useDialog";
import LoadingSpinner from "../../design-system/LoadingSpinner";

interface QueryResultsProps {
  tracks: Track[];
  isLoading: boolean;
}

const QueryResults = ({ tracks, isLoading }: QueryResultsProps) => {
  const {
    isOpen,
    setIsOpen,
    refs,
    getReferenceProps,
    getFloatingProps,
    context,
  } = useDialog();
  const createPlaylist = useCreatePlaylist();

  const handleSavePlaylist = (playlistName: string) => {
    createPlaylist?.(playlistName, "Generated by SpotQL", tracks);
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <Panel>
        <div className="w-full p-2 flex justify-center rounded-2xl">
          <LoadingSpinner size="large" />
        </div>
      </Panel>
    );
  }

  return (
    <>
      <Panel>
        <ul className="max-h-72 w-full overflow-y-auto rounded-2xl text-white">
          {tracks.map((track, index) => (
            <li
              className={clsx(
                "w-full p-2 hover:bg-white/10 text-left",
                index === 0 && "rounded-t-2xl",
                index === tracks.length - 1 && "pb-2 rounded-b-2xl"
              )}
              key={track.id}
            >
              <div className="flex items-center gap-4">
                <div className="w-5 text-light-grey text-right">
                  {index + 1}
                </div>
                {track.album.images[0] && (
                  <img
                    className="rounded-md"
                    height={36}
                    width={36}
                    src={track.album.images[0].url}
                  />
                )}
                <div className="flex flex-col">
                  <div>{track.name}</div>
                  <div className="text-light-grey text-sm">
                    {track.artists.map((artist, index) =>
                      index !== track.artists.length - 1
                        ? `${artist.name}, `
                        : artist.name
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
      <Button
        ref={refs.setReference}
        variant="primary"
        onClick={() => {
          setIsOpen(true);
        }}
        {...getReferenceProps}
      >
        Save
      </Button>
      <Dialog
        isOpen={isOpen}
        setFloating={refs.setFloating}
        getFloatingProps={getFloatingProps}
        context={context}
      >
        <SavePlaylistDialog onSave={handleSavePlaylist} />
      </Dialog>
    </>
  );
};

export default QueryResults;

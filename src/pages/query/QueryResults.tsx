import clsx from "clsx";
import Panel from "../../design-system/Panel";
import DialogButton from "../../design-system/DialogButton";
import SavePlaylistDialog from "./components/SavePlaylistDialog";
import useCreatePlaylist from "../../spotify/hooks/useCreatePlaylist";
import { Track } from "../../spotify/types";

interface QueryResultsProps {
  tracks: Track[];
}

const QueryResults = ({ tracks }: QueryResultsProps) => {
  const createPlaylist = useCreatePlaylist();

  const handleSavePlaylist = (playlistName: string) => {
    createPlaylist?.(playlistName, "Generated by SpotQL", tracks);
  };

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
      <DialogButton buttonText="Save">
        <SavePlaylistDialog onSave={handleSavePlaylist} />
      </DialogButton>
    </>
  );
};

export default QueryResults;

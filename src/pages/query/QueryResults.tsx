import clsx from "clsx";
import { Query } from "./types";
import useQueryResults from "./useQueryResults";
import Panel from "../../design-system/Panel";
import DialogButton from "../../design-system/DialogButton";

interface QueryResultsProps {
  query: Query;
}

const QueryResults = ({ query }: QueryResultsProps) => {
  const { tracks, isLoading } = useQueryResults(query);

  if (isLoading) {
    return;
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
                <img
                  className="rounded-md"
                  height={36}
                  width={36}
                  src={track.album.images[0].url}
                />
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
      <DialogButton buttonText="Save">Save Playlist!</DialogButton>
    </>
  );
};

export default QueryResults;

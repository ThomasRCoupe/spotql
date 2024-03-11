import clsx from "clsx";
import { Query } from "./types";
import useQueryResults from "./useQueryResults";

interface QueryResultsProps {
  query: Query;
}

const QueryResults = ({ query }: QueryResultsProps) => {
  const { tracks, isLoading } = useQueryResults(query);

  return (
    <ul className="h-full w-full overflow-y-auto rounded-2xl bg-medium-grey text-white">
      {tracks.map((track, index) => {
        console.log("inner", track);
        return (
          <li
            className={clsx(
              "w-full px-4 py-2 hover:bg-white/10 text-left",
              index === 0 && "rounded-t-2xl",
              index === tracks.length - 1 && "pb-2 rounded-b-2xl"
            )}
            key={track.id}
          >
            <div className="flex items-center gap-2">
              <img height={36} width={36} src={track.album.images[0].url} />
              <div>{track.name}</div>
              {track.artists.map((artist) => (
                <div className="text-light-grey" key={artist.name}>
                  {artist.name}
                </div>
              ))}
            </div>
          </li>
        );
      })}
      {isLoading && <div className="px-4 py-2 rounded-2xl">Loading...</div>}
    </ul>
  );
};

export default QueryResults;

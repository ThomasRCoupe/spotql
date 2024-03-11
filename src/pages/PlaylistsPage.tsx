import { useMyPlaylists } from "../spotify/useMyPlaylists";

export const PlaylistsPage = () => {
  const { playlists, status } = useMyPlaylists();

  if (status === "error") {
    return <h1>Fetching Playlists Failed!</h1>;
  }

  return (
    <div className="w-full h-full">
      <section className="mb-2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">SpotQL</h1>
        <h2 className="text-light-grey">Playlists</h2>
      </section>

      <section className="overflow-y-auto max-h-96">
        <ul>
          {playlists?.map((playlist) => (
            <li>{playlist.name}</li>
          ))}
        </ul>
        {status === "pending" && <h1>Loading...</h1>}
      </section>
    </div>
  );
};

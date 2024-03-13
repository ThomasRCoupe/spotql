import { useMutation } from "@tanstack/react-query";
import { addTracksToPlaylist, createNewPlaylist } from "../api";
import useAuthenticatedFetch, {
  AuthenticatedFetch,
} from "./useAuthenticatedFetch";
import { useCurrentUser } from "./useCurrentUser";
import { Track } from "../types";

const useCreatePlaylist = () => {
  const authenticatedFetch = useAuthenticatedFetch();
  const { user } = useCurrentUser();

  const createPlaylistMutation = useMutation({
    mutationFn: (args: {
      name: string;
      description: string;
      tracks: Track[];
    }) => {
      return createAndAddTracksToPlaylist(
        authenticatedFetch!,
        user!.id,
        args.name,
        args.description,
        args.tracks
      );
    },
  });

  const createPlaylist = (name: string, description: string, tracks: Track[]) =>
    createPlaylistMutation.mutateAsync({ name, description, tracks });

  return authenticatedFetch && user ? createPlaylist : undefined;
};

const createAndAddTracksToPlaylist = async (
  authenticatedFetch: AuthenticatedFetch,
  userId: string,
  name: string,
  description: string,
  tracks: Track[]
) => {
  const playlist = await createNewPlaylist(
    authenticatedFetch,
    userId,
    name,
    description
  );

  const trackUris = tracks.map((track) => track.uri);

  await addTracksToPlaylist(authenticatedFetch, playlist.id, trackUris);
};

export default useCreatePlaylist;

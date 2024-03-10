import { useSpotifyUserProfile } from "../spotify/useSpotifyUserProfile";
import { Avatar } from "../design-system/Avatar";

export const ProfilePage = () => {
  const { profile, status } = useSpotifyUserProfile();

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "error" || !profile) {
    return <h1>Fetching Profile Failed!</h1>;
  }

  return (
    <div className="w-full h-full">
      <section className="mb-2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">SpotQL</h1>
        <div className="flex gap-2 items-center">
          <span id="avatar">
            {profile.images[0] ? (
              <Avatar
                src={profile.images[0].url}
                alt={`${profile.display_name}'s avatar`}
                size="small"
              />
            ) : undefined}
          </span>
          <h2 className="text-light-grey">
            Logged in as <span id="displayName">{profile.display_name}</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

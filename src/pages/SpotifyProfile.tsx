import { useNavigate } from "react-router-dom";
import { useSpotifyUserProfile } from "../spotify/useSpotifyUserProfile";
import { Button } from "../design-system/Button";
import { Avatar } from "../design-system/Avatar";

export const SpotifyProfile = () => {
  const { profile, status } = useSpotifyUserProfile();
  const navigate = useNavigate();

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "error" || !profile) {
    return <h1>Fetching Profile Failed!</h1>;
  }

  const handleSignOut = () => {
    navigate("/");
  };

  const handleQuery = () => {
    navigate("/query");
  };

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

      <section className="flex flex-col gap-2">
        <ul className="text-sm">
          <li>
            <span className="text-light-grey">User ID: </span>
            <span>{profile.id}</span>
          </li>
          <li>
            <span className="text-light-grey">Email: </span>
            <span id="email">{profile.email}</span>
          </li>
          <li>
            <span className="text-light-grey">URI: </span>
            <a id="uri" href={profile.external_urls.spotify}>
              {profile.uri}
            </a>
          </li>
          <li>
            <span className="text-light-grey">Profile Link: </span>
            <a id="url" href={profile.href}>
              {profile.href}
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          <Button variant="primary" onClick={handleQuery}>
            Query
          </Button>
          <Button variant="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </section>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useSpotifyUserProfile } from "../spotify/useSpotifyUserProfile";
import { Button } from "../design-system/Button";
import { Avatar } from "../design-system/Avatar";

export const SpotifyProfile = () => {
  const { profile, status, clearToken } = useSpotifyUserProfile();
  const navigate = useNavigate();

  if (status === "fetching") {
    return <h1>Loading...</h1>;
  }

  if (status === "failed" || !profile) {
    return <h1>Fetching Profile Failed!</h1>;
  }

  const handleSignOut = () => {
    clearToken();
    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold">SpotQL</h1>

      <section className="flex flex-col gap-2" id="profile">
        <h2 className="text-light-grey">
          Logged in as <span id="displayName">{profile.display_name}</span>
        </h2>
        <span id="avatar">
          {profile.images[0] ? (
            <Avatar
              src={profile.images[0].url}
              alt={`${profile.display_name}'s avatar`}
              size="small"
            />
          ) : undefined}
        </span>
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
        <div>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      </section>
    </div>
  );
};

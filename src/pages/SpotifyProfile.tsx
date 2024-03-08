import { useNavigate } from "react-router-dom";
import { useSpotifyUserProfile } from "../spotify/useSpotifyUserProfile";
import { Button } from "../design-system/Button";

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

      <section id="profile">
        <h2 className="text-light-grey">
          Logged in as <span id="displayName">{profile.display_name}</span>
        </h2>
        <span id="avatar">
          {profile.images[0] ? (
            <img width={50} height={50} src={profile.images[0].url} />
          ) : undefined}
        </span>
        <ul>
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
      </section>

      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
};

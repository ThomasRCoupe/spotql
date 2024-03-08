import { useSpotifyUserProfile } from "../spotify/useSpotifyUserProfile";

export const SpotifyProfile = () => {
  const { profile, status } = useSpotifyUserProfile();

  if (status === "fetching") {
    return <h1>Loading...</h1>;
  }

  if (status === "failed" || !profile) {
    return <h1>Fetching Profile Failed!</h1>;
  }

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold">SpotQL</h1>

      <section id="profile">
        <h2>
          Logged in as <span id="displayName">{profile.display_name}</span>
        </h2>
        <span id="avatar">
          {profile.images[0] ? (
            <img width={50} height={50} src={profile.images[0].url} />
          ) : undefined}
        </span>
        <ul>
          <li>
            User ID: <span id="id">{profile.id}</span>
          </li>
          <li>
            Email: <span id="email">{profile.email}</span>
          </li>
          <li>
            Spotify URI:{" "}
            <a id="uri" href={profile.external_urls.spotify}>
              {profile.uri}
            </a>
          </li>
          <li>
            Link:{" "}
            <a id="url" href={profile.href}>
              {profile.href}
            </a>
          </li>
          <li>
            Profile Image:{" "}
            <span id="imgUrl">
              {profile.images[0] ? (
                <img width={50} height={50} src={profile.images[0].url} />
              ) : undefined}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

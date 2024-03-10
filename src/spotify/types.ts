export interface SpotifyUserProfile {
  id: string;
  display_name: string;
  email: string;
  uri: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  images: { url: string }[];
}

export interface SpotifyAccessToken {
  access_token: string;
  expires_in: number;
}

export interface SimplifiedPlaylist {
  id: string;
  name: string;
  href: string;
}

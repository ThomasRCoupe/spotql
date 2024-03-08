export interface SpotifyUserProfile {
  id: string;
  email: string;
  uri: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  images: string[];
}

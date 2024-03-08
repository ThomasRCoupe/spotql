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

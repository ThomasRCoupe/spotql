export interface User {
  id: string;
  country: string;
  display_name: string;
  email: string;
  uri: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  images: { url: string }[];
}

export interface AccessToken {
  access_token: string;
  expires_in: number;
}

export interface SimplifiedPlaylist {
  id: string;
  name: string;
  href: string;
}

export interface Artist {
  id: string;
  name: string;
}

export interface AlbumImage {
  url: string;
  width: number;
  height: number;
}

export interface Album {
  id: string;
  name: string;
  images: AlbumImage[];
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
}

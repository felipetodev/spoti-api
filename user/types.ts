export type RecentlyPlayedArtists = {
  name: string;
  uri: string;
  image_url: string;
};

export type PublicPlaylists = {
  image_url: string;
  name: string;
  uri: string;
};

export interface ResponseProfile {
  public_playlists?: PublicPlaylists[];
  recently_played_artists?: RecentlyPlayedArtists[];
  name: string;
  image_url: string;
  total_public_playlists_count: number;
  following_count: number;
  followers_count: number;
  color: number;
  uri: string;
}

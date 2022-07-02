type Images = {
  height: number;
  url: string;
  width: number;
};

type Owner = {
  display_name: string;
  id: string;
  uri: string;
};

type Track = {
  duration_ms: number;
  type: string;
};

interface TrackItem {
  track: Track;
}

interface Tracks {
  items: TrackItem[];
  total: number;
}

interface Followers {
  total: number;
}

export interface PlaylistResponse {
  collaborative: boolean;
  description: string;
  followers: Followers;
  images: Images[];
  name: string;
  owner: Owner;
  public: boolean;
  tracks: Tracks;
  uri: string;
}

type AddedBy = {
  id: Owner["id"];
  type: string;
  uri: Owner["uri"];
  external_urls?: any;
};

type Artist = {
  external_urls?: AddedBy["external_urls"],
  id: string,
  name: string,
  type: string,
  uri: string,
}

type Duration = {
  totalMilliseconds: number,
}

export type PlaylistTrack = {
  id: string;
  name: string;
  artists: Artist[];
  album: any;
  duration_ms?: number;
  duration?: Duration;
  added_at: string;
  playcount?: number;
  preview_url?: string;
};

export interface PlaylistTrackResponse {
  added_at: string;
  added_by: AddedBy;
  is_local: boolean;
  primary_color?: string | undefined;
  track: PlaylistTrack;
  video_thumbnail?: any;
}

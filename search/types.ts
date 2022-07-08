type Biography = {
  text: string,
};

export type Profile = {
  name: string,
  verified?: boolean | undefined,
  biography?: Biography | undefined,
};

export type Artist = {
  id?: string,
  profile: Profile,
  uri: string,
  visuals?: any,
};

export type TopResult = {
  description: string,
  images: any,
  id?: string,
  name: string,
  owner: Profile,
  uri: string,
};

type UserImage = {
  largeImageUrl: string,
  smallImageUrl: string,
};

type User = {
  displayName: string,
  id: string,
  image: UserImage,
  uri: string,
  username: string,
};

type Track = {
  albumOfTrack: Object,
  artists: Artist[],
  contentRating: Object,
  duration: Object,
  id: string,
  name: string,
  playability: Object,
  uri: string,
};

export interface Artists {
  data: Artist;
}

interface TopResults {
  data: TopResult;
}

interface Users {
  data: User;
}

interface Tracks {
  data: Track;
}

export interface Album {
  artists: Artists;
  coverArt: any;
  id?: string;
  date: any;
  name: string;
  uri: string;
}

interface AlbumItems {
  data: Album[];
}

type Albums = {
  items: AlbumItems | Album[];
  totalCount: number;
};

export interface AppearsOn extends Albums {
  releases: Albums;
}

export interface GlobalResponse {
  artist?: Artist;
  artists?: Artists[];
  users: Users[];
  albums: Albums;
  tracks: Tracks[];
  topResults: TopResults[];
}

import React, { useState, useMemo } from "react";
import { PublicPlaylists, RecentlyPlayedArtists } from "./types";

export interface Context {
  username: string;
  userImage: string;
  publicPlaylists: PublicPlaylists[];
  recentlyPlayedArtists: RecentlyPlayedArtists[];
  totalPublicPlaylistsCount: number;
  followingCount: number;
  followersCount: number;
  color: number;
}

export interface UserProfile extends Context {
  updateUser: (e: Context) => void;
}

const defaultValues = {
  username: "",
  userImage: "",
  publicPlaylists: [],
  recentlyPlayedArtists: [],
  totalPublicPlaylistsCount: 0,
  followingCount: 0,
  followersCount: 0,
  color: 0,
  updateUser: () => {},
};

const UserContext = React.createContext<UserProfile>(defaultValues);

interface Props {
  children: React.ReactNode
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<Context>(defaultValues);

  const updateUser = (data: Context) => {
    setUserData(data);
  };

  const providerValue: UserProfile = useMemo(() => {
    return {
      ...userData,
      updateUser,
    };
  }, [userData]);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

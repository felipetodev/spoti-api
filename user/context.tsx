import React, { useState, useMemo } from "react";

const defaultValues = {
  username: "",
  userImage: "",
  publicPlaylists: [],
  recentlyPlayedArtists: [],
  totalPublicPlaylistsCount: 0,
  followingCount: 0,
  followersCount: 0,
  color: "",
  updateUser: () => {},
};

const UserContext = React.createContext(defaultValues);

const UserProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<any>({});

  const updateUser = (data: any) => {
    setUserData({
      name: data.name,
      publicPlaylists: data.public_playlists,
      recentlyPlayedArtists: data.recently_played_artists,
      imageUrl: data.image_url,
      totalPublicPlaylistsCount: data.total_public_playlists_count,
      followingCount: data.following_count,
      followersCount: data.followers_count,
      color: data.color,
      uri: data.uri,
    });
  };

  const providerValue: any = useMemo(() => {
    return {
      username: userData.name,
      userImage: userData.imageUrl,
      publicPlaylists: userData.publicPlaylists,
      recentlyPlayedArtists: userData.recentlyPlayedArtists,
      totalPublicPlaylistsCount: userData.totalPublicPlaylistsCount,
      followingCount: userData.followingCount,
      followersCount: userData.followersCount,
      color: userData.color,
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

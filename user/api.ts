import { options } from "../utils";
import { ResponseProfile } from "./types";
// import playlistApi from "../playlist/api";

export default {
  getUserProfile: async (userId: string) => {
    try {
      if (!userId) return {};
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/user_profile/?id=${userId}&playlistLimit=10&artistLimit=10`,
        options
      );
      console.warn({ statusApi: response?.statusText })
      const { recently_played_artists, color, uri, ...restOfData }: ResponseProfile = await response.json();
      const topRecentlyPlayed =
        recently_played_artists?.filter((_: any, idx: any) => idx < 5) ?? [];
      return {
        username: restOfData.name,
        userImage: restOfData.image_url,
        publicPlaylists: restOfData.public_playlists,
        recentlyPlayedArtists: topRecentlyPlayed,
        totalPublicPlaylistsCount: restOfData.total_public_playlists_count,
        followingCount: restOfData.following_count,
        followersCount: restOfData.followers_count,
        color,
        uri,
      };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

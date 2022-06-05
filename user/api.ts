import { options } from "../utils";
// import playlistApi from "../playlist/api";

export default {
  getUserProfile: async (userId: string) => {
    try {
      if (!userId) return {};
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/user_profile/?id=${userId}&playlistLimit=10&artistLimit=10`,
        options
      );
      const { recently_played_artists, ...restOfData } = await response.json();
      const topRecentlyPlayed =
        recently_played_artists?.filter((_: any, idx: any) => idx < 5) ?? [];
      return { ...restOfData, recently_played_artists: topRecentlyPlayed };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

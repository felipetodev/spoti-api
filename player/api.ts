import { options } from "../utils";

export default {
  getTrack: async (trackId: any) => {
    if (!trackId) return {};
    try {
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/tracks/?ids=${trackId}`,
        options
      );
      const { tracks } = await response.json();
      return tracks;
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

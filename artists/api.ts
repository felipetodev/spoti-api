import { options } from "../utils";

export default {
  getArtistOverview: async (artistId: any) => {
    if (!artistId) return {};
    try {
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistId}`,
        options
      );
      const { data } = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

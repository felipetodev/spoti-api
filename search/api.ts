import { options } from "../utils";

export default {
  getGlobalSearch: async (query: any) => {
    try {
      if (!query) return {};
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
        options
      );
      const data = await response.json();
      const artist = data.artists.items[0]?.data ?? {};
      const albums = data.albums;
      return {
        artist,
        artists: data.artists.items,
        users: data.users.items,
        albums,
        tracks: data.tracks.items,
        topResults: data.topResults.featured,
      };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

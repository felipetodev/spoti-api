import { options } from "../utils";

export default {
  getPlaylist: async (playlistId: string) => {
    if (!playlistId) return {};
    try {
      const res = await fetch(
        `https://spotify23.p.rapidapi.com/playlist/?id=${playlistId}`,
        options
      );
      return res.json();
    } catch (e) {
      console.error(e);
      return {};
    }
  },
  getPlaylistTrack: async (playlistId: string) => {
    if (!playlistId) return {};
    try {
      const trackRes = await fetch(
        `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistId}&offset=0&limit=100`,
        options
      );
      const { items } = await trackRes.json();
      return items
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

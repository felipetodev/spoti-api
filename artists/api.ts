import { options } from "../utils";

const getTop5 = (data: any) => {
  return data.filter((_: any, idx: any) => idx < 5);
};

export default {
  getArtistOverview: async (artistId: any) => {
    if (!artistId) return {};
    try {
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistId}`,
        options
      );
      const { data } = await response.json();
      const relatedContent = data.artist?.relatedContent;
      const artist = data.artist;
      return {
        artist,
        discography: getTop5(artist.discography.topTracks.items),
        profile: artist.profile,
        featuring: getTop5(relatedContent?.featuring?.items),
        appearsOn: getTop5(relatedContent?.appearsOn?.items),
        relatedArtists: getTop5(relatedContent?.relatedArtists?.items),
        discoveredOn: getTop5(relatedContent?.discoveredOn?.items),
        visuals:
          artist?.visuals?.gallery?.items[0]?.sources[0]?.url ??
          artist?.visuals?.avatarImage?.sources[0]?.url,
      };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

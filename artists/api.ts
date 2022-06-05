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
      const relatedContent = data.artist?.relatedContent;
      const artist = data.artist;
      return { 
        artist, 
        discography: artist.discography.topTracks.items.filter((_: any, idx: any) => idx < 5), 
        profile: artist.profile, 
        featuring: relatedContent?.featuring?.items.filter((_: any, idx: any) => idx < 5), 
        appearsOn: relatedContent?.appearsOn?.items.filter((_: any, idx: any) => idx < 5), 
        relatedArtists: relatedContent?.relatedArtists?.items.filter((_: any, idx: any) => idx < 5), 
        discoveredOn: relatedContent?.discoveredOn?.items.filter((_: any, idx: any) => idx < 5), 
        visuals: artist?.visuals?.gallery?.items[0]?.sources[0]?.url ?? artist?.visuals?.avatarImage?.sources[0]?.url
      }
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};

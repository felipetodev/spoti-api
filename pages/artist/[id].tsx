import React, { useMemo } from "react";
import { Stack } from "@chakra-ui/react";
import api from "../../artists/api";
import { TrackListRow } from "../../components/SearchTrackResults";
import UserBanner from "../../components/UserBanner";
import { usePlayer } from "../../player/hooks";

const ArtistPage: React.FC<any> = ({ data }) => {
  const topTracks = useMemo(() => {
    let top5: any = [];
    if (!data.artist) return [];
    data.artist.discography.topTracks.items.forEach(
      (song: any, idx: number) => {
        if (idx < 5) {
          top5.push(song.track);
        }
      }
    );
    return top5;
  }, [data]);

  const { trackData, updatePlayer, statusPlayer } = usePlayer();

  const onPlayTrack = (trackId: any) => {
    updatePlayer(trackId);
    statusPlayer(true);
  };

  return (
    <Stack w="full">
      <UserBanner artistData={data.artist} />
      <Stack px={6} pb={200}>
        {topTracks.map((track, idx) => (
          <TrackListRow
            isPlaylist
            key={track?.id}
            isActive={track?.id === trackData?.id}
            onDoubleClick={() => onPlayTrack(track.id)}
            song={track?.name}
            playcount={track?.playcount}
            covertArt={track?.album?.coverArt?.sources[2]?.url}
            duration={track?.duration?.totalMilliseconds}
            dateAdded={track?.added_at}
            index={idx + 1}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ArtistPage;

export async function getServerSideProps({ query }) {
  const data = await api.getArtistOverview(query.id);

  return {
    props: {
      data,
    },
  };
}

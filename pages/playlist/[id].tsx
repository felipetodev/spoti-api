import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import api from "../../playlist/api";
import UserBanner from "../../components/UserBanner";
import { TrackListRow } from "../../components/SearchTrackResults";
import { usePlayer } from "../../player/hooks";

const PlaylistPage: React.FC<any> = ({ data, playlist }) => {
  const { trackData, updatePlayer, statusPlayer }: any = usePlayer();

  const onPlayTrack = (track: any) => {
    updatePlayer(track.id);
    statusPlayer(true);
  };
  return (
    <Stack w="full">
      <UserBanner isPlaylist playlistData={data} />
      <Stack px={6}>
        <Stack
          direction="row"
          p={2}
          alignItems="center"
          borderBottom="1px solid rgba(255, 255, 255, .1)"
        >
          <Text
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            fontSize="sm"
            w={6}
            px={2}
          >
            #
          </Text>
          <Stack width="full" direction="row" justifyContent="space-between">
            <Stack minWidth={200} width="sm">
              <Text fontSize="sm" fontWeight={500}>
                TITLE
              </Text>
              <Stack direction="row" margin="0px !important"></Stack>
            </Stack>
            <Stack display="flex" textAlign="start" w={300}>
              <Text fontSize="sm">ALBUM</Text>
            </Stack>
            <Text fontSize="sm">DATE ADDED</Text>
            <Text fontSize="sm" w={6}>
              🕒
            </Text>
          </Stack>
        </Stack>

        {playlist?.map((track: any, idx: any) => (
          <TrackListRow
            isPlaylist
            key={track?.track?.id}
            isActive={track?.track?.id === trackData?.id}
            onDoubleClick={() => onPlayTrack(track.track)}
            song={track?.track?.name}
            artists={track.track.artists}
            covertArt={track?.track?.album?.images[2]?.url}
            duration={track?.track?.duration_ms}
            dateAdded={track?.added_at}
            index={idx + 1}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default PlaylistPage;

export async function getServerSideProps({ query }: any) {
  const playlistResponse = await api.getPlaylist(query.id);
  const trackResponse = await api.getPlaylistTrack(query.id);

  return {
    props: {
      data: playlistResponse,
      playlist: trackResponse,
    },
  };
}

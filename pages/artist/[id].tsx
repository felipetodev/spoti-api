import React, { useMemo } from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import api from "../../artists/api";
import { TrackListRow } from "../../components/SearchTrackResults";
import UserBanner from "../../components/UserBanner";
import { usePlayer } from "../../player/hooks";
import Card from "../../components/Card";
import { getNumberFormat } from "../../utils";
import {
  Artist,
  TopResult,
  Profile,
  AppearsOn,
  Album,
} from "../../search/types";
import { PlaylistTrack, PlaylistTrackResponse } from "../../playlist/types";

type ArtistStats = {
  followers: number;
  monthlyListeners: number;
  worldRank: number;
};

export type IArtist = {
  stats: ArtistStats;
};
interface Props {
  artist: IArtist;
  visuals: string;
  profile: Profile;
  discography: PlaylistTrackResponse[];
  relatedArtists: Artist[];
  featuring: TopResult[];
  appearsOn: AppearsOn[];
  discoveredOn: TopResult[];
}

const ArtistPage: React.FC<Props> = ({
  artist,
  discography,
  profile,
  relatedArtists,
  featuring,
  appearsOn,
  discoveredOn,
  visuals,
}) => {
  const topTracks = useMemo(() => {
    let top5 = [];
    if (!discography) return [];
    discography.forEach((song: PlaylistTrackResponse, idx: number) => {
      if (idx < 5) {
        top5.push(song.track);
      }
    });
    return top5;
  }, [discography]);

  const { trackData, updatePlayer, statusPlayer } = usePlayer();

  const onPlayTrack = (trackId: string) => {
    updatePlayer(trackId);
    statusPlayer(true);
  };

  return (
    <Stack w="full">
      <UserBanner artistData={artist} />
      <Stack px={6} pb={120}>
        {topTracks.map((track: PlaylistTrack, idx: number) => (
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
        {featuring.length > 0 && (
          <>
            <Text fontSize={24} fontWeight={700} pt={10}>
              Featuring {profile?.name}
            </Text>
            <Stack direction="row" gap={4} pb={12}>
              {featuring?.map((data) => (
                <Card
                  key={data?.uri}
                  uri={data?.uri}
                  owner={data?.owner?.name}
                  name={data?.name}
                  image={data?.images?.items[0]?.sources[0]?.url}
                />
              ))}
            </Stack>
          </>
        )}
        {relatedArtists.length > 0 && (
          <>
            <Text fontSize={24} fontWeight={700}>
              Fans also like
            </Text>
            <Stack direction="row" gap={4} pb={12}>
              {relatedArtists?.map((data) => (
                <Card
                  key={data?.uri}
                  artist="Artist"
                  uri={data?.uri}
                  // owner={data?.owner?.name}
                  name={data?.profile?.name}
                  image={data.visuals?.avatarImage?.sources[0]?.url}
                />
              ))}
            </Stack>
          </>
        )}
        {appearsOn.length > 0 && (
          <>
            <Text fontSize={24} fontWeight={700}>
              Appears On
            </Text>
            <Stack direction="row" gap={4} pb={12}>
              {appearsOn?.map(({ releases }) => {
                const data: Album = releases?.items[0];
                return (
                  <Card
                    key={data?.id}
                    uri={data?.uri}
                    albumYear={
                      <Text fontSize="sm" as="span">
                        {data?.date.year} • Album
                      </Text>
                    }
                    name={data?.name}
                    image={data?.coverArt?.sources[0]?.url}
                    artist={""}
                    owner={""}
                  />
                );
              })}
            </Stack>
          </>
        )}
        {discoveredOn.length > 0 && (
          <>
            <Text fontSize={24} fontWeight={700}>
              Discovered on
            </Text>
            <Stack direction="row" gap={4} pb={12}>
              {discoveredOn?.map((data) => (
                <Card
                  key={data?.uri}
                  uri={data?.uri}
                  albumYear={
                    <Text
                      as="span"
                      margin="0px !important"
                      fontSize="sm"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="normal"
                      display="-webkit-box"
                      style={{
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {data?.description}
                    </Text>
                  }
                  name={data?.name}
                  image={data.images?.items[0]?.sources[0]?.url}
                  artist={""}
                  owner={""}
                />
              ))}
            </Stack>
          </>
        )}
        <Text fontSize={24} fontWeight={700}>
          About
        </Text>
        <Stack
          h="full"
          w="fit-content"
          position="relative"
          borderRadius="md"
          overflow="hidden"
        >
          {visuals && (
            <Image
              h={500}
              w={600}
              objectFit="cover"
              src={visuals}
              alt={profile.name}
              backgroundImage="linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"
            />
          )}
          {artist.stats?.worldRank && (
            <Stack
              bg="#0d72ea"
              justifyContent="center"
              alignItems="center"
              h={20}
              w={20}
              borderRadius={9999}
              position="absolute"
              top={4}
              right={8}
            >
              <Text fontSize="xl" fontWeight={700}>
                #{artist.stats.worldRank}
              </Text>
              <Text as="span" fontSize="0.65rem" fontWeight={700}>
                in the world
              </Text>
            </Stack>
          )}
          {artist?.stats?.monthlyListeners && (
            <Stack position="absolute" bottom={0} p={8}>
              <Text fontSize="lg" fontWeight={700}>
                {getNumberFormat(artist.stats.monthlyListeners)} monthly
                listeners
              </Text>
              {profile.biography.text && (
                <Text
                  pt={2}
                  dangerouslySetInnerHTML={{ __html: profile.biography.text }}
                  fontWeight={700}
                />
              )}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArtistPage;

export async function getServerSideProps({ query }) {
  const {
    artist,
    discography,
    profile,
    featuring,
    appearsOn,
    relatedArtists,
    discoveredOn,
    visuals,
  } = await api.getArtistOverview(query.id);

  return {
    props: {
      artist,
      discography,
      profile,
      featuring,
      appearsOn,
      relatedArtists,
      discoveredOn,
      visuals,
    },
  };
}

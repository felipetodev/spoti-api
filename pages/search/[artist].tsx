import React, { useMemo } from "react";
import { GetServerSideProps } from "next";
import { Box, Image, Container, Stack, Text } from "@chakra-ui/react";
import Card from "../../components/Card";
import CardShelf from "../../components/CardShelf";
import api from "../../search/api";
import Link from "next/link";
import { Artist, Artists, GlobalResponse } from "../../search/types";

const SearchArtist: React.FC<GlobalResponse> = ({
  topResults,
  artists,
  artist,
  tracks,
  albums,
  users,
}) => {
  const topArtists = useMemo<Artist[]>(() => {
    let top5 = [];
    if (!artists) return [];
    artists.forEach((song: Artists, idx: number) => {
      if (idx < 5) {
        top5.push(song.data);
      }
    });
    return top5;
  }, [artists]);

  const isUser = albums.totalCount < 1;

  return (
    <Stack minHeight="full" w="full" pt={100}>
      <Container maxWidth="container.xxl" px={6}>
        {isUser ? (
          <Stack width="100%" maxWidth={420}>
            <Text fontSize={24} fontWeight={700}>
              Top Result
            </Text>
            <Link href={`/user/${users[0].data.id}`}>
              <a>
                <Stack
                  py={4}
                  px={4}
                  position="relative"
                  borderRadius="md"
                  direction="column"
                  justifyContent="space-between"
                  backgroundColor="#181818"
                >
                  <Box
                    mb={4}
                    w="fit-content"
                    borderRadius={9999}
                    overflow="hidden"
                  >
                    <Image
                      borderRadius={9999}
                      objectFit="cover"
                      h={24}
                      w={24}
                      alt={users[0]?.data?.displayName}
                      src={users[0]?.data?.image?.largeImageUrl}
                    />
                  </Box>
                  <Stack>
                    <Text fontSize={30} fontWeight={700}>
                      {users[0].data.displayName}
                    </Text>
                    <Text
                      as="span"
                      fontSize={14}
                      fontWeight={600}
                      lineHeight={1.5}
                      letterSpacing={1}
                      borderRadius={9999}
                      px={3}
                      py={0.5}
                      backgroundColor="rgba(0,0,0,.2)"
                      width="fit-content"
                    >
                      PROFILE
                    </Text>
                  </Stack>
                </Stack>
              </a>
            </Link>
          </Stack>
        ) : (
          <CardShelf artist={artist} tracks={tracks} />
        )}
        <Text fontSize={24} fontWeight={700} pt={14}>
          Featuring {artist?.profile?.name}
        </Text>
        <Stack direction="row" gap={4}>
          {topResults?.map(({ data }) => (
            <Card
              key={data?.uri}
              uri={data?.uri}
              owner={data?.owner?.name}
              // description={data?.description}
              name={data?.name}
              image={data.images?.items[0]?.sources[0]?.url}
            />
          ))}
        </Stack>
        <Stack py={30} />
        <Text fontSize={24} fontWeight={700}>
          Artists
        </Text>
        <Stack direction="row" gap={4}>
          {topArtists?.map((artist) => (
            <Card
              key={artist?.uri}
              uri={artist?.uri}
              artist="Artist"
              name={artist?.profile?.name}
              image={artist?.visuals?.avatarImage?.sources[0]?.url}
            />
          ))}
        </Stack>
        <Stack py={100} />
      </Container>
    </Stack>
  );
};

export default SearchArtist;

export const getServerSideProps: GetServerSideProps<
  GlobalResponse,
  { artist: string }
> = async ({ params }) => {
  const { artist, artists, users, albums, tracks, topResults } =
    await api.getGlobalSearch(params.artist);

  return {
    props: {
      artist,
      artists,
      users,
      albums,
      tracks,
      topResults,
    },
  };
};

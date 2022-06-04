import React, { useMemo } from "react";
import { Box, Image, Container, Stack, Text } from "@chakra-ui/react";
import Card from "../../components/Card";
import CardShelf from "../../components/CardShelf";
import api from "../../search/api";
import Link from "next/link";

const SearchArtist: React.FC<any> = ({
  topResults,
  artists,
  artist,
  tracks,
  users,
}) => {
  const topArtists = useMemo(() => {
    let top5: any = [];
    if (!artists) return [];
    artists.forEach((song: any, idx: number) => {
      if (idx < 5) {
        top5.push(song.data);
      }
    });
    return top5;
  }, [artists]);

  const isUser = false

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
                  as="a"
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
          {topResults?.map(({ data }: any) => (
            <Card
              key={data?.uri}
              owner={data?.owner?.name}
              description={data?.description}
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
          {topArtists?.map((artist: any) => (
            <Card
              key={artist?.uri}
              artist="Artist"
              owner={artist?.owner?.name}
              description={artist?.description}
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

export async function getServerSideProps({ query }: any) {
  const res = await api.getGlobalSearch(query.artist);
  const artist = res.artists.items[0]?.data ?? {};
  const albums = res.albums;

  return {
    props: {
      artist,
      artists: res.artists.items,
      users: res.users.items,
      albums,
      tracks: res.tracks.items,
      topResults: res.topResults.featured,
    },
  };
}

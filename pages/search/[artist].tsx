import React, { useMemo } from "react";
import { Container, Stack, Text } from "@chakra-ui/react";
import Card from "../../components/Card";
import CardShelf from "../../components/CardShelf";
import mock from "../../crismjMock.json"

const SearchArtist: React.FC<any> = ({
  topResults,
  artists,
  artist,
  tracks,
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

  return (
    <Stack minHeight="full" w="full" pt={100}>
      <Container maxWidth="container.xxl" px={6}>
        <CardShelf artist={artist} tracks={tracks} />
        <Text fontSize={24} fontWeight={700}>
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
              key={artist?.profile.name}
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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': 'fe520d1952msha780fd254332e9dp132072jsn9248e87bd799'
	}
};

export async function getServerSideProps({ query }) {
  // const res = await fetch(
  //   `https://spotify23.p.rapidapi.com/search/?q=${query.artist}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
  //   options
  // );
  // const data = await res.json();

  const artist = mock.artists.items[0].data;
  const albums = mock.albums;

  return {
    props: {
      artist,
      artists: mock.artists.items,
      albums,
      tracks: mock.tracks.items,
      topResults: mock.topResults.featured,
      data: [],
    },
  };
}

import type { NextPage } from "next";
import { useEffect } from "react";
import { Container, Stack, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import userMock from "../miduMock.json";
import { useUser } from "../user/hooks";
import UserBanner from "../components/UserBanner";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
	}
};

const Home: NextPage = ({ initialData }) => {
  const { updateUser } = useUser()

  useEffect(() => {
    updateUser(initialData)
  }, [initialData])

  return (
    <Stack minHeight="full" w="full">
      <UserBanner />
      <Container maxWidth="container.xxl" px={6}>
        <Text fontSize={24} fontWeight={700}>
          Public Playlists
        </Text>
        <Text fontSize={24} fontWeight={700}>
          Recently played artists
        </Text>
        <Stack direction="row" gap={4}>
          {initialData?.recently_played_artists?.map(data => (
            <Card
              key={data?.name}
              artist="Artist"
              description={data?.description}
              name={data?.name}
              image={data?.image_url}
            />
          ))}
        </Stack>
        {/* <Stack py={30} />
        <Text fontSize={24} fontWeight={700}>
          Artists
        </Text>
        <Stack direction="row" gap={4}>
          {initialData?.public_playlists?.map((artist) => (
            <Card
              key={artist?.profile?.name}
              artist="Artist"
              owner={artist?.owner?.name}
              description={artist?.description}
              name={artist?.profile?.name}
              image={artist?.visuals?.avatarImage?.sources[0]?.url}
            />
          ))}
        </Stack> */}
        <Stack py={100} />
      </Container>
    </Stack>
  );
};

export default Home;

export async function getStaticProps() {
  // const user = "wildkyo";
  // let data: any = {};
  // try {
  //   const res = await fetch(
  //     `https://spotify23.p.rapidapi.com/user_profile/?id=${user}&playlistLimit=10&artistLimit=10', options`,
  //     options
  //   );

  //   if (!res.ok) {
  //     return {
  //       notFound: true
  //     }
  //   }
    
  //   data = await res.json();
  // } catch(e) {
  //   console.error(e)
  //   throw new Error('Failed to fetch API');
  // }

  // let publicPlaylists = {}
  // userMock.public_playlists.forEach(async (playlist, idx) => {
  //   if (idx < 2) {
  //     const getPlaylistId = playlist?.uri.split(":")[2]
  //     const playlistInfo = await api.getPlaylist(getPlaylistId)
  //     publicPlaylists[idx] = await playlistInfo
  //   }
  // })

  return {
    props: {
      initialData: userMock
    },
  };
}

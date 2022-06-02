import { useMemo } from "react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { Container, Stack, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import { useUser } from "../user/hooks";
import UserBanner from "../components/UserBanner";
import api from "../user/api"

const Home: NextPage = ({ initialData }) => {
  const { updateUser } = useUser()

  useEffect(() => {
    updateUser(initialData)
  }, [initialData])

  const topPlayed = useMemo(() => {
    let top5: any = [];
    if (!initialData?.recently_played_artists) return [];
    initialData.recently_played_artists.forEach(
      (artist: any, idx: number) => {
        if (idx < 5) {
          top5.push(artist);
        }
      }
    );
    return top5;
  }, [initialData]);

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
          {topPlayed?.map(data => (
            <Card
              key={data?.name}
              artist="Artist"
              description={data?.description}
              name={data?.name}
              image={data?.image_url}
            />
          ))}
        </Stack>
        <Stack py={100} />
      </Container>
    </Stack>
  );
};

export default Home;

export async function getStaticProps() {
  const user = "wildkyo";
  const data = await api.getUserProfile(user)

  return {
    props: {
      initialData: data,
    },
  };
}

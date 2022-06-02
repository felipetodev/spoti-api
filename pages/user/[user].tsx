import { Container, Stack, Text } from "@chakra-ui/react";
import React, { useMemo } from "react"
import Card from "../../components/Card";
import UserBanner from "../../components/UserBanner";
import api from "../../user/api"

const UserProfilePage: React.FC<any> = ({ userData }) => {
  const topPlayed = useMemo(() => {
    let top5: any = [];
    if (!userData?.recently_played_artists) return [];
    userData.recently_played_artists.forEach(
      (artist: any, idx: number) => {
        if (idx < 5) {
          top5.push(artist);
        }
      }
    );
    return top5;
  }, [userData]);

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
          {topPlayed.public_playlists?.map(data => (
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
  )
}

export default UserProfilePage

export async function getServerSideProps({ query }: any) {
  const res = await api.getUserProfile(query.user)

  return {
    props: {
      userData: res
    },
  };
}

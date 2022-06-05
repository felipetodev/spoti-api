import React from "react";
import { Container, Stack, Text } from "@chakra-ui/react";
import Card from "../../components/Card";
import UserBanner from "../../components/UserBanner";
import api from "../../user/api";

const UserProfilePage: React.FC<any> = ({ userData }) => {
  return (
    <Stack minHeight="full" w="full">
      <UserBanner userData={userData} />
      <Container maxWidth="container.xxl" px={6}>
        <Text fontSize={24} fontWeight={700}>
          Public Playlists
        </Text>
        {userData?.recently_played_artists?.map((data: any) => (
          <>
            <Text fontSize={24} fontWeight={700}>
              Recently played artists
            </Text>
            <Stack direction="row" gap={4}>
              <Card
                key={data?.name}
                artist="Artist"
                description={data?.description}
                name={data?.name}
                image={data?.image_url}
              />
            </Stack>
          </>
        ))}
        <Stack py={100} />
      </Container>
    </Stack>
  );
};

export default UserProfilePage;

export async function getServerSideProps({ query }: any) {
  const res = await api.getUserProfile(query.user);

  return {
    props: {
      userData: res,
    },
  };
}

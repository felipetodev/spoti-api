import React from "react";
import { GetServerSideProps } from "next";
import { Container, Stack, Text } from "@chakra-ui/react";
import Card from "../../components/Card";
import UserBanner from "../../components/UserBanner";
import api from "../../user/api";
import { Context as UserContext } from "../../user/context";

interface Props {
  userData: UserContext;
}

const UserProfilePage: React.FC<Props> = ({ userData }) => {
  return (
    <Stack minHeight="full" w="full">
      <UserBanner userData={userData} />
      <Container maxWidth="container.xxl" px={6}>
        <Text fontSize={24} fontWeight={700} py={4}>
          Recently played artists
        </Text>
        <Stack direction="row" gap={4}>
          {userData.recentlyPlayedArtists.map((data) => (
            <Card
              key={data?.name}
              artist="Artist"
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

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps<
  any,
  { user: string }
> = async ({ params }) => {
  const userData = await api.getUserProfile(params.user);

  return {
    props: {
      userData,
    },
  };
};

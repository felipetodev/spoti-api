import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import SpotifyLogo from "../Logo";
import {
  CollectionIcon,
  CreatePlaylistIcon,
  HomeIcon,
  SearchIcon,
} from "./Icons";
import { LikeHearthIcon } from "../SearchTrackResults";
import Link from "next/link";
import { useUser } from "../../user/hooks";

const Navigation: React.FC = () => {
  const { publicPlaylists } = useUser();

  return (
    <Stack position="relative" zIndex={50} minWidth={60} h="full" top={0}>
      <Stack
        as="nav"
        backgroundColor="#000"
        position="fixed"
        h="full"
        top={0}
        minWidth={60}
        px={4}
        pb={100}
        overflow="hidden"
      >
        <Stack py={6}>
          <Link href="/">
            <a>
              <SpotifyLogo marginRight={12} />
            </a>
          </Link>
        </Stack>
        <Stack gap={3}>
          <Link href="/">
            <a>
              <Stack direction="row" gap={4}>
                <HomeIcon />
                <Text fontSize="sm">Home</Text>
              </Stack>
            </a>
          </Link>
          <Link href="/search">
            <a>
              <Stack direction="row" gap={4}>
                <SearchIcon />
                <Text fontSize="sm">Search</Text>
              </Stack>
            </a>
          </Link>
          <Stack direction="row" gap={4}>
            <CollectionIcon />
            <Text fontSize="sm">Your Library</Text>
          </Stack>
        </Stack>
        <Stack gap={3} pt={8}>
          <Stack direction="row" alignItems="center" gap={4}>
            <Stack
              borderRadius="sm"
              h={6}
              w={6}
              justifyContent="center"
              alignItems="center"
              backgroundColor="#fff"
            >
              <CreatePlaylistIcon />
            </Stack>
            <Text fontSize="sm">Create Playlist</Text>
          </Stack>
          <Stack direction="row" gap={4}>
            <Stack
              borderRadius="sm"
              h={6}
              w={6}
              justifyContent="center"
              alignItems="center"
              background="linear-gradient(135deg,#450af5,#c4efd9)"
            >
              <LikeHearthIcon />
            </Stack>
            <Text fontSize="sm">Liked Songs</Text>
          </Stack>
        </Stack>
        <Stack pb={2} borderBottom="1px solid #282828" />
        <Stack
          pt={2}
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,.2)",
              borderRadius: "12px",
              height: "45.471%",
            },
          }}
        >
          {publicPlaylists?.map((playlist) => (
            <Link
              href={`/playlist/${playlist?.uri.split(":")[2]}`}
              key={playlist?.name}
            >
              <a>
                <Text
                  fontSize="sm"
                  maxWidth={48}
                  pb={2}
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {playlist?.name}
                </Text>
              </a>
            </Link>
          ))}
          {publicPlaylists?.map((playlist) => (
            <Link
              href={`/playlist/${playlist?.uri.split(":")[2]}`}
              key={playlist?.name}
            >
              <a>
                <Text
                  fontSize="sm"
                  maxWidth={48}
                  pb={2}
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {playlist?.name}
                </Text>
              </a>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navigation;

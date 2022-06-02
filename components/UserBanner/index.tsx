import React from "react";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { useUser } from "../../user/hooks";
import { OptionsSongIcon } from "../SearchTrackResults";
import { VerifiedIcon } from "../Icons";

const UserBanner: React.FC<any> = ({
  isPlaylist,
  playlistData,
  artistData,
}) => {
  const {
    username,
    userImage,
    totalPublicPlaylistsCount,
    followingCount,
    followersCount,
  } = useUser();

  const hasHeaderImage = artistData?.visuals?.headerImage?.sources[0]?.url;
  const hasHeaderColor =
    artistData?.visuals?.avatarImage?.extractedColors?.colorRaw?.hex;

  return (
    <>
      <Stack
        height="30vh"
        maxHeight={500}
        minHeight={340}
        justifyContent="flex-end"
        backgroundImage={hasHeaderImage}
        backgroundSize="cover"
        backgroundColor={hasHeaderColor || "#421121"}
        marginTop="0px !important"
      >
        <Stack
          direction="row"
          alignItems="flex-end"
          py={6}
          px={6}
          w="full"
          background="linear-gradient(transparent 0,rgba(0,0,0,.5) 100%), rgba(0,0,0,.01)"
        >
          {!hasHeaderImage && (
            <Image
              h={232}
              w={232}
              objectFit="cover"
              borderRadius={isPlaylist ? "" : 9999}
              src={
                isPlaylist && playlistData
                  ? playlistData?.images[0]?.url
                  : artistData?.visuals?.avatarImage?.sources[0]?.url ||
                    userImage
              }
              alt="user-avatar"
            />
          )}
          <Stack pl={4}>
            <Stack direction="row" alignItems="center">
              {artistData?.profile?.verified && (
                <VerifiedIcon fill="#3d91f4" mr={2} />
              )}
              <Text as="h2" fontSize="sm">
                {isPlaylist
                  ? "PUBLIC PLAYLIST"
                  : (artistData?.profile?.verified && "Verified Artist") ||
                    "PROFILE"}
              </Text>
            </Stack>
            <Text as="h1" fontWeight={700} fontSize="96px">
              {isPlaylist && playlistData
                ? playlistData.name
                : artistData?.profile?.name || username}
            </Text>
            <Stack direction="row">
              {artistData?.stats ? (
                <Stack direction="row">
                  <Text pr={1}>{artistData.stats.monthlyListeners}</Text>
                  <Text>monthly listeners</Text>
                </Stack>
              ) : (
                <>
                  {isPlaylist && playlistData.owner?.display_name && (
                    <Stack direction="row">
                      <Image
                        h={5}
                        w={5}
                        mr={1}
                        draggable={false}
                        objectFit="cover"
                        borderRadius={9999}
                        src={userImage}
                        alt="user"
                      />
                      <Text
                        fontWeight={700}
                        fontSize="sm"
                        _after={{
                          content: '"•"',
                          margin: "0px 6px",
                          fontWeight: 700,
                        }}
                      >
                        {playlistData.owner.display_name}
                      </Text>
                    </Stack>
                  )}
                  <Text fontSize="sm">
                    {isPlaylist && playlistData ? (
                      <>{playlistData.followers.total} Likes</>
                    ) : (
                      <>{totalPublicPlaylistsCount} Public Playlists</>
                    )}
                  </Text>
                  <Text
                    fontSize="sm"
                    _before={{
                      content: '"•"',
                      margin: "0px 6px",
                      fontWeight: 700,
                    }}
                  >
                    {isPlaylist && playlistData ? (
                      <>{playlistData.tracks.total} songs</>
                    ) : (
                      <>{followersCount} Followers</>
                    )}
                  </Text>
                  <Text
                    fontSize="sm"
                    _before={{
                      content: '"•"',
                      margin: "0px 6px",
                      fontWeight: 700,
                    }}
                  >
                    {followingCount} Following
                  </Text>
                </>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" p={6}>
        <Button
          mr={4}
          backgroundColor="transparent"
          border="1px solid rgba(255,255,255,.3)"
          _hover={{
            borderColor: "#fff",
          }}
        >
          Follow
        </Button>
        <OptionsSongIcon />
      </Stack>
    </>
  );
};

export default UserBanner;

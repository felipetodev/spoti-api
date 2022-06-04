import React, { useMemo } from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import { usePlayer } from "../../player/hooks";
import TimeAgo from "../../hooks/useTimeAgo";
import { getTime } from "../../utils";

export const LikeHearthIcon: React.FC<any> = (props) => (
  <Stack
    as="svg"
    fill="#fff"
    role="img"
    height="16px"
    width="16px"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
  </Stack>
);

export const OptionsSongIcon = () => (
  <svg fill="#fff" role="img" height="16" width="16" viewBox="0 0 16 16">
    <path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
  </svg>
);

export const TrackListRow: React.FC<any> = ({
  artists,
  covertArt,
  song,
  explicit,
  duration,
  isActive,
  isPlaylist,
  dateAdded,
  index,
  ...props
}) => {
  return (
    <Stack
      direction="row"
      borderRadius="md"
      width="100%"
      _hover={{ backgroundColor: "#282828" }}
      p={2}
      margin="0px !important"
      alignItems="center"
      {...props}
    >
      {isPlaylist && (
        <Text
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          w={6}
          px={2}
        >
          {index}
        </Text>
      )}
      <Stack width={10} height={10}>
        <Image objectFit="cover" src={covertArt} alt="row" />
      </Stack>
      <Stack
        width="100%"
        minWidth={260}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack minWidth={200} width={isPlaylist ? "sm" : "full"}>
          <Text
            fontSize="sm"
            fontWeight={500}
            color={isActive ? "primary.400" : ""}
          >
            {song}
          </Text>
          <Stack direction="row" alignItems="center" margin="0px !important">
            {explicit === "EXPLICIT" && (
              <Stack pr={2}>
                <Text
                  fontSize="x-small"
                  borderRadius="sm"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h={4}
                  w={4}
                  color="#000"
                  backgroundColor="rgba(255,255,255,.6)"
                >
                  E
                </Text>
              </Stack>
            )}
            {artists?.map((artist: any, idx: any) => (
              <Text key={artist?.profile?.name || artist?.id} fontSize="sm">
                {artist?.profile?.name || artist?.name}
                {idx !== artists.length - 1 && (
                  <Text as="span" display="inline-block" pr={1}>
                    {", "}
                  </Text>
                )}
              </Text>
            ))}
          </Stack>
        </Stack>
        {isPlaylist ? (
          <>
            <Stack display="flex" textAlign="start" w={300}>
              <Text
                fontSize="sm"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {song}
              </Text>
            </Stack>
            <TimeAgo fontSize="sm" timestamp={new Date(dateAdded).getTime()} />
            <Text fontSize="sm">{getTime(duration)}</Text>
          </>
        ) : (
          <>
            <LikeHearthIcon />
            <Stack px={6}>
              <Text fontSize="sm">{getTime(duration)}</Text>
            </Stack>
            <OptionsSongIcon />
          </>
        )}
      </Stack>
    </Stack>
  );
};

const SearchTrackResults: React.FC<any> = ({ tracks }) => {
  const topSongs = useMemo(() => {
    let top5: any = [];
    if (!tracks) return [];
    tracks.forEach((song: any, idx: any) => {
      if (idx < 4) {
        top5.push(song.data);
      }
    });
    return top5;
  }, [tracks]);

  const { trackData, updatePlayer, statusPlayer }: any = usePlayer();

  const onPlayTrack = (track: any) => {
    updatePlayer(track.id);
    statusPlayer(true);
  };

  return (
    <Stack width="100%">
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Text fontSize={24} fontWeight={700}>
          Songs
        </Text>
        <Text fontSize="sm">SEE ALL</Text>
      </Stack>
      {topSongs.map((songs: any, idx: any) => (
        <TrackListRow
          key={songs?.id}
          isActive={songs?.id === trackData?.id}
          onDoubleClick={() => onPlayTrack(songs)}
          cursor="pointer"
          artists={songs?.artists.items}
          covertArt={songs?.albumOfTrack?.coverArt?.sources[1]?.url}
          explicit={songs?.contentRating?.label}
          song={songs?.name}
          duration={songs?.duration?.totalMilliseconds}
        />
      ))}
    </Stack>
  );
};

export default SearchTrackResults;

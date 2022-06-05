import React, { useRef, useEffect } from "react";
import { Stack, Image, Text, Box, Container } from "@chakra-ui/react";
import {
  DeviceIcon,
  FullScreenIcon,
  PauseButtonIcon,
  PlayButtonIcon,
  QueueIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForward,
  VolumeToggleIcon,
} from "./Controls";
import { LikeHearthIcon } from "../SearchTrackResults";
import { usePlayer } from "../../player/hooks";

const PlayerControls: React.FC<any> = () => {
  // const [isPlaying, setPlaying] = useState(false);
  // const [playerStatus, setPlayerStatus] = useState({});
  const playRef = useRef(null);
  const { trackData, playing, statusPlayer }: any = usePlayer();
  const onPlayTrack = () => {
    statusPlayer(!playing);
    if (playing) {
      // @ts-ignore: Object is possibly 'null'
      playRef.current.pause();
    } else {
      // @ts-ignore: Object is possibly 'null'
      playRef.current.play();
    }
  };

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'
    if (playing) playRef.current.play();
  }, [playing, statusPlayer]);

  const timeUpdateHandler = (track: any) => {
    const current = Math.round(track.target.currentTime);
    // @ts-ignore: Object is possibly 'null'
    const duration = Math.round(playRef.current.duration);
    if (current === duration) statusPlayer(!playing);
  };

  return (
    <Stack
      as="footer"
      zIndex={54}
      className="now-playing"
      position="fixed"
      bottom={0}
      h={24}
      w="full"
      overflow="hidden"
      backgroundColor="#181818"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderTop="1px solid #282828"
    >
      <Container
        maxWidth="container.xxl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        h="full"
      >
        <Stack direction="row" alignItems="center">
          <Image w={14} h={14} src={trackData?.album?.images[0]?.url} alt="" />
          <Stack pl={2}>
            <Text fontSize="sm">{trackData?.name}</Text>
            {trackData?.artists && (
              <Text fontSize="sm">{trackData.artists[0]?.name}</Text>
            )}
            <audio
              ref={playRef}
              onTimeUpdate={timeUpdateHandler}
              src={trackData?.preview_url}
            />
          </Stack>
          <Box pl={6}>
            <LikeHearthIcon />
          </Box>
        </Stack>

        <Stack direction="column" alignItems="center" gap={4}>
          <Stack direction="row" alignItems="center" gap={4}>
            <ShuffleIcon />
            <SkipBackIcon />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#fff"
              h={8}
              w={8}
              borderRadius={9999}
              onClick={onPlayTrack}
            >
              {playing ? (
                <PauseButtonIcon cursor="pointer" fill="primary.500" />
              ) : (
                <PlayButtonIcon cursor="pointer" fill="primary.500" />
              )}
            </Box>
            <SkipForward />
            <RepeatIcon />
          </Stack>
          <Box h={1} margin="0px !important" w={400} backgroundColor="#ccc" />
        </Stack>

        <Stack direction="row" alignItems="center">
          <QueueIcon />
          <DeviceIcon />
          <VolumeToggleIcon />
          <Box backgroundColor="#fff" h={1} w={24} borderRadius={9999} />
          <FullScreenIcon />
        </Stack>
      </Container>
    </Stack>
  );
};

export default PlayerControls;

import React, { useState, useRef, useEffect } from "react";
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
import PlayerSlider from "./PlayerSlider";
import { LikeHearthIcon } from "../SearchTrackResults";
import { usePlayer } from "../../player/hooks";
import { getTime, getTimeFormat } from "../../utils";

const DEFAULT_VALUE = {
  currentTime: 0,
  duration: 0,
};

const PlayerControls: React.FC<any> = () => {
  const [songInfo, setSongInfo] = useState(DEFAULT_VALUE);
  const playRef = useRef<any>(null);
  const { trackData, playing, statusPlayer }: any = usePlayer();
  const onPlayTrack = () => {
    statusPlayer(!playing);
    if (playing) {
      playRef.current.pause();
    } else {
      playRef.current.play();
    }
  };

  useEffect(() => {
    if (playing) playRef.current.play();
  }, [playing, statusPlayer]);

  const timeUpdateHandler = (track: any) => {
    const current = Math.round(track.target.currentTime);
    const duration = Math.round(track.target.duration);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
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
              onEnded={() => {}}
            />
          </Stack>
          <Box pl={6}>
            <LikeHearthIcon />
          </Box>
        </Stack>

        <Stack direction="column" alignItems="center">
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
          <Stack direction="row" alignItems="center">
            <Text px={2} fontSize="sm" minWidth={12} textAlign="center">
              {songInfo.currentTime
                ? getTimeFormat(songInfo.currentTime)
                : "0:00"}
            </Text>
            <PlayerSlider songInfo={songInfo} />
            {trackData?.duration_ms && (
              <Text px={2} fontSize="sm" minWidth={12} textAlign="center">
                {getTime(trackData.duration_ms)}
              </Text>
            )}
          </Stack>
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

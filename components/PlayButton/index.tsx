import React from "react"
import { Stack } from "@chakra-ui/react";

const PlayButton: React.FC<any> = (props) => {
  return (
    <Stack
      {...props}
      className="play-btn"
      visibility="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom={4}
      right={4}
      h={12}
      w={12}
      backgroundColor="#1ed760"
      borderRadius={9999}
      _hover={{ transform: "scale(1.05)" }}
    >
      <svg
        role="img"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        className="Svg-sc-1bi12j5-0 jgfuCe"
      >
        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
      </svg>
    </Stack>
  );
};

export default PlayButton
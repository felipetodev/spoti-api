import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import PlayButton from "../PlayButton";
import NoImage from "../NoImage";

const Card: React.FC<any> = ({ name, artist, owner, image }) => {
  return (
    <Stack
      backgroundColor="#181818"
      maxWidth="fit-content"
      p={4}
      _hover={{ backgroundColor: "#282828" }}
    >
      <Stack
        h={170}
        w={170}
        borderRadius="md"
        overflow="hidden"
        position="relative"
        _hover={{
          ".play-btn": {
            visibility: "visible"
          }
        }}
      >
        {image ? (
          <Image
            objectFit="cover"
            borderRadius={artist ? 9999 : 0}
            h={170}
            w={170}
            src={image}
            alt={name}
          />
        ) : (
          <NoImage />
        )}
        <PlayButton />
      </Stack>
      <Stack pb={2}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color="#a7a7a7">
          {owner && `By ${owner}`}
          {artist && artist}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Card;

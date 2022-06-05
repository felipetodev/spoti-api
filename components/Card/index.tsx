import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import PlayButton from "../PlayButton";
import NoImage from "../NoImage";
import Link from "next/link";

const cardRouting = (route: string, uri: string) => {
  const id = uri?.split(":")[2];
  return route === "Artist"
    ? `/artist/${id}`
    : `/playlist/${id}`
}

const Card: React.FC<any> = ({ name, artist, owner, image, uri, albumYear }) => {
  return (
    <Link href={cardRouting(artist, uri)}>
      <a>
        <Stack
          backgroundColor="#181818"
          maxWidth="fit-content"
          p={4}
          _hover={{ backgroundColor: "#282828" }}
          borderRadius="md"
        >
          <Stack
            w="fit-content"
            borderRadius="md"
            overflow="hidden"
            position="relative"
            _hover={{
              ".play-btn": {
                visibility: "visible",
              },
            }}
          >
            {image ? (
              <Image
                objectFit="cover"
                borderRadius={artist ? 9999 : 0}
                h={160}
                w={160}
                src={image}
                alt={name}
              />
            ) : (
              <NoImage />
            )}
            <PlayButton />
          </Stack>
          <Stack pb={2} w="full">
            <Text
              fontWeight={600}
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              width={40}
            >
              {name}
            </Text>
            <Text fontSize="sm" color="#a7a7a7">
              {owner && `By ${owner}`}
              {artist && artist}
              {albumYear && albumYear}
            </Text>
          </Stack>
        </Stack>
      </a>
    </Link>
  );
};

export default Card;

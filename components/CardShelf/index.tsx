import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import SearchTrackResults from "../SearchTrackResults";
import PlayButton from "../PlayButton";
import Link from "next/link";

const ArtistCard: React.FC<any> = ({ artist }) => {
  return (
    <Stack width="100%" maxWidth={420}>
      <Text fontSize={24} fontWeight={700}>
        Top Result
      </Text>
      <Link href={`/artist/${artist?.uri?.split(":")[2]}`}>
        <a>
          <Stack
            py={4}
            px={4}
            minWidth={370}
            position="relative"
            borderRadius="md"
            direction="column"
            justifyContent="space-between"
            backgroundColor="#181818"
            _hover={{
              backgroundColor: "#282828",
              ".play-btn": {
                visibility: "visible",
              },
            }}
          >
            <Box mb={4} w="fit-content" borderRadius={9999} overflow="hidden">
              <Image
                borderRadius={9999}
                objectFit="cover"
                h={24}
                w={24}
                alt={artist?.profile?.name}
                src={artist?.visuals?.avatarImage?.sources[1]?.url}
              />
            </Box>
            <Stack>
              <Text fontSize={30} fontWeight={700}>
                {artist?.profile?.name}
              </Text>
              <Text
                as="span"
                fontSize={14}
                fontWeight={600}
                lineHeight={1.5}
                letterSpacing={1}
                borderRadius={9999}
                px={3}
                py={0.5}
                backgroundColor="rgba(0,0,0,.2)"
                width="fit-content"
              >
                ARTIST
              </Text>
            </Stack>
            <PlayButton />
          </Stack>
        </a>
      </Link>
    </Stack>
  );
};

const CardShelf: React.FC<any> = ({ artist, tracks }) => {
  return (
    <Stack direction={{ sm: "column", md: "row" }} gap={6}>
      <ArtistCard artist={artist} />
      <SearchTrackResults tracks={tracks} />
    </Stack>
  );
};

export default CardShelf;

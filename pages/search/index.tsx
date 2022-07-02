import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

const SearchPage: React.FC<any> = ({ data }) => {
  return (
    <Stack pt={20} px={6}>
      <Stack pb={10}>
        <Text fontSize={24} fontWeight={700} as="h1">
          Browse All
        </Text>
      </Stack>
      <Stack
        display="grid"
        gridTemplateColumns={{
          sm: "repeat(3,minmax(0,1fr))",
          lg: "repeat(4,minmax(0,1fr))",
          xl: "repeat(5,minmax(0,1fr))",
        }}
        gridTemplateRows="1fr"
        gridAutoRows="auto"
        gridGap={6}
        margin="0px !important"
        minWidth={600}
        pb={160}
      >
        {data?.map((chart) => (
          <Stack
            key={chart.name}
            position="relative"
            borderRadius="md"
            overflow="hidden"
          >
            <Image
              objectFit="cover"
              src={chart.images[0].url}
              alt={chart.name}
            />
            <Text
              position="absolute"
              fontSize="lg"
              fontWeight={700}
              p={2}
              top={0}
            >
              {chart.name}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default SearchPage;

export async function getStaticProps() {
  const chartsMock = require("../../charts/chartsMock.json");
  return {
    props: {
      data: chartsMock,
    },
  };
}

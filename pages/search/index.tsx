import React from "react";
import { Stack } from "@chakra-ui/react";

const SearchPage: React.FC<any> = () => {
  return (
    <Stack pt={20} px={6}>
      <h1>Tus géneros más escuchados</h1>
      <h1>{"/search"}</h1>
    </Stack>
  )
};

export default SearchPage;

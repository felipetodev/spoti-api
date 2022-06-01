import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  FormControl,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { ArrowIcon, UserWidgetNameIcon } from "../Icons";
import { SearchIcon } from "../Navigation/Icons";
import { useRouter } from "next/router";

export const ArrowButton: React.FC<any> = (props) => (
  <Box
    {...props}
    backgroundColor="rgba(0, 0, 0, .7)"
    borderRadius={9999}
    opacity={0.6}
    padding={1}
  >
    <ArrowIcon />
  </Box>
);

const DEFAULT_STATE = {
  search: "",
};

const UpperBar: React.FC<any> = ({ router }) => {
  const [inputField, setInputField] = useState(DEFAULT_STATE);
  const nextRouter = useRouter();

  const handleInput = ({ target }) => {
    setInputField({ [target.name]: target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    nextRouter.push(`/search/${inputField.search}`);
  };

  return (
    <Stack position="relative" zIndex={50}>
      <Stack
        bg="primary.400"
        as="header"
        position="fixed"
        w="full"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pl={8}
        py={2}
        pr="17rem"
      >
        <Stack height="fit-content" direction="row" alignItems="center" gap={2}>
          <ArrowButton />
          <ArrowButton transform="rotate(180deg)" />
          {router?.state?.pathname.includes("/search") && (
            <FormControl as="form" onSubmit={onSubmitForm}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon fill="#000" />}
                />
                <Input
                  name="search"
                  type="text"
                  width={340}
                  borderRadius={9999}
                  fontSize="sm"
                  value={inputField.search}
                  color="#000"
                  bg="#fff"
                  onChange={handleInput}
                  _placeholder={{ fontSize: "sm" }}
                  placeholder="Artists, songs, or podcasts"
                />
              </InputGroup>
            </FormControl>
          )}
        </Stack>
        <Stack
          overflow="hidden"
          borderRadius={9999}
          direction="row"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, .7)"
        >
          <Image
            p={1}
            borderRadius={9999}
            height={10}
            width={10}
            src="https://i.scdn.co/image/ab6775700000ee85447e82e7694df5b9a437f08d"
            alt="user"
          />
          <Text lineHeight="1rem" fontSize="sm" fontWeight={700}>
            midudev
          </Text>
          <UserWidgetNameIcon style={{ marginRight: "10px" }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UpperBar;

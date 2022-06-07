import React, { useRef } from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  FormControl,
  InputLeftElement,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { ArrowIcon, CloseIcon, UserWidgetNameIcon } from "../Icons";
import { SearchIcon } from "../Navigation/Icons";
import { useRouter } from "next/router";
import debounce from "just-debounce-it";

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

const UpperBar: React.FC<any> = ({ router }) => {
  const inputRef = useRef<any>();
  const nextRouter = useRouter();

  const handleInput = debounce(({ target }: any) => {
    nextRouter.push(`/search/${target.value}`);
  }, 300);

  const handleSearchDelete = () => {
    nextRouter.replace("/search")
    inputRef.current.value = ""
  }

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
            <FormControl as="form">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon fill="#000" />
                </InputLeftElement>
                <Input
                  ref={inputRef}
                  name="search"
                  type="text"
                  width={340}
                  borderRadius={9999}
                  fontSize="sm"
                  color="#000"
                  bg="#fff"
                  onChange={handleInput}
                  _placeholder={{ fontSize: "sm" }}
                  placeholder="Artists, songs, or podcasts"
                />
                {nextRouter.query.artist && (
                  <InputRightElement onClick={handleSearchDelete}>
                    <CloseIcon />
                  </InputRightElement>
                )}
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

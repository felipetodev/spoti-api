import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import PlayerControls from "../components/PlayerControls";
import Navigation from "../components/Navigation";
import { PlayerProvider } from "../player/context";
import { UserProvider } from "../user/context";
import UpperBar from "../components/UpperBar";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <PlayerProvider>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Navigation />
          <UpperBar router={router} />
          <Component {...pageProps} />
          <PlayerControls />
        </ChakraProvider>
      </UserProvider>
    </PlayerProvider>
  );
}

export default MyApp;

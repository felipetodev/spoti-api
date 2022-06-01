import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%",
      },
      "#__next": {
        display: "flex",
      },
      body: {
        backgroundColor: "primary.500",
        color: "#fff",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        margin: "0px !important",
      },
    },
  },
  colors: {
    primary: {
      ...theme.colors.green,
      500: "#121212",
    },
  },
});

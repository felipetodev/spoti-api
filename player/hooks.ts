import React from "react";

import { PlayerContext } from "./context";

export const usePlayer = () => {
  return React.useContext(PlayerContext)
}
import React from "react";

import { UserContext } from "./context";

export const useUser = () => {
  return React.useContext(UserContext)
}
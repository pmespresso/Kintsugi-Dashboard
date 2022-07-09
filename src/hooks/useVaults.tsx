import React from "react";
import graphql from "graphql";

import { useExtension } from "./useExtension";
import { useAccount } from "./useAccount";

export const useVaults = () => {
  const { currentAccount } = useAccount();
};

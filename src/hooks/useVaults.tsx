import React, { useEffect, useState } from "react";
import graphql from "graphql";

import { useExtension } from "./useExtension";
import { useAccount } from "./useAccount";
import fetchGraphQL from "../graphql/fetchGraphql";
import { getVaultsByAccountId } from "../graphql/queries";

export const useVaults = (account?: string) => {
  const [vaults, setVaults] = useState<any>();

  console.log("useVaults() ", account);

  useEffect(() => {
    console.log("useVaults()#useEffect ", account);
    async function fetchMyVaults() {
      const myVaults = await fetchGraphQL(getVaultsByAccountId, {
        Account_Id: account,
      });

      console.log("MY Vaults => ", myVaults);

      setVaults(myVaults);
    }

    if (account) {
      fetchMyVaults();
    }
  }, [account]);

  return { vaults };
};

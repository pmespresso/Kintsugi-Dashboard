import React, { useEffect, useState } from "react";

import fetchGraphQL from "../graphql/fetchGraphql";
import { getVaultsByAccountId } from "../graphql/queries";

export const useVaults = (account?: string) => {
  const [vaults, setVaults] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    async function fetchMyVaults() {
      try {
        const myVaults = await fetchGraphQL(getVaultsByAccountId, {
          Account_Id: account,
        });

        setVaults(myVaults.data.vaults);
      } catch (e) {
        setError(e);
      }
    }

    if (account) {
      fetchMyVaults();
    }
  }, [account]);

  return { vaults, error };
};

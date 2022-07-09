import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import React, { useState } from "react";
import graphql from "graphql";

import { useExtension } from "./useExtension";

export const useAccount = () => {
  const [currentAccount, setCurrentAccount] =
    useState<InjectedAccountWithMeta>();
  const { allAccounts } = useExtension();

  async function onSelectAccount(account: InjectedAccountWithMeta) {
    if (!allAccounts) {
      return;
    }

    for (let i = 0; i < allAccounts?.length; i++) {
      if (allAccounts[i].address === account.address) {
        setCurrentAccount(allAccounts[i]);
        console.log("current account => ", currentAccount);
      }
    }
  }

  return { currentAccount, onSelectAccount };
};

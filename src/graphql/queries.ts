
export const getVaultsByAccountId = `
query getVaultsByAccountId($Account_Id: String!) {
  vaults(where: {accountId_eq: $Account_Id}) {
    wrappedToken
    accountId
    lastActivity {
      id
    }
    id
  }
}
`;
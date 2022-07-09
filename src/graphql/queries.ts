
export const getVaultsByAccountId = `
query getVaultsByAccountId($Account_Id!: string) {
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
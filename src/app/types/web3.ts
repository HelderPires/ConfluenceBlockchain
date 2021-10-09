export type Wallet = {
  icon: string,
  name: string
}

export type TokenType = {
  token: string,
  balance: string
}

export type AccountType = {
  address: string,
  balance: string,
  tokens: TokenType[]
}


export type Token = {
    name: string;
    address: string;
}

export type Wallet = {
  icon: string,
  name: string
}


export type Balance = {
  token: Token;
  balance: string;
  balanceInWei?: string
}


export type WalletBalance = Array<Balance>

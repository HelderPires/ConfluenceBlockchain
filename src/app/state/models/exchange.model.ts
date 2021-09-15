export interface Exchange {
  address: string;
  name: string;
  info?: {
    price: number;
    volumeUSD: number;
  };
}

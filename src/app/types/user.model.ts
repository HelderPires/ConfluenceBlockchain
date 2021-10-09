import { Token } from './web3';
import { Network } from './network.model';

export type ActiveUser = {
  activeUserWallet: string;
  activeUserTokens?: ReadonlyArray<Token>;
  currentNetwork?: Network;
}


import { Exchange } from '../types/exchange.model';
import { ActiveUser } from '../types/user.model';
import { Token } from '../types/web3';

export interface AppState {
  tokens: ReadonlyArray<Token>;
  exchanges: ReadonlyArray<Exchange>;
  activeUser: ActiveUser;
}

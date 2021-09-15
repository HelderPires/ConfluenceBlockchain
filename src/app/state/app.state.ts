import { Token } from './models/tokens.model';
import { Exchange } from './models/exchange.model';

export interface AppState {
  tokens: ReadonlyArray<Token>;
  exchanges: ReadonlyArray<Exchange>;
  watchlist?: ReadonlyArray<string>;
}

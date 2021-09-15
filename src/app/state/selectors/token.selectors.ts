import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../app.state';
import { Token } from "../models/tokens.model";

export const selectTokens = createSelector(
  (state:any) => state.tokens,
  (tokens: Array<Token>) => tokens
);

// export const selectWatchlistState = createFeatureSelector<
//   AppState,
//   ReadonlyArray<string>
// >("watchlist");

// export const selectTokenWatchlist = createSelector(
//   selectTokens,
//   selectWatchlistState,
//   (tokens: Array<Token>, watchlist: Array<string>) => {
//     return watchlist.map((name) => tokens.find((token) => token.name === name));
//   }
// );

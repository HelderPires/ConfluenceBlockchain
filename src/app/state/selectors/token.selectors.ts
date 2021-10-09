import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../app.state';
import { Token } from '../../types/web3';

export const selectTokens = createSelector(
  (state:any) => state.tokens,
  (tokens: Array<Token>) => tokens
);

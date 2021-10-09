import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../app.state';
import { Token } from '../../types/web3';

export const selectExchanges = createSelector(
  (state:any) => state.exchanges,
  (exchanges: Array<Token>) => exchanges
);

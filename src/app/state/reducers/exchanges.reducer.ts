import { createReducer, on, Action } from '@ngrx/store';

import { retrievedTokenList } from '../actions/tokens.actions';
import { Token } from '../models/tokens.model';
import { retrievedExchangeList } from '../actions/exchange.actions';

export const initialState: ReadonlyArray<Token> = [];

export const exchangesReducer = createReducer(
  initialState,
  on(retrievedExchangeList, (state, { exchanges }) => exchanges)
);

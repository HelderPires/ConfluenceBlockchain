import { createReducer, on, Action } from '@ngrx/store';

import { retrievedTokenList } from '../actions/tokens.actions';
import { Token } from '../models/tokens.model';

export const initialState: ReadonlyArray<Token> = [];

export const tokensReducer = createReducer(
  initialState,
  on(retrievedTokenList, (state, { tokens }) => tokens)
);

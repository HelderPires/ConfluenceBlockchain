import { createReducer, on } from '@ngrx/store';

import { retrievedTokenList } from '../actions/tokens.actions';
import { Token } from '../../types/web3';

export const initialState: ReadonlyArray<Token> = [];

export const tokensReducer = createReducer(
  initialState,
  on(retrievedTokenList, (state, { tokens }) => tokens)
);

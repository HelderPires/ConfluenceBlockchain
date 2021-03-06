import { createAction, props } from '@ngrx/store';
import { Token } from '../../types/web3';

export const addToken = createAction(
  '[Token List] Add Token',
  props<{ tokenName: string }>()
);

export const removeToken = createAction(
  '[Token Watchlist] Remove Token',
  props<{ tokenName: string }>()
);

export const retrievedTokenList = createAction(
  '[Token List/API] Retrieve Token Success',
  props<{ tokens: Token[] }>()
);

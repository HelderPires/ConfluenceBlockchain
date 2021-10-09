import { createReducer, on } from '@ngrx/store';
import { retrievedExchangeList } from '../actions/exchange.actions';
import { Token } from '../../types/web3';

export const initialState: ReadonlyArray<Token> = [];

export const exchangesReducer = createReducer(
  initialState,
  on(retrievedExchangeList, (state, { exchanges }) => exchanges)
);

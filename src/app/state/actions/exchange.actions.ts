import { createAction, props } from '@ngrx/store';
import { Exchange } from '../models/exchange.model';

export const addExchange = createAction(
  '[Exchange List] Add Exchange',
  props<{ exchangeName: string }>()
);

export const removeExchange = createAction(
  '[Token Watchlist] Remove Exchange',
  props<{ exchangeName: string }>()
);

export const retrievedExchangeList = createAction(
  '[Token List/API] Retrieve Exchange Success',
  props<{ exchanges: Exchange[] }>()
);

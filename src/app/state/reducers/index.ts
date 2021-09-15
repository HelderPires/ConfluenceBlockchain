import { AppState } from '../app.state';

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromTokens from './tokens.reducer';
import * as fromExchanges from './exchanges.reducer';

export const reducers: ActionReducerMap<AppState> = {
  tokens: fromTokens.tokensReducer,
  exchanges: fromExchanges.exchangesReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

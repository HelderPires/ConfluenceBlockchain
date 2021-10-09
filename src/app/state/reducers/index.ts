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
import * as fromActiveUser from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  tokens: fromTokens.tokensReducer,
  exchanges: fromExchanges.exchangesReducer,
  activeUser: fromActiveUser.activeUserReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

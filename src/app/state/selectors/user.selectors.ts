import { createSelector, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { ActiveUser } from '../../types/user.model';

export const selectActiveUser = createSelector(
  (state: AppState) => state.activeUser,
  (activeUser: ActiveUser) => activeUser
);
export const selectActiveUserWallet = createSelector(
  selectActiveUser,
  (activeUser: ActiveUser) => activeUser.activeUserWallet
);
export const selectActiveUserTokens = createSelector(
  selectActiveUser,
  (activeUser: ActiveUser) => activeUser.activeUserTokens
);

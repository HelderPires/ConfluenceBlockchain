import { createReducer, on } from '@ngrx/store';
import { ActiveUser } from '../../types/user.model';
import { userLoggedin } from '../actions/user.actions';

export const initialState: ActiveUser = {
  activeUserWallet: ''
};

export const activeUSerReducer = createReducer(
  initialState,
  on(userLoggedin, (state, { activeUserWallet }) => ({...state, activeUserWallet: state.activeUserWallet}))
);

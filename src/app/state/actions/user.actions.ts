import { createAction, props } from '@ngrx/store';
import { WalletBalance } from '../../types/web3';

// export const userLogin = createAction(
//   '[User Login] User Login',
//   // props<{}>()
// );

export const userLoggedin = createAction(
  '[User Loggedin] User Loggedin',
  props<{ activeUserWallet: string }>()
);

// export const userLogout = createAction(
//   '[User Login] User Login',
//   // props<{}>()
// );

export const userLoggedout = createAction(
  '[User Loggedin] User Loggedin',
  props<{ activeUserWallet: string }>()
);

// export const retrieveWalletBalances = createAction(
//   '[User Login] User Login',
//   // props<{}>()
// );

export const retrievedWalletBalances = createAction(
  '[Wallet Balances] Retrieve Wallet Balances Success',
  props<{ activeUserWallet: Array<WalletBalance> }>()
);

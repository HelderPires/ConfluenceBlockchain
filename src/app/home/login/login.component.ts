import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../types/web3';
import { ContractService } from '../../modules/shared/services/web3.service';
import {  Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { userLoggedin } from '../../state/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // TODO: Decide if wallets should be hardcoded or fetched

  wallets: Array<Wallet> = [
    {
     icon: './assets/metamask.svg',
     name: 'Metamask'
    },
  ]

  constructor(
    public modelRef: MatDialogRef<LoginComponent>,
    private contractService: ContractService,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
  }
  login(){
    this.contractService.openMetamask().then((activeUserWallet: string) => {
      this.router.navigate(['./dashboard']);
      this.store.dispatch(userLoggedin({ activeUserWallet }))
      this.modelRef.close();
    });
  }
  onNoClick(): void {
    this.modelRef.close();
  }
}

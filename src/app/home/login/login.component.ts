import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../types/web3';
import { ContractService } from '../../modules/shared/services/web3.service';
import {  Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

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
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  login(){
    this.contractService.openMetamask().then((wallet) => {
      this.router.navigate(['./dashboard', wallet]);
      this.modelRef.close();
    });
  }
  onNoClick(): void {
    this.modelRef.close();
  }
}

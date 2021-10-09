import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponentType } from '../../types/navbar-components';
import { ContractService } from '../shared/services/web3.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent {
  params: any = {};
  userWallet: string = '';
  leftNavbarComponents: Array<NavbarComponentType> = [];
  rightNavbarComponents: Array<NavbarComponentType> = [];
  balance: any;
  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService
    ){
    this.params = this.route.params.subscribe(
      (p) => {
      this.userWallet = p['userWallet'];
      this.leftNavbarComponents = [
        {
          type: 'text',
          text: 'Confluence Blockchain App',
          link: '../home'
        },
        {
          type: 'dropdown',
          text: 'Select Network',
          options: [
            {
              text: 'Ethereum',
              value: 'Ethereum'
            },
            {
              text: 'Polygon',
              value: 'Polygon'
            },
            {
              text: 'BSC',
              value: 'BSC'
            }
          ],
          link: '../home'
        }
      ]
      this.rightNavbarComponents= [
        {
          type: 'button',
          text: 'Wallet: ' + this.userWallet,
        },
        {
          type: 'button',
          text: 'Arbitrage'
        },
        {
          type: 'button',
          text: 'Liquidation'
        },
        {
          type: 'button',
          text: 'Database'
        },
        {
          type: 'icon',
          icon: 'settings'
        }
      ]
    });
    this.contractService.getBalance(this.userWallet)
  }

}

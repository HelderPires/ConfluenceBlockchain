import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponentType } from '../../types/navbar-components';
import { ContractService } from '../shared/services/web3.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectActiveUser, selectActiveUserWallet } from '../../state/selectors/user.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent {

  leftNavbarComponents: Array<NavbarComponentType> = [];
  rightNavbarComponents: Array<NavbarComponentType> = [];



  constructor(
    private contractService: ContractService,
    private store: Store<AppState>
    ){
      this.store.pipe(select(selectActiveUserWallet)).subscribe(wallet => {
        this.leftNavbarComponents= [
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
        this.rightNavbarComponents = [
          {
            type: 'button',
            text: 'Wallet: ' + wallet,
            link: 'wallet'
          },
          {
            type: 'button',
            text: 'Arbitrage',
            link: 'arbitrage'
          },
          {
            type: 'button',
            text: 'Liquidation',
            link: 'liquidation'
          },
          {
            type: 'button',
            text: 'Database',
            link: 'dbmanage'
          },
          {
            type: 'icon',
            icon: 'settings',
            link: 'settings'
          }
        ]
      });
    }
  }

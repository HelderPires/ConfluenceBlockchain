import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: ':userWallet/arbitrage', loadChildren: () => import('../arbitrage/arbitrage.module').then(m => m.ArbitrageModule) },
    { path: ':userWallet/liquidation', loadChildren: () => import('../liquidation/liquidation.module').then(m => m.LiquidationModule) },
    { path: 'wallet/:userWallet', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletModule) },
    { path: ':userWallet/dbmanage', loadChildren: () => import('../dbmanage/dbmanage.module').then(m => m.DBManageModule) },
    { path: '', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

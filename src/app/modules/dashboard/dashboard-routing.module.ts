import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'arbitrage', loadChildren: () => import('../arbitrage/arbitrage.module').then(m => m.ArbitrageModule) },
    { path: 'liquidation', loadChildren: () => import('../liquidation/liquidation.module').then(m => m.LiquidationModule) },
    { path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletModule) },
    { path: 'dbmanage', loadChildren: () => import('../dbmanage/dbmanage.module').then(m => m.DBManageModule) },
    { path: '', loadChildren: () => import('../dbmanage/dbmanage.module').then(m => m.DBManageModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

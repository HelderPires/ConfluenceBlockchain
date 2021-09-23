import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'arbitrage', loadChildren: () => import('../arbitrage/arbitrage.module').then(m => m.ArbitrageModule) },
  { path: 'liquidation', loadChildren: () => import('../liquidation/liquidation.module').then(m => m.LiquidationModule) },
  { path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletModule) },
  { path: 'dbmanage', loadChildren: () => import('../dbmanage/dbmanage.module').then(m => m.DBManageModule) },
  { path: '', pathMatch: 'full', redirectTo: 'dbmanage' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

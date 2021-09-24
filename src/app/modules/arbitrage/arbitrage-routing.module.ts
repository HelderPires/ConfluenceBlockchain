import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbitrageComponent } from './arbitrage.component';

const routes: Routes = [
  { path: '', component: ArbitrageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArbitrageRoutingModule { }

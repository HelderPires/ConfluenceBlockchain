import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbitrageComponent } from './arbitrage.component';
import { SharedModule } from '../shared/shared.module';
import { ArbitrageRoutingModule } from './arbitrage-routing.module';



@NgModule({
  declarations: [
    ArbitrageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArbitrageRoutingModule
  ]
})
export class ArbitrageModule { }

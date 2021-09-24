import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidationComponent } from './liquidation.component';
import { SharedModule } from '../shared/shared.module';
import { LiquidationRoutingModule } from './liquidation-routing.module';



@NgModule({
  declarations: [
    LiquidationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LiquidationRoutingModule
  ]
})
export class LiquidationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TokenListComponent } from './components/tokens-list/tokens-list.component';
import { ExchangeListComponent } from './components/exchanges/exchange-list.component';
import { ArbitrageListComponent } from './components/arbitrage-list/arbitrage-list.component';
import { TokenAPIService } from 'src/app/services/token-api.service';
import { SharedModule } from '../shared/shared.module';
import { TokenAddComponent } from './components/token-add/token-add.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TokenListComponent,
    ExchangeListComponent,
    ArbitrageListComponent,
    TokenAddComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    TokenAPIService
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TokenListComponent } from './components/tokens-list/tokens-list.component';
import { ExchangeListComponent } from './components/exchanges/exchange-list.component';
import { ArbitrageWatchlistComponent } from './components/arbitrage-watchlist/arbitrage-watchlist.component';
import { TokenAPIService } from 'src/app/services/token-api.service';


@NgModule({
  declarations: [
    DashboardComponent,
    TokenListComponent,
    ExchangeListComponent,
    ArbitrageWatchlistComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    TokenAPIService
  ]
})
export class DashboardModule { }

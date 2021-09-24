import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBManageComponent } from './dbmanage.component';
import { TokenListComponent } from './components/tokens-list/tokens-list.component';
import { ExchangeListComponent } from './components/exchanges/exchange-list.component';
import { ArbitrageListComponent } from './components/arbitrage-list/arbitrage-list.component';
import { TokenAPIService } from 'src/app/services/token-api.service';
import { SharedModule } from '../shared/shared.module';
import { DBManageRoutingModule } from './dbmanage-routing.module';


@NgModule({
  declarations: [
    DBManageComponent,
    TokenListComponent,
    ExchangeListComponent,
    ArbitrageListComponent
  ],
  imports: [
    CommonModule,
    DBManageRoutingModule,
    SharedModule
  ],
  providers: [
    TokenAPIService
  ]
})
export class DBManageModule { }

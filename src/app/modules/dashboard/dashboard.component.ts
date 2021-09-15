import { Component, OnInit } from '@angular/core';
import { TokenAPIService } from 'src/app/services/token-api.service';
import { Store, select } from '@ngrx/store';
import { retrievedTokenList } from '../../state/actions/tokens.actions';
import { selectTokens } from '../../state/selectors/token.selectors';
import { selectExchanges } from '../../state/selectors/exchanges.selectors';
import { retrievedExchangeList } from '../../state/actions/exchange.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokens$ = this.store.pipe(select(selectTokens));
  exchanges$ = this.store.pipe(select(selectExchanges));


  constructor(
    private tokensService: TokenAPIService,
    private store: Store
  ) { }

  ngOnInit() {
    this.tokensService
      .getTokens()
      .subscribe((tokens) => {
        this.store.dispatch(retrievedTokenList({ tokens }))
      });
      this.tokensService
      .getExchanges()
      .subscribe((exchanges) => {
        this.store.dispatch(retrievedExchangeList({ exchanges }))
      });
  }

}


import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Token } from '../../../../state/models/tokens.model';
@Component({
  selector: 'dashboard-arbitrage-watchlist',
  templateUrl: './arbitrage-watchlist.component.html',
  styleUrls: ['../../dashboard.component.scss']
})
export class ArbitrageWatchlistComponent {
  @Input() tokens: Array<Token> = [];
  @Output() remove = new EventEmitter();
}

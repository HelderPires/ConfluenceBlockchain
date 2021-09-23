
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Token } from '../../../../state/models/tokens.model';
@Component({
  selector: 'dashboard-arbitrage-list',
  templateUrl: './arbitrage-list.component.html',
  styleUrls: ['./arbitrage-list.component.scss']
})
export class ArbitrageListComponent {
  @Input() arbitrages: Array<Token> = [];
  @Output() clicked = new EventEmitter();
}

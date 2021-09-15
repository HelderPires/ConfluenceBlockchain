import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Exchange } from '../../../../state/models/exchange.model';

@Component({
  selector: 'dashboard-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['../../dashboard.component.css'],
})
export class ExchangeListComponent {
  @Input() exchanges: Array<Exchange> = [];
  @Output() add = new EventEmitter();
}

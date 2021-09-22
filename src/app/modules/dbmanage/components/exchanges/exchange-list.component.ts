import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { Exchange } from '../../../../state/models/exchange.model';

@Component({
  selector: 'dashboard-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss'],
})
export class ExchangeListComponent {
  @Input() exchanges: Array<Exchange> = [];
  @Output() add = new EventEmitter();
}

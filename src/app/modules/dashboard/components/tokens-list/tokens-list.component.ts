import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Token } from '../../../../state/models/tokens.model';
@Component({
  selector: 'dashboard-tokens-list',
  templateUrl: './tokens-list.component.html',
  // styleUrls: ['./token-list.component.css'],
})
export class TokenListComponent implements OnInit {
  @Input() tokens: Array<Token> = [];
  @Output() add = new EventEmitter();
  ngOnInit(){
    // console.log(this.tokens)
  }
}

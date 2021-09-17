import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonActionList } from '../../../../types/button-action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() actions: ButtonActionList = {align: 'start', width: 'auto', buttons: [] };
  @Output() clicked = new EventEmitter();
  constructor() { }

}

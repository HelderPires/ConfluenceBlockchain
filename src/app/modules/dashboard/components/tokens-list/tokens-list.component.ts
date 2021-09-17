import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Token } from '../../../../state/models/tokens.model';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
@Component({
  selector: 'dashboard-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokenListComponent {
  @Input() tokens: Array<Token> = [];
  @Output() add = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  openModal(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: 'NAME', animal: 'NAME'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Token } from '../../../../state/models/tokens.model';
import { FormModalComponent } from '../../../shared/components/form-modal/form-modal.component';
import { FormField } from '../../../../types/form-field';


@Component({
  selector: 'dashboard-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokenListComponent {

  formFields: Array<FormField> = [
    {
      label: 'input1',
      type: 'text',
      controlName: 'input1'
    },
    {
      label: 'input2',
      type: 'text',
      controlName: 'input2'
    },
  ]
  @Input() tokens: Array<Token> = [];
  @Output() add = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  openModal(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {

      data: {
        fields: this.formFields,
        actions: '',
        title: 'Add Token',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

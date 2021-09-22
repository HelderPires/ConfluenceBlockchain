import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Token } from '../../../../state/models/tokens.model';
import { FormModalComponent } from '../../../shared/components/form-modal/form-modal.component';
import { FormField } from '../../../../types/form-field';
import { FormGroup } from '@angular/forms';
import { FormControlModel } from '../../../../models/form-control-model';
import { DropdownFormField } from '../../../../models/dropdown-control-model';
import { TextboxFormField } from '../../../../models/texbox-control-model';
import { FormControlService } from '../../../../services/form-control-service';

const fields: FormControlModel<string>[] = [

  new DropdownFormField({
    key: 'brave',
    label: 'Bravery Rating',
    options: [
      {key: 'solid',  value: 'Solid'},
      {key: 'great',  value: 'Great'},
      {key: 'good',   value: 'Good'},
      {key: 'unproven', value: 'Unproven'}
    ],
    order: 3
  }),

  new TextboxFormField({
    key: 'firstName',
    label: 'First name',
    value: 'Bombasto',
    required: true,
    order: 1
  }),

  new TextboxFormField({
    key: 'emailAddress',
    label: 'Email',
    type: 'email',
    order: 2
  })
];

@Component({
  selector: 'dashboard-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokenListComponent {

  @Input() tokens: Array<Token> = [];
  @Output() add = new EventEmitter();
  constructor(
    public dialog: MatDialog,
    public formService: FormControlService
    ) {}


  form = this.formService.toFormGroup(fields)
  openModal(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      data: {
        form: this.form,
        title: 'Add Token',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

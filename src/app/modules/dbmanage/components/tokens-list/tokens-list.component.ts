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
  new TextboxFormField({
    key: 'TokenName',
    label: 'Token name',
    type: 'text',
    required: true,
    order: 1
  }),

  new TextboxFormField({
    key: 'TokenAddress',
    label: 'TokenAddress',
    type: 'text',
    required: true,
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
      console.log('token is', result);
    });
  }
}

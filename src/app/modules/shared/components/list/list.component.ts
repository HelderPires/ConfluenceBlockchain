import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Token } from '../../../../state/models/tokens.model';
import { FormModalComponent } from '../../../shared/components/form-modal/form-modal.component';
import { FormControlModel } from '../../../../models/form-control-model';
import { TextboxFormField } from '../../../../models/texbox-control-model';
import { FormControlService } from '../../../shared/services/form-control-service';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items= [];
}

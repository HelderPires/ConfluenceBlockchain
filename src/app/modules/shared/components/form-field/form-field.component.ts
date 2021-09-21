import { Component, OnInit, Input } from '@angular/core';
import { FormControlModel } from '../../../../models/form-control-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  constructor() { }
  @Input() field!: FormControlModel<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}

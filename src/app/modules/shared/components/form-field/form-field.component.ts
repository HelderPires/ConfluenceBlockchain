import { Component, OnInit, Input } from '@angular/core';
import { FormControlModel } from '../../../../models/form-control-model';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../types/form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  constructor() {
  }
  @Input() field!: FormField;
  @Input() form!: FormGroup;
  ngOnInit() {
    console.log(this.field)

    console.log(this.form)
  }
  // get isValid() { return this.form.controls[this.field.key].valid; }
}

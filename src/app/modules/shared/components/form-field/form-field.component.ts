import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../types/form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  errors: Array<String> = [];
  constructor() {
  }
  @Input() field!: FormField;
  @Input() form!: FormGroup;
  ngOnInit() {
    console.log(this.field)

  }
  get isValid() {
    this.errors =  Object.keys(this.field.formControl.errors);
    return this.field.formControl.valid;
   }
}

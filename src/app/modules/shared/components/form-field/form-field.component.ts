import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormField } from '../../../../types/form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  errors: Array<string> = [];

  @Input() field!: FormField;
  @Input() form!: FormGroup;
  get isValid() {
    this.errors = Object.keys(this.field.formControl.errors || []);
    return this.field.formControl.valid;
   }
   get isTouched() {
    return this.field.formControl.touched;
   }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../types/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() form!: FormGroup;
  controls: Array<FormField> = [];
  payLoad = '';

  constructor() {
  }
  ngOnInit(){

    this.controls = Object.keys(this.form.controls).map(key =>
      {
        return {
          label: key,
          type: 'text',
          controlName: key,
          formControl: this.form.controls[key]
      }
    });
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}

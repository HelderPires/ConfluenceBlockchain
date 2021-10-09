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
  @Input() labels!: any;
  controls: Array<FormField> = [];
  payLoad = '';

  ngOnInit(){
    this.controls = Object.keys(this.form.controls).map(key =>
      {
        return {
          label: this.labels[key],
          //TODO add dynamic types
          type: 'text',
          controlName: key,
          formControl: this.form.controls[key]
      }
    });
  }
  onSubmit() {
    // TODO Change state and trigger @Effect to API
  }
}

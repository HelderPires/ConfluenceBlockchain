import { Component, Input, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { FormField } from '../../../../types/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() formFields: Array<FormField> = [];

}

import { Injectable } from '@angular/core';
import { FormControlModel } from '../models/form-control-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlServiceService {
  constructor() { }
  toFormGroup(fields: FormControlModel<string>[]) {
    const group:any = {};
    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
    });
    return new FormGroup(group)
  }
}

import { Injectable } from '@angular/core';
import { FormControlModel } from '../../../models/form-control-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {
  constructor() { }
  toFormGroup(fields: FormControlModel<string>[]) {
    const group:any = {};
    fields.map(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
    });
    return new FormGroup(group)
  }
  getLabels(fields: FormControlModel<string>[]) {
    let labels : any = {}
    fields.forEach(field => labels[field.key] = field.label)
    return labels
  }
}

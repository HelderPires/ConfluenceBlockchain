import { AbstractControl, FormControl } from '@angular/forms';
import { FormControlModel } from '../models/form-control-model';
export interface FormField {
  label: string;
  type: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' |  'text' | 'time' | 'url' | 'week';
  controlName: string;
  formControl: any
};
export interface FormFieldError {
  required: "is required",
}

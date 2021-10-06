import { Injectable } from '@angular/core';
import { FormControlModel } from '../models/form-control-model';
import { DropdownFormField } from '../models/dropdown-control-model';
import { TextboxFormField } from '../models/texbox-control-model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormContentService {

// TODO: get from a remote source of question metadata
getQuestions() {

  const fields: FormControlModel<string>[] = [

    new DropdownFormField({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3
    }),

    new TextboxFormField({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new TextboxFormField({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })
  ];

  return of(fields.sort((a, b) => a.order - b.order));
}
}

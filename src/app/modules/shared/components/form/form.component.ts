import { Component, Input, OnInit } from '@angular/core';
import { FormControlModel } from '../../../../models/form-control-model';
import { FormGroup } from '@angular/forms';
import { FormControlServiceService } from '../../../../services/form-control-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() formFields: FormControlModel<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlServiceService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formFields as FormControlModel<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}

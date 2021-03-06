
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  FormGroup } from '@angular/forms';

export type FormFieldLabel = Array<{}>
export type DialogData = {
  form: FormGroup
  title: string
  labels: FormFieldLabel
};

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent {
  constructor(
    public modelRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  onNoClick(): void {
    this.modelRef.close();
  }
}
